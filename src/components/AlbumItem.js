import React from 'react';
import styled from 'styled-components';
import albumMsk from '../assets/imgs/album-msk.svg';

const AlbumItemWrapper = styled.div`
	flex: 0 0 25%;
	padding: 4rem 0;
	text-align: left;
`;

const AlbumMsk = styled.span`
	background-image: url(${albumMsk}), ${({ albumImg }) => `url(${albumImg})`};
	background-repeat: no-repeat;
	background-size: 100%, 14.9rem 14.9rem;
	display: block;

	width: 19rem;
	height: 15rem;
`;

const AlbumName = styled.div`
	font-family: ${({ theme }) => theme.fonts.main.regular};

	font-size: 1.6rem;
	margin-top: 1.8rem;
	line-height: 3rem;
	color: #ffffff;
`;

const AlbumSinger = styled.div`
	font-family: ${({ theme }) => theme.fonts.main.regular};
	font-size: 1.4rem;
	color: #ffffff;
	margin-top: 0.8rem;
	span {
		opacity: 0.5;
		margin-right: 0.5rem;
	}
`;

const AlbumItem = ({ album }) => {
	return (
		<AlbumItemWrapper>
			<AlbumMsk albumImg={album.imgUrl} />
			<AlbumName>Sour Candy</AlbumName>
			<AlbumSinger>
				<span>By</span>Lady Gaga
			</AlbumSinger>
		</AlbumItemWrapper>
	);
};

export default AlbumItem;
