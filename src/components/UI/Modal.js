import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(24, 20, 26, 0.5);
	z-index: 99;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Modal = ({ onDismiss, children }) => {
	return ReactDOM.createPortal(
		<ModalWrapper onClick={onDismiss}>
			<div onClick={(e) => e.stopPropagation()}>{children}</div>
		</ModalWrapper>,
		document.querySelector('#modal')
	);
};

export default Modal;
