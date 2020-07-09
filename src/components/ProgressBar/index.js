import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	height: 3px;
	width: 100%;
	background-color: ${style.subColor};
	position: relative;
	cursor: pointer;
	.innerbar {
		width: 0;
		height: 100%;
		background-color: ${style.textColor};
	}
	.btn {
		position: absolute;
		left: 0;
		top: -1px;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: ${style.textColor};
		transition: all .2s;
		cursor: pointer;
		&:hover {
			width: 8px;
			height: 8px;
			top: -2.5px;
		}
	}
`;

const ProgressBar = ({ percent, changePercent }) => {
	const progressbar = useRef();
	const progress = useRef();
	const btn = useRef();
	const setProgress = (offset) => {
		progress.current.style.width = `${offset}px`;
		btn.current.style.left = `${offset}px`;
	};

	useEffect(
		() => {
			const setPercent = () => {
				if (percent > 0 && percent < 1) {
					const { width } = progressbar.current.getBoundingClientRect();
					setProgress(percent * width);
				}
			};
			setPercent();
			window.addEventListener('resize', setPercent);
			return () => {
				window.removeEventListener('resize', setPercent);
			};
		},
		[ percent ]
	);

	const handleClick = (e) => {
		const rect = progressbar.current.getBoundingClientRect();
		const offsetWidth = e.pageX - rect.left;

		setProgress(offsetWidth);
		// console.log(progress.current.clientWidth / rect.width);
		changePercent(progress.current.clientWidth / rect.width);
	};
	// to-do drag
	return (
		<Wrapper ref={progressbar} onClick={handleClick}>
			<div className='innerbar' ref={progress} aria-hidden />
			<div className='btn' ref={btn} aria-hidden />
		</Wrapper>
	);
};

ProgressBar.propTypes = {
	percent: PropTypes.number.isRequired,
	changePercent: PropTypes.func.isRequired
};

export default React.memo(ProgressBar);
