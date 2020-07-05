import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, GridContainer, GridItem, Caption, SearchBox } from './style';
import Media from '../../components/MediaQueries';
import SearchBar from '../../components/SearchBar';
import * as actionTypes from './store/action';

function Albums() {
	const {
		newAlbumsList,
		newAlbumsId,
		searchAlbumsList,
		searchAlbumsId
		// searchLoading, enterLoading
	} = useSelector((state) => state.albums);
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(actionTypes.getNewAlbumsList());
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
		return ids.map((id) => {
			const item = list[id.toString()];
			return (
				<GridItem key={id.toString()}>
					<img src={item.picUrl} alt={item.name} />
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
			<SearchBox>
				<SearchBar handleQuery={handleQuery} />
			</SearchBox>
			{query.length === 0 ? renderNewAlbumsList() : renderSearchResult()}
		</Wrapper>
	);
}

export default React.memo(Albums);
