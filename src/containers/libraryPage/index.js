import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SecondStyle } from '../../theme/style';
import downArrow from '../../assets/imgs/down-arrow.svg';
import { HorizonLine as Hr } from '../../theme/style';
import Search from '../../components/Search';
import Slider from '../../components/Slider';
import AlbumList from '../../components/AlbumList';
import Button from '../../components/UI/Button';

const albums = [ 0, 1, 2, 3, 4, 5, 6 ].map(() => {
	return { imgUrl: 'https://p2.music.126.net/hPCvLRx5TxSWul9YY5n6sA==/109951165023441548.jpg?param=177y177' };
});

const Wrapper = styled.div`
	font-size: 1.6rem;
	text-align: center;
	margin-top: 7rem;
	padding-top: 5rem;
	background-color: ${({ theme }) => theme.colors.bgColor};
	position: relative;
`;

const Caption = styled.div`
	font-family: ${({ theme }) => theme.fonts.text.regular};
	color: ${({ theme }) => theme.colors.sub};
	letter-spacing: 0.2rem;
	margin-top: ${({ marginTop }) => marginTop || '6rem'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '6rem'};
`;

const LinkButton = styled(Button)`
	position: absolute;
	top:5rem;
	right:8rem;
`;

const Library = () => {
	return (
		<React.Fragment>
			<SecondStyle />
			<Wrapper>
				<img src={downArrow} />
				<Link to="/box">
					<LinkButton>Back To My Box</LinkButton>
				</Link>
				<Search />
				<Hr />
				<Caption>VOL.001 SUMMER MIRAGE</Caption>
				<Slider />
				<Caption marginTop="8rem" marginBottom="1rem">
					THE NEWEST
				</Caption>
				<Hr width="70%" />
				<AlbumList albums={albums} />
			</Wrapper>
		</React.Fragment>
	);
};

export default Library;
