import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions as playerActionTypes } from '../Player/store';
import { Wrapper, Header, Logo, Bottom, PlayerWrapper } from './style';
import Media from '../../components/MediaQueries';
import PlayboxBar from '../../components/PlayboxBar';
import ZenPlayer from '../Player/ZenPlayer';
import logo from './logo.svg';
import style from '../../theme';

// function isDark(rgb) {
// 	const c = rgb.match(/\d+/g);
// 	const grayLevel = c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114;
// 	if (grayLevel >= 192) {
// 		// 若为浅色，把文字设置为黑色
// 		return false;
// 	}
// 	return true;
// }

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
	return (
		<Wrapper
			color={palette[currentAlbumId] ? palette[currentAlbumId].dark : style.bgColorDark}
			fontColor={style.textColor}
		>
			<Header>
				<div className='left'>
					<img src={logo} alt='Long Play Logo' />
				</div>
				<Media.Desktop>
					<Logo className='center'>
						LONG PLAY
						<span>good music to bad days</span>
					</Logo>
				</Media.Desktop>
				<Media.Tablet>
					<Logo className='center' tablet>
						LONG PLAY
					</Logo>
				</Media.Tablet>
				<Link to='/' className='right'>
					<div className='close-btn'>
						<div className='iconfont'>&#xe69e;</div>
					</div>
				</Link>
			</Header>
			<PlayerWrapper style={{ color: style.textColor }}>
				<ZenPlayer themeColor={palette[currentAlbumId] ? palette[currentAlbumId].light : style.bgColorLight} />
			</PlayerWrapper>
			<Bottom>
				<PlayboxBar
					boxAlbumsId={boxAlbumsId}
					boxAlbumsList={boxAlbumsList}
					switchAlbum={(id) => {
						dispatch(playerActionTypes.playNow(id));
					}}
					currentAlbumId={currentAlbumId}
				/>
			</Bottom>
		</Wrapper>
	);
}

export default React.memo(Zen);
