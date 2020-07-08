import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalWrapper } from './style';

const Modal = ({ onDismiss, children }) => {
	return ReactDOM.createPortal(
		<ModalWrapper onClick={onDismiss}>
			<div onClick={(e) => e.stopPropagation()} aria-hidden='true'>
				{children}
			</div>
		</ModalWrapper>,
		document.querySelector('#modal')
	);
};

Modal.propTypes = {
	onDismiss: PropTypes.func,
	children: PropTypes.node
};

Modal.defaultProps = {
	onDismiss: null,
	children: null
};

export default Modal;
