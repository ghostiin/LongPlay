import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import defaultCover from '../../assets/imgs/default-cover.svg';

const MiniAlbumItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	height: 12rem;
	white-space: nowrap;
	opacity: ${({ show }) => (show ? '1' : '0.3')};

	transition: all .4s;
	&:hover {
		opacity: 1;
		transform: scale(1.1, 1.1);
		margin: 0 3rem;
		z-index: 10;
	}

	&:active {
		transform: scale(0.9, 0.9);
		margin: 0 2rem;
		opacity: 0.8;
	}
`;
const AlbumMsk = styled.div`
	background-image: ${({ albumImg }) => `url(${albumImg})`}, url(${defaultCover});
	background-repeat: no-repeat;
	background-size: 10rem 10rem, 10rem 10rem;
	display: block;

	width: 10rem;
	height: 10rem;

	&:hover {
		cursor: pointer;
	}
`;

const MiniAlbumItem = ({ album, show }) => {
	return (
		<MiniAlbumItemWrapper show={show}>
			<LazyLoad>
				<AlbumMsk albumImg={album.picUrl} show={show} />
			</LazyLoad>
		</MiniAlbumItemWrapper>
	);
};

export default MiniAlbumItem;
