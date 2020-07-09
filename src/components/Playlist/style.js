import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	color: ${style.textColor};
	background-color: ${style.darkColor};
	z-index: 101;
	width: 100%;
	height: 100%;
	border-radius: 1.5rem;
	padding: 3rem;
`;

const Item = styled.div`height: 200px;`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, Item };
