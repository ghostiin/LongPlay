import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const playboxPos = (instance, top, left, width) => {
	const style = {
		// top: `${document.documentElement.scrollTop + top + height + 10}px`,
		top: `${top - top * 0.78}px`,
		left: `${document.documentElement.scrollLeft + left}px`,
		height: `${top * 0.77}px`,
		width: `${width}px`
	};
	instance.style.top = style.top;
	instance.style.left = style.left;
	instance.style.width = style.width;
	instance.style.height = style.height;
	// return style;
};
const playlistPos = (instance, top, right, width) => {
	// width 372px
	const fixedWidth = '400';
	const style = {
		// top: `${document.documentElement.scrollTop + top + height + 10}px`,
		top: `${top - top * 0.78}px`,
		height: `${top * 0.77}px`,
		right: `${window.innerWidth - right}px`,
		width: `${fixedWidth}px`
	};
	instance.style.top = style.top;
	instance.style.right = style.right;
	instance.style.width = style.width;
	instance.style.height = style.height;
	// return style;
};
const Select = ({ relativeRef, children, instance, visible, positionedElem }) => {
	useEffect(
		() => {
			const calcPosition = () => {
				const { top, left, width, right } = relativeRef.current.getBoundingClientRect();

				if (positionedElem === 'playbox') {
					playboxPos(instance, top, left, width);
				} else if (positionedElem === 'playlist') {
					playlistPos(instance, top, right, width);
				}
				if (!visible) {
					instance.style.display = 'none';
				} else {
					instance.style.display = '';
				}
			};
			calcPosition();
			window.addEventListener('resize', calcPosition); // 窗口大小变化时重新计算
			return () => {
				window.removeEventListener('resize', calcPosition);
			};
		},
		[ relativeRef, instance, visible, positionedElem ]
	);
	return ReactDOM.createPortal(children, instance);
};

Select.propTypes = {
	relativeRef: PropTypes.oneOfType([
		// Either a function
		PropTypes.func,
		// Or the instance of a DOM native element (see the note about SSR)
		PropTypes.shape({ current: PropTypes.instanceOf(Element) })
	]).isRequired,
	children: PropTypes.node.isRequired,
	instance: PropTypes.instanceOf(Element).isRequired,
	visible: PropTypes.bool.isRequired,
	positionedElem: PropTypes.string
};

export default Select;
