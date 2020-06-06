import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Control from './Control/index';
import albumMsk from '../assets/imgs/album-msk.svg';
import defaultCover from '../assets/imgs/default-cover.svg';

const AlbumItemWrapper = styled.div`
	flex: 0 0 25%;
	padding: 4rem 2rem;
	text-align: left;
`;

const AlbumMsk = styled.div`
	background-image: url(${albumMsk}), ${({ albumImg }) => `url(${albumImg})`}, url(${defaultCover});
	background-repeat: no-repeat;
	background-size: 100%, 15rem 15rem, 15rem 15rem;
	display: block;

	width: 19rem;
	height: 15rem;

	&:hover {
		cursor: pointer;
	}
`;

const AlbumName = styled.div`
	font-family: ${({ theme }) => theme.fonts.main.bold};

	font-size: ${({ titleSize }) => titleSize || '1.6rem'};
	margin: 2rem 0 1rem 0;
	line-height: 3rem;
	color: #ffffff;
`;

const AlbumSinger = styled.div`
	font-family: ${({ theme }) => theme.fonts.main.regular};
	font-size: 1.4rem;
	color: #ffffff;
	margin-top: 1rem;
	span {
		opacity: 0.5;
		margin-right: 0.5rem;
	}
`;

const AlbumItem = ({ album, titleSize, parentPage }) => {
	return (
		<AlbumItemWrapper>
			<LazyLoad>
				<Link to={`/${parentPage}/${album.id}`}>
					<AlbumMsk albumImg={album.picUrl} />
				</Link>
			</LazyLoad>
			<AlbumName titleSize={titleSize}>{album.name}</AlbumName>
			<AlbumSinger>
				<span>By</span>
				{album.artist.name}
			</AlbumSinger>
			<Control resource={album} />
		</AlbumItemWrapper>
	);
};

export default AlbumItem;
