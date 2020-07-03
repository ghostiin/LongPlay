import styled from 'styled-components/macro';
import style from '../../theme';

const CardWrapper = styled.div`
	/* nearly 1500px */
	perspective: 94rem;
	position: relative;
	width: 22rem;
	height: 30rem;

	.side {
		background-color: ${style.darkColor};
		border-radius: 1rem;

		transition: all 1s ease;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		box-shadow: ${style.boxShadow};

		&--front {
			/* front style */
		}

		&--back {
			transform: rotateY(180deg);
		}
	}

	/* PC端效果：hover时翻转 */
	&:hover .side--front {
		transform: rotateY(180deg);
	}

	&:hover .side--back {
		transform: rotateY(0deg);
	}
`;

export default CardWrapper;
