import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 0;
	font-family: ${style.sansFont};
	color: ${style.textColor};
`;

const ScrollWrapper = styled.div`width: 50vw;`;
const Content = styled.div`${style.scrollHContent};`;

const Item = styled.div`
	width: 7rem;
	cursor: pointer;
	opacity: 0.5;
	transition: all .2s;
	margin: 1rem;

	&:hover {
		opacity: 0.8;
		transform: scale(1.1);
	}
	&:active {
		opacity: 0.5;
		transform: scale(0.9);
	}
`;

export { Wrapper, Content, Item, ScrollWrapper };
