import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import { Wrapper, GridContainer, GridItem, Caption, SearchBox, Logo, NavBar, NavItem } from './style';
import Media from '../../components/MediaQueries';
import SearchBar from '../../components/SearchBar';
import * as actionTypes from './store/action';
import defaultCover from './default-cover.svg';
import WaveLoading from '../../UI/WaveLoading';
import Sticky from '../../UI/Sticky';
import MiniNav from '../../components/MiniNav';
import logo from './logo.svg';

function Albums() {
	const { newAlbumsList, newAlbumsId, searchAlbumsList, searchAlbumsId, searchLoading, enterLoading } = useSelector(
		(state) => state.albums
	);
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
			dispatch(actionTypes.toggleLoading());
		},
		[ query, dispatch ]
	);

	const renderList = (ids, list) => {
		return ids.map((id) => {
			const item = list[id.toString()];
			return (
				<GridItem key={id.toString()}>
					<LazyLoad placeholder={<img src={defaultCover} alt='default' />}>
						<img src={`${item.picUrl}?param=210x210`} alt={item.name} />
					</LazyLoad>
					<p>{item.name}</p>
					<p>
						<span>By </span>
						{item.artist.name}
					</p>
				</GridItem>
			);
		});
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

	return (
		<Wrapper>
			<Sticky>
				<Logo>
					<span>
						<img src={logo} alt='Long Play Logo' />
					</span>
					LONG PLAY
				</Logo>
				<NavBar>
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
				<SearchBox>
					<SearchBar handleQuery={handleQuery} style={{ backgroundColor: '#755bb0' }} />
				</SearchBox>
			</Sticky>
			{enterLoading && <WaveLoading />}
			{query.length ? searchLoading && <WaveLoading /> : null}
			{query.length === 0 ? !enterLoading && renderNewAlbumsList() : !searchLoading && renderSearchResult()}
		</Wrapper>
	);
}

export default React.memo(Albums);
