import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SecondStyle } from '../../theme/style';
import downArrow from '../../assets/imgs/down-arrow.svg';
import AlbumList from '../../components/AlbumList';
import Button from '../../components/UI/Button';

const albums = [ 0, 1, 2 ].map(() => {
	return { imgUrl: 'https://p2.music.126.net/GvLtj95TlNaNjlmzw-nrXQ==/109951165036113617.jpg' };
});

const Wrapper = styled.div`
	font-size: 1.6rem;
	text-align: center;
	margin-top: 7rem;
	padding-top: 5rem;
	background-color: ${({ theme }) => theme.colors.bgColor};
	position: relative;
`;

const LinkButton = styled(Button)`
	position: absolute;
	top:5rem;
	right:8rem;
`;

const Box = () => {
	return (
		<React.Fragment>
			<SecondStyle />
			<Wrapper>
				<img src={downArrow} />

				<Link to="/library">
					<LinkButton>Pick Fav Albums</LinkButton>
				</Link>
				<AlbumList albums={albums} />
			</Wrapper>
		</React.Fragment>
	);
};

export default Box;
