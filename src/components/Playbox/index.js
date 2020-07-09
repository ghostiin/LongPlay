import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actions as boxActionTypes } from './store';
import Select from '../../UI/Select';
import Scroll from '../../UI/Scroll';
import { Wrapper, GridItem, Content, Info } from './style';

const Playbox = ({ relativeRef }) => {
	const scrollRef = useRef();
	const selfRef = useRef();
	const controlRef = useRef();
	const [ visible, setVisible ] = useState(false);
	const toggle = useCallback(() => setVisible(!visible), [ visible ]);
	const { boxAlbumsList, boxAlbumsId } = useSelector((state) => state.box);
	const dispatch = useDispatch();
	useEffect(
		() => {
			if (!scrollRef.current) return;
			const bScroll = scrollRef.current.getBscroll();
			if (!bScroll) return;
			bScroll.refresh();
		},
		[ visible ]
	);
	useEffect(
		() => {
			function bindBodyClick(e) {
				if (e.target === controlRef.current) return;
				setVisible(false);
			}
			document.addEventListener('click', bindBodyClick, false);
			return () => {
				document.removeEventListener('click', bindBodyClick, false);
			};
		},
		[ visible ]
	);
	const renderList = (ids, list) => {
		return ids.map((e) => {
			const id = e.toString();
			const item = list[id].album;
			const show = !!boxAlbumsList[id];
			return (
				<GridItem key={id}>
					<div className='cover'>
						<img src={`${item.picUrl}?param=310x310`} alt={item.name} />

						<div className='msk'>
							<i className='iconfont' aria-hidden='true'>
								&#xe600;
							</i>

							{show ? (
								<i
									className='iconfont'
									onClick={() => {
										dispatch(boxActionTypes.removeAlbumFromBox(id));
									}}
									aria-hidden='true'
								>
									&#xe9fe;
								</i>
							) : (
								<i
									className='iconfont'
									onClick={() => {
										dispatch(boxActionTypes.addAlbumToBox(id));
									}}
									aria-hidden='true'
								>
									&#xea00;
								</i>
							)}
						</div>
					</div>
					<p>{item.name}</p>
					<p>
						<span>By </span>
						{item.artist.name}
					</p>
				</GridItem>
			);
		});
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
				&#xe633;
			</i>
			<Select
				relativeRef={relativeRef}
				instance={document.querySelector('#playbox')}
				visible={visible}
				positionedElem='playbox'
			>
				<Wrapper ref={selfRef} onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>
					{boxAlbumsId.length ? (
						<Scroll ref={scrollRef}>
							<Content>{renderList(boxAlbumsId, boxAlbumsList)}</Content>
						</Scroll>
					) : (
						<Info> playbox is empty,find some good music for yourself...</Info>
					)}
				</Wrapper>
			</Select>
		</React.Fragment>
	);
};

Playbox.propTypes = {
	relativeRef: PropTypes.oneOfType([
		// Either a function
		PropTypes.func,
		// Or the instance of a DOM native element (see the note about SSR)
		PropTypes.shape({ current: PropTypes.instanceOf(Element) })
	]).isRequired
};

export default React.memo(Playbox);
