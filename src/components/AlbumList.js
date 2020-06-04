import React from 'react';
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

const AlbumList = ({ albums }) => {
	const renderList = (albums) => {
		return albums.map((album, id) => {
			return <AlbumItem album={album} key={id} />;
		});
	};
	return <AlbumsListWrapper>{renderList(albums)}</AlbumsListWrapper>;
};

export default AlbumList;
