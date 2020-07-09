import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	position: fixed;
	color: ${style.textColor};
	background-color: ${style.darkColor};
	z-index: 200;
	left: 10rem;
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
