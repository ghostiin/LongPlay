import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
// import { useToggle } from '../../hooks';
import Select from '../../UI/Select';
import Scroll from '../../UI/Scroll';
import { Wrapper, Item } from './style';

const Playlist = ({ relativeRef }) => {
	const scrollRef = useRef();
	const selfRef = useRef();
	const controlRef = useRef();
	const [ visible, setVisible ] = useState(false);
	const toggle = useCallback(() => setVisible(!visible), [ visible ]);
	useEffect(
		() => {
			const bScroll = scrollRef.current.getBscroll();
			if (!bScroll) return;
			bScroll.refresh();
		},
		[ visible ]
	);
	useEffect(
		() => {
			function bindBodyClick(e) {
				if (e.target === selfRef.current || e.target === controlRef.current) return;
				setVisible(false);
			}
			document.addEventListener('click', bindBodyClick, false);
			return () => {
				document.removeEventListener('click', bindBodyClick, false);
			};
		},
		[ visible ]
	);
	return (
		<React.Fragment>
			<i
				className='iconfont'
				aria-hidden
				onClick={toggle}
				style={visible ? {} : { opacity: 0.75 }}
				ref={controlRef}
			>
				&#xe637;
			</i>
			<Select
				relativeRef={relativeRef}
				instance={document.querySelector('#playlist')}
				visible={visible}
				positionedElem='playlist'
			>
				<Wrapper ref={selfRef} onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>
					<Scroll ref={scrollRef}>
						<div>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
							<Item>lsdhadpsaj</Item>
						</div>
					</Scroll>
				</Wrapper>
			</Select>
		</React.Fragment>
	);
};

Playlist.propTypes = {
	relativeRef: PropTypes.oneOfType([
		// Either a function
		PropTypes.func,
		// Or the instance of a DOM native element (see the note about SSR)
		PropTypes.shape({ current: PropTypes.instanceOf(Element) })
	]).isRequired
};

export default Playlist;
