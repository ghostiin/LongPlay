import styled from 'styled-components/macro';
import style from '../../theme';

const InputWrapper = styled.div`
	padding-top: 1rem;
	position: relative;
	text-align: center;
	input {
		font-family: ${style.sansFont} !important;
		color: ${style.textColor};
		outline-style: none;
		border: 0;
		border-radius: 5rem;
		width: 30rem;
		height: 2rem;
		padding: 1rem 2rem;
		background-color: ${({ bgColor }) => bgColor || 'rgba(88, 71, 126, .5)'};
		text-align: center;
		&::-webkit-input-placeholder {
			color: ${style.subColor};
			text-align: center;
			font-family: "iconfont" !important;
		}

		&::-moz-placeholder {
			color: ${style.subColor};
			text-align: center;
			font-family: "iconfont" !important;
		}
	}

	i {
		position: absolute;
		top: 50%;
		right: 50%;
		/* translateX half of search input width -1rem */
		transform: translateX(14rem);
		cursor: pointer;
	}
`;

// eslint-disable-next-line import/prefer-default-export
export { InputWrapper };
