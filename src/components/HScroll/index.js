import React, { useRef, useState, useEffect } from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCurrentAlbum, setPlaylist, setCurrentIndex } from '../../containers/playPage/store/action';
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
const HScroll = ({ list, setCurrentAlbum, setPlaylist, setCurrentIndex }) => {
	const [ hScroll, setHScroll ] = useState(null);
	const [ currentIdx, setCurrentIdx ] = useState(0);
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

	const onClick = (id, album, songs) => {
		setCurrentIdx(id);
		setCurrentAlbum(album);
		setPlaylist(songs);
		setCurrentIndex(0);
	};
	const renderList = () => {
		return list.map((res, id) => {
			const { album, songs } = res;
			return (
				<InlineItem key={album.id} onClick={() => onClick(id, album, songs)}>
					<MiniAlbumItem album={album} show={currentIdx === id ? true : false} />
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

export default connect(null, { setCurrentAlbum, setPlaylist, setCurrentIndex })(HScroll);
