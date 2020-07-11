import React, { useEffect, useRef, useState, useCallback } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
// import { useToggle } from '../../hooks';
import Select from '../../UI/Select';
import Scroll from '../../UI/Scroll';
// import Marquee from '../../UI/Marquee';
import default120 from './default120.svg';
import { Wrapper, Item, Header, Content, ScrollWrapper } from './style';

const Playlist = ({ relativeRef, playlist, currentIdx, setCurrentIdx, prevAlbum, nextAlbum }) => {
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
	const currentSong = playlist[currentIdx];
	const getAllAr = (ar) => {
		let all = '';
		const len = ar.length;
		// eslint-disable-next-line array-callback-return
		ar.map((e, id) => {
			all += id + 1 !== len ? `${e.name} , ` : e.name;
		});
		return all;
	};
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
					<Header>
						<div className='info'>
							<img
								src={
									!_.isEmpty(currentSong) && currentSong.al ? (
										`${currentSong.al.picUrl}?param=310x310`
									) : (
										default120
									)
								}
								alt='cover'
								width='120'
								height='120'
								className='info-left'
							/>
							<div className='info-right'>
								<div className='sub'>PLAYING ALBUM</div>
								<div className='name'>
									{!_.isEmpty(currentSong) && currentSong.name ? currentSong.name : 'No Playlist'}
								</div>

								<div className='singer'>
									<span className='sub'>By </span>
									{!_.isEmpty(currentSong) && currentSong.ar ? getAllAr(currentSong.ar) : 'No Player'}
								</div>
							</div>
						</div>
						<div className='control'>
							<div className='prev' onClick={prevAlbum} aria-hidden>
								<i className='iconfont'>&#xe6db;</i>
								Prev Album
							</div>
							<div className='next' onClick={nextAlbum} aria-hidden>
								Next Album
								<i className='iconfont'>&#xe6a3;</i>
							</div>
						</div>
					</Header>
					<ScrollWrapper>
						<Scroll ref={scrollRef}>
							<Content>
								{playlist.map((e, id) => {
									return (
										<Item
											key={e.id}
											style={currentIdx === id ? { opacity: 1 } : {}}
											onClick={() => {
												setCurrentIdx(id);
											}}
										>
											<span>{id + 1}. </span>
											{e.name}
										</Item>
									);
								})}
							</Content>
						</Scroll>
					</ScrollWrapper>
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
	]).isRequired,
	playlist: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			al: {
				picUrl: PropTypes.string
			},
			ar: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string
				})
			),
			name: PropTypes.string
		})
	),
	currentIdx: PropTypes.number,
	setCurrentIdx: PropTypes.func,
	prevAlbum: PropTypes.func,
	nextAlbum: PropTypes.func
};

Playlist.defaultProps = {
	playlist: [],
	currentIdx: 0,
	setCurrentIdx: () => {},
	prevAlbum: () => {},
	nextAlbum: () => {}
};

export default React.memo(Playlist);
