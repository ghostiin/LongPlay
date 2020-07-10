import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions as playerActionTypes } from '../Player/store';
import { Wrapper, Header, Logo, Bottom, PlayerWrapper } from './style';
import Media from '../../components/MediaQueries';
import PlayboxBar from '../../components/PlayboxBar';
import ZenPlayer from '../Player/ZenPlayer';
import logo from './logo.svg';

function Zen() {
	const { boxAlbumsList, boxAlbumsId } = useSelector((state) => state.box);
	const { currentSong } = useSelector((state) => state.player);
	const dispatch = useDispatch();
	return (
		<Wrapper>
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
			<PlayerWrapper>
				<ZenPlayer />
			</PlayerWrapper>
			<Bottom>
				<PlayboxBar
					boxAlbumsId={boxAlbumsId}
					boxAlbumsList={boxAlbumsList}
					switchAlbum={(id) => {
						dispatch(playerActionTypes.playNow(id));
					}}
					currentAlbumId={currentSong.al ? currentSong.al.id : 0}
				/>
			</Bottom>
		</Wrapper>
	);
}

export default React.memo(Zen);
