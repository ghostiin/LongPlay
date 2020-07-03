import styled from 'styled-components/macro';
import style from '../../theme';

const BaseButton = styled.button`
	cursor: pointer;
	display: inline-block;
	border: none;
	border-radius: 2rem;
	font-size: ${({ fontSize }) => fontSize};
	font-family: ${style.sansFont};
	letter-spacing: 0.1rem;
	padding: 0.5rem 1rem;
	color: ${({ fontColor }) => fontColor};
	background-color: ${({ outlined, bgColor }) => (!outlined ? bgColor : 'transparent')};
	border: solid 0.1rem ${({ outlined, outlinedColor }) => (outlined ? outlinedColor : 'transparent')};

	transition: all .2s;

	&:focus {
		outline: 0;
	}

	&:hover {
		transform: scale(1.05, 1.05);
	}

	&:active {
		transform: scale(1, 1);
		color: ${({ subColor }) => subColor};
	}
`;

export default BaseButton;
