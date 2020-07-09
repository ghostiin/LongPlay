import styled from 'styled-components/macro';

const ModalWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(24, 20, 26, 0.8);
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// eslint-disable-next-line import/prefer-default-export
export { ModalWrapper };
