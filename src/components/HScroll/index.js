import React, { useRef, useState, useEffect } from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';
import { connect } from 'react-redux';

import MiniAlbumItem from './MiniAlbumItem';
const HScrollWrapper = styled.div`
	margin-top: 2rem;
	width: 100%;
	height: 100%;
	overflow: hidden;
	/* display: flex;
	flex-wrap: nowrap; */
	white-space: nowrap;
`;

const InlineItem = styled.div`display: inline-block;`;
const HScroll = ({ list, currentAlbumIdx, onClick }) => {
	const [ hScroll, setHScroll ] = useState(null);

	const scrollRef = useRef();
	useEffect(() => {
		const scroll = new BScroll(scrollRef.current, {
			scrollX: true,
			probeType: 3,
			click: true,
			mouseWheel: true /*开启滚轮事件 */
		});
		setHScroll(scroll);

		return () => {
			setHScroll(null);
		};
	}, []);

	useEffect(() => {
		if (hScroll) {
			hScroll.refresh();
		}
	});

	const renderList = () => {
		return list.map((res, id) => {
			const { album, songs } = res;
			return (
				<InlineItem key={album.id} onClick={() => onClick(album, songs)}>
					<MiniAlbumItem
						album={album}
						show={currentAlbumIdx ? album.id === currentAlbumIdx ? true : false : id === 0 ? true : false}
					/>
				</InlineItem>
			);
		});
	};
	return (
		<HScrollWrapper ref={scrollRef}>
			<InlineItem>{renderList()}</InlineItem>
		</HScrollWrapper>
	);
};

const mapStateToProps = (state) => {
	if (state.player.currentAlbum)
		return {
			currentAlbumIdx: state.player.currentAlbum.id
		};
};

export default connect(mapStateToProps)(HScroll);
