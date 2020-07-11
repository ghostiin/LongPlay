import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as playerActionTypes } from '../Player/store';
import { Wrapper, Bottom, PlayerWrapper } from './style';
import PlayboxBar from '../../components/PlayboxBar';
import ZenPlayer from '../Player/ZenPlayer';
import Header from './Header';
import style from '../../theme';

function Zen() {
	const { boxAlbumsList, boxAlbumsId, palette } = useSelector((state) => state.box);
	const { playList } = useSelector((state) => state.player);
	const dispatch = useDispatch();
	const [ currentAlbumId, setCurrentAlbum ] = useState(-1);

	useEffect(
		() => {
			if (playList.length !== 0) {
				const { id } = playList[0].al;
				// console.log(palette[id]);
				setCurrentAlbum(id);
			}
		},
		[ playList ]
	);

	const handleClick = (id) => {
		dispatch(playerActionTypes.playNow(id));
	};
	const handleClickCallback = useCallback((id) => {
		handleClick(id);
	}, []);
	return (
		<Wrapper
			color={palette[currentAlbumId] ? palette[currentAlbumId].dark : style.bgColorDark}
			fontColor={style.textColor}
		>
			<Header />
			<PlayerWrapper style={{ color: style.textColor }}>
				<ZenPlayer themeColor={palette[currentAlbumId] ? palette[currentAlbumId].light : style.bgColorLight} />
			</PlayerWrapper>
			<Bottom>
				<PlayboxBar
					boxAlbumsId={boxAlbumsId}
					boxAlbumsList={boxAlbumsList}
					switchAlbum={handleClickCallback}
					// switchAlbum={(id) => {
					// 	dispatch(playerActionTypes.playNow(id));
					// }}
					currentAlbumId={currentAlbumId}
				/>
			</Bottom>
		</Wrapper>
	);
}

export default React.memo(Zen);
