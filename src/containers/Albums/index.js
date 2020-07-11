import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { NavLink, Link } from 'react-router-dom';
import Media from '../../components/MediaQueries';
import { Wrapper, GridContainer, GridItem, Caption, SearchBox, Logo, NavBar, NavItem, BackTop } from './style';
import SearchBar from '../../components/SearchBar';
import * as actionTypes from './store/action';
import { actions as boxActionTypes } from '../../components/Playbox/store';
import { actions as playerActionTypes } from '../Player/store';
import defaultCover from './default-cover.svg';
import WaveLoading from '../../UI/WaveLoading';
import Sticky from '../../UI/Sticky';
import logo from './logo.svg';

function Albums({ route }) {
	const { newAlbumsList, newAlbumsId, searchAlbumsList, searchAlbumsId, searchLoading, enterLoading } = useSelector(
		(state) => state.albums
	);
	const { boxAlbumsList } = useSelector((state) => state.box);
	const dispatch = useDispatch();
	useEffect(
		() => {
			// 简单性能优化，减少发送http请求次数，不过这样无法实时获取新数据
			if (newAlbumsId.length === 0) {
				dispatch(actionTypes.getNewAlbumsList());
			}
		},
		[ newAlbumsId.length, dispatch ]
	);

	const [ query, setQuery ] = useState('');
	const handleQuery = (q) => {
		setQuery(q);
	};

	useEffect(
		() => {
			if (query.length) {
				dispatch(actionTypes.searchAlbums(query));
			}
		},
		[ query, dispatch ]
	);

	const renderList = (ids, list) => {
		if (ids.length) {
			return ids.map((e) => {
				const id = e.toString();
				const item = list[id];
				const show = !!boxAlbumsList[id];
				return (
					<GridItem key={id}>
						<div className='cover'>
							<LazyLoad placeholder={<img src={defaultCover} alt='default' />}>
								<img src={`${item.picUrl}?param=310x310`} alt={item.name} />
							</LazyLoad>
							<div className='msk'>
								<i
									className='iconfont'
									onClick={() => dispatch(playerActionTypes.playNow(id))}
									aria-hidden='true'
								>
									&#xe600;
								</i>

								{show ? (
									<i
										className='iconfont'
										onClick={() => {
											dispatch(boxActionTypes.removeAlbumFromBox(id));
										}}
										aria-hidden='true'
									>
										&#xe9fe;
									</i>
								) : (
									<i
										className='iconfont'
										onClick={() => {
											dispatch(boxActionTypes.addAlbumToBox(id));
										}}
										aria-hidden='true'
									>
										&#xea00;
									</i>
								)}
							</div>
						</div>
						<p>
							<Link to={`/albums/${id.toString()}`}>{item.name}</Link>
						</p>
						<p>
							<span>By </span>
							{item.artist.name}
						</p>
					</GridItem>
				);
			});
		}

		return 'No result';
	};

	const renderTemplate = (caption, ids, list) => {
		return (
			<Fragment>
				<Caption>{caption}</Caption>
				<Media.Tablet>
					<GridContainer Tablet>{renderList(ids, list)}</GridContainer>
				</Media.Tablet>
				<Media.Desktop>
					<GridContainer>{renderList(ids, list)}</GridContainer>
				</Media.Desktop>
			</Fragment>
		);
	};
	const renderNewAlbumsList = () => renderTemplate('THE NEWEST ALBUMS', newAlbumsId, newAlbumsList);
	const renderSearchResult = () => renderTemplate('ONLY FOR ALBUMS', searchAlbumsId, searchAlbumsList);

	const renderNav = (fixed) => {
		return (
			<NavBar style={fixed ? {} : { display: 'none' }}>
				<NavItem>
					<NavLink to='/vol' activeClassName='selected'>
						Vol
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/albums' activeClassName='selected'>
						Albums
					</NavLink>
				</NavItem>
			</NavBar>
		);
	};

	const renderLogo = (fixed) => {
		return (
			<Logo style={fixed ? {} : { display: 'none' }}>
				<span>
					<img src={logo} alt='Long Play Logo' />
				</span>
				LONG PLAY
			</Logo>
		);
	};

	const renderSticky = (fixed) => {
		return (
			<Fragment>
				<Media.More1204>
					<BackTop onClick={() => window.scrollTo(0, 0)} style={fixed ? {} : { display: 'none' }}>
						<i className='iconfont'>&#xe6a2;</i>top
					</BackTop>
					{renderLogo(fixed)}
					{renderNav(fixed)}
					<SearchBox>
						<SearchBar handleQuery={handleQuery} style={fixed ? { backgroundColor: '#755bb0' } : {}} />
					</SearchBox>
				</Media.More1204>
				<Media.Less1204>
					<BackTop onClick={() => window.scrollTo(0, 0)} style={fixed ? {} : { display: 'none' }}>
						<i className='iconfont'>&#xe6a2;</i>top
					</BackTop>
					<SearchBox>
						{renderLogo(fixed)}
						<SearchBar handleQuery={handleQuery} style={fixed ? { backgroundColor: '#755bb0' } : {}} />
					</SearchBox>
				</Media.Less1204>
			</Fragment>
		);
	};

	return (
		<Wrapper>
			<Sticky>{renderSticky}</Sticky>
			{enterLoading && <WaveLoading />}
			{query.length ? searchLoading && <WaveLoading /> : null}
			{query.length === 0 ? !enterLoading && renderNewAlbumsList() : !searchLoading && renderSearchResult()}
			{renderRoutes(route.routes)}
		</Wrapper>
	);
}

Albums.propTypes = {
	route: PropTypes.shape({
		routes: PropTypes.arrayOf(
			PropTypes.shape({
				path: PropTypes.string
			})
		)
	}).isRequired
};

export default React.memo(Albums);
