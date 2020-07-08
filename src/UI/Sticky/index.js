import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StickyWrapper, Wrapper } from './style';

const Sticky = ({ children }) => {
	const [ fixed, setFixed ] = useState(false);
	const stickyRef = useRef();
	const fixedRef = useRef();
	useEffect(() => {
		const distance = stickyRef.current.offsetTop;
		const scrollCallBack = () => {
			if (window.pageYOffset > distance) {
				setFixed(true);
				fixedRef.current.classList.add('fixed');
			} else {
				setFixed(false);
				fixedRef.current.classList.remove('fixed');
			}
		};
		window.addEventListener('scroll', scrollCallBack);
		return () => {
			window.removeEventListener('scroll', scrollCallBack);
		};
	}, []);

	return (
		<StickyWrapper ref={stickyRef} shouldFixed={fixed}>
			<Wrapper ref={fixedRef}>{children(fixed)}</Wrapper>
		</StickyWrapper>
	);
};

Sticky.propTypes = {
	children: PropTypes.func
};

Sticky.defaultProps = {
	children: () => {}
};

export default Sticky;
