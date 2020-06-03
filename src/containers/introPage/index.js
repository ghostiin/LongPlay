import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import landing from '../../assets/imgs/bg-landing.png';
import landing2x from '../../assets/imgs/bg-landing@2x.png';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Landing = styled.div`
	background-image: url(${landing});
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: -10;
	zoom: 1;
	background-repeat: no-repeat;
	background-size: auto 108rem;
	background-position: center 0;
	background-size: cover;

	@media ${({ theme }) => theme.mediaQueries['above-1200']} {
		background-image: url(${landing2x});
	}
`;

const Title = styled.div`
	font-size: 12rem;
	font-family: ${({ theme }) => theme.fonts.main.bold};
	letter-spacing: 1.5rem;
	line-height: 14.5rem;
	text-transform: uppercase;
	margin-top: 30rem;
`;
const SubTitle = styled.div`
	font-size: 2.8rem;
	font-family: ${({ theme }) => theme.fonts.text.regular};
	color: ${({ theme }) => theme.colors.sub};
`;

const Starter = styled.div`
	font-size: 5rem;
	margin-top: 5rem;
	font-family: ${({ theme }) => theme.fonts.text.regular};
	a {
		color: ${({ theme }) => theme.colors.light};
	}
`;

const Intro = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<Landing />

				<Title>LONG PLAY</Title>
				<SubTitle>Listen and enjoy full albums! ♫</SubTitle>
				<Starter>
					<Link to="/play">
						<u>start now →</u>
					</Link>
				</Starter>
			</Wrapper>
		</React.Fragment>
	);
};

export default Intro;
