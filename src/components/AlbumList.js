import React from 'react';
import { forceCheck } from 'react-lazyload';
import AlbumItem from './AlbumItem';
import styled from 'styled-components';
const AlbumsListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	/* align-items: center;
	align-content: center; */
	margin: 6rem 30rem;
`;

const AlbumList = ({ albums, parentPage }) => {
	const renderList = (albums) => {
		return albums.map((album) => {
			return <AlbumItem album={album} key={album.id} parentPage={parentPage} />;
		});
	};
	return <AlbumsListWrapper onScroll={forceCheck}>{renderList(albums)}</AlbumsListWrapper>;
};

export default AlbumList;
