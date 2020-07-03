import styled from 'styled-components/macro';
import style from '../../theme';

const CardWrapper = styled.div`
	/* nearly 1500px */
	perspective: 94rem;

	background-color: ${style.darkColor};
	width: 22rem;
	height: 30rem;
	border-radius: 1rem;

	transition: all .5s;

	div {
		color: red;
	}

	/* PC端效果：hover时翻转 */
	&:hover {
		transform: rotateY(180deg);
	}
`;

export default CardWrapper;
