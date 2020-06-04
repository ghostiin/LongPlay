import styled from 'styled-components';
import searchLogo from '../../assets/imgs/search-logo.svg';
export default styled.input`
	font-family: ${({ theme }) => theme.fonts.text.regular};
	outline-style: none;
	padding: 1rem 4rem;
	width: ${({ inputWidth }) => inputWidth || '45rem'};
	height: ${({ inputHeight }) => inputHeight || '4rem'};

	background: url(${({ inputLogo }) => inputLogo || searchLogo}) no-repeat 1rem center/1.8rem rgba(81, 80, 86);
	border: 0;
	border-radius: 80px;

	color: ${({ inputColor }) => inputColor || '#fff'};

	&::-webkit-input-placeholder {
		font-family: ${({ theme }) => theme.fonts.text.regular};
		font-size: 1.8rem;

		color: #fff;
	}

	&::-moz-placeholder {
		font-family: ${({ theme }) => theme.fonts.text.regular};
		font-size: 1.8rem;

		color: #fff;
	}
`;
