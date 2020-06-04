import styled from 'styled-components';
import logo from '../../assets/imgs/TITLE-LOGO.svg';

export default styled.button`
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.main};
	text-decoration: none;
	padding: 1rem 2rem;
	border-radius: 2rem;
	font-size: 1.8rem;
	font-family: ${({ theme }) => theme.fonts.text.regular};
	border: none;
	cursor: pointer;
	display: inline-block;

	transition: all .2s;

	&:link,
	:visited {
		color: ${({ theme }) => theme.colors.text};
		background-color: ${({ theme }) => theme.colors.main};
		text-decoration: none;
		padding: 1rem 2rem;
		border-radius: 2rem;
		font-size: 1.8rem;
		font-family: ${({ theme }) => theme.fonts.text.regular};
		border: none;
		cursor: pointer;
		display: inline-block;
	}

	&:focus {
		outline: 0;
	}

	&:hover {
		transform: scale(1.05, 1.05);
		background-color: ${({ theme }) => theme.colors.main};
	}

	&:active {
		transform: scale(1, 1);
		background-color: ${({ theme }) => theme.colors.main};
		color: ${({ theme }) => theme.colors.sub};
	}
`;
