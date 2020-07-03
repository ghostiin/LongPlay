import styled from 'styled-components/macro';
import style from './index';

const Inform = styled.div`
	background: linear-gradient(${style.bgColorLight}, ${style.bgColorDark});
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.8rem;
	color: ${style.textColor};
`;

export default { Inform };
