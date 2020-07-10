/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { actions as actionTypes } from './store';
import Marquee from '../../UI/Marquee';
import ProgressBar from '../../components/ProgressBar';
import Playbox from '../../components/Playbox';
import Playlist from '../../components/Playlist';
import { useFormatTime, usePrevious } from '../../hooks';
import { getSongUrl } from '../../api/requests';
import { PlayerWrapper, PlayerBar, PlayControl, ProgressBarWrapper } from './style';
import default80 from './default80.svg';
import style from '../../theme';

const Player = () => {
	const playerRef = useRef(null);
	const loaded = useRef();
	const audioRef = useRef();
	const { playing, playList, defaultList, mode, currentIdx, currentSong } = useSelector((state) => state.player);
	const { boxAlbumsList, boxAlbumsId } = useSelector((state) => state.box);
	const dispatch = useDispatch();

	const [ currentTime, setCurrentTime ] = useState(0);
	const [ duration, setDuration ] = useState(0);
	const percent = currentTime / duration;
	// 控制播放暂停
	useEffect(
		() => {
			if (playing) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		},
		[ playing ]
	);

	const getAllAr = (ar) => {
		let all = '';
		const len = ar.length;
		// eslint-disable-next-line array-callback-return
		ar.map((e, id) => {
			all += id + 1 !== len ? `${e.name} , ` : e.name;
		});
		return all;
	};
	const prevAlbum = () => {
		if (_.isEmpty(currentSong)) return;
		if (currentSong.al.id in boxAlbumsList) {
			let idx = _.findIndex(boxAlbumsId, (e) => {
				return e === currentSong.al.id;
			});
			if (idx === 0) {
				idx = boxAlbumsId.length - 1;
			} else {
				idx -= 1;
			}
			dispatch(actionTypes.playNow(boxAlbumsId[idx]));
			// dispatch(actionTypes.setPlaylist(songlist));
		} else {
			dispatch(actionTypes.playNow(boxAlbumsId[0]));
		}
	};
	const nextAlbum = () => {
		if (_.isEmpty(currentSong)) return;
		if (currentSong.al.id in boxAlbumsList) {
			let idx = _.findIndex(boxAlbumsId, (e) => {
				return e === currentSong.al.id;
			});
			if (idx === boxAlbumsId.length - 1) {
				idx = 0;
			} else {
				idx += 1;
			}

			dispatch(actionTypes.playNow(boxAlbumsId[idx]));
		} else {
			dispatch(actionTypes.playNow(boxAlbumsId[0]));
		}
	};
	const togglePlay = () => {
		dispatch(actionTypes.setPlayingState(!playing));
	};
	const playRepeat = () => {
		audioRef.current.currentTime = 0;
		dispatch(actionTypes.setPlayingState(true));
		audioRef.current.play();
	};
	const playPrev = () => {
		if (playList.length === 1) {
			// 只有一首歌的时候循环播放
			playRepeat();
			return;
		}
		let index = currentIdx - 1;
		// 倒回最后一首
		if (index < 0) index = playList.length - 1;
		if (!playing) dispatch(actionTypes.setPlayingState(true));
		dispatch(actionTypes.setCurrentIdx(index));
	};

	const playNext = () => {
		if (playList.length === 1) {
			// 只有一首歌的时候循环播放
			playRepeat();
			return;
		}

		let index = currentIdx + 1;
		// 倒回第一首
		if (index === playList.length) index = 0;
		if (!playing) dispatch(actionTypes.setPlayingState(true));
		dispatch(actionTypes.setCurrentIdx(index));
	};
	const onPlayEnd = () => {
		if (mode.repeat === true) {
			playRepeat();
		} else if (mode.loop === false) {
			if (currentIdx + 1 === playList.length) {
				dispatch(actionTypes.setPlayingState(false));
			}
		} else {
			playNext();
		}
	};
	const onErr = () => {
		// 当前音乐无法播放,允许切歌
		loaded.current = true;
		alert('播放出错/(ㄒoㄒ)/~~这首歌可能是被网易云私藏了');
	};

	const preSong = usePrevious(currentSong);
	// 当click了prev next后更新歌曲src
	useEffect(
		// eslint-disable-next-line consistent-return
		() => {
			// 排除非播放时: 无播放列表/无播放idx/无对应音乐资源/是同一首歌时
			if (
				!playList.length ||
				currentIdx === -1 ||
				!playList[currentIdx] ||
				(playList[currentIdx] && preSong && playList[currentIdx].id === preSong.id) ||
				loaded.current === false
			) {
				return undefined;
			}

			const current = playList[currentIdx];
			if (!current) return undefined;
			loaded.current = false;
			dispatch(actionTypes.setCurrentSong(current));
			audioRef.current.src = getSongUrl(current.id);
			setTimeout(() => {
				audioRef.current.play().then(() => {
					loaded.current = true;
				});
			});
			dispatch(actionTypes.setPlayingState(true));
			setCurrentTime(0);

			setDuration((current.dt / 1000) | 0);
		},
		[ playList, currentIdx ]
	);

	const updateCurrentTime = (e) => {
		setCurrentTime(e.target.currentTime);
	};
	const onPrecentChange = (newPrecent) => {
		const newTime = newPrecent * duration;
		audioRef.current.currentTime = newTime;
		// 改变进度条后自动播放
		if (!playing) {
			dispatch(actionTypes.setPlayingState(true));
		}
	};
	const shuffleMode = () => {
		if (!mode.shuffle) {
			// 设置shufflelist为当前正在播放list
			const shuffleList = _.shuffle(defaultList);
			dispatch(actionTypes.setPlaylist(shuffleList));
			const index = _.findIndex(shuffleList, (e) => {
				return e.id === currentSong.id;
			});
			dispatch(actionTypes.setCurrentIdx(index));
			dispatch(actionTypes.setPlayMode({ shuffle: true }));
		} else {
			dispatch(actionTypes.setPlaylist(defaultList));
			const index = _.findIndex(defaultList, (e) => {
				return e.id === currentSong.id;
			});
			dispatch(actionTypes.setCurrentIdx(index));
			dispatch(actionTypes.setPlayMode({ shuffle: false }));
		}
	};
	const repeatMode = () => {
		if (mode.repeat) {
			dispatch(actionTypes.setPlayMode({ repeat: false, loop: false }));
		} else {
			dispatch(actionTypes.setPlayMode({ repeat: true, loop: true }));
		}
	};
	const loopMode = () => {
		if (mode.loop) {
			dispatch(actionTypes.setPlayMode({ repeat: true, loop: false }));
		} else {
			dispatch(actionTypes.setPlayMode({ repeat: false, loop: true }));
		}
	};
	return (
		<React.Fragment>
			<PlayerWrapper>
				<audio ref={audioRef} onTimeUpdate={updateCurrentTime} onEnded={onPlayEnd} onError={onErr} />
				<PlayerBar ref={playerRef}>
					<PlayControl>
						<div className='info'>
							<img
								src={
									!_.isEmpty(currentSong) && currentSong.al ? (
										`${currentSong.al.picUrl}?param=310x310`
									) : (
										default80
									)
								}
								alt='cover'
								width='80'
								height='80'
							/>
							<Marquee style={{ minWidth: '30%' }}>
								{!_.isEmpty(currentSong) && currentSong.name ? (
									currentSong.name
								) : (
									'Good Music To Bad Days'
								)}
							</Marquee>
							<Marquee>
								{!_.isEmpty(currentSong) && currentSong.ar ? getAllAr(currentSong.ar) : 'Play now'}
							</Marquee>
						</div>
						<div className='control'>
							<div className='control-btn'>
								<i
									className='iconfont shuffle'
									style={mode.shuffle === true ? { color: style.mainColor } : {}}
									onClick={shuffleMode}
									aria-hidden
								>
									&#xe619;
								</i>
								<i className='iconfont prev' onClick={playPrev} aria-hidden>
									&#xed09;
								</i>
								{playing ? (
									<i className='iconfont pause center' onClick={togglePlay} aria-hidden>
										&#xe755;
									</i>
								) : (
									<i className='iconfont play center' onClick={togglePlay} aria-hidden>
										&#xe600;
									</i>
								)}

								<i className='iconfont next' onClick={playNext} aria-hidden>
									&#xe6d2;
								</i>
								{mode.repeat && (
									<i
										className='iconfont repeat'
										style={{ color: style.mainColor }}
										aria-hidden
										onClick={repeatMode}
									>
										&#xe714;
									</i>
								)}
								{mode.loop ? (
									<i
										className='iconfont looplist'
										style={{ color: style.mainColor }}
										aria-hidden
										onClick={loopMode}
									>
										&#xe713;
									</i>
								) : (
									!mode.repeat && (
										<i className='iconfont looplist' aria-hidden onClick={loopMode}>
											&#xe713;
										</i>
									)
								)}
							</div>

							<ProgressBarWrapper>
								<span className='time time-l'>{useFormatTime(currentTime)}</span>
								<div className='progressbar'>
									<ProgressBar percent={percent} changePercent={onPrecentChange} />
								</div>
								<div className='time time-r'>{useFormatTime(duration)}</div>
							</ProgressBarWrapper>
						</div>
						<div className='func'>
							<Playlist
								relativeRef={playerRef}
								prevAlbum={prevAlbum}
								nextAlbum={nextAlbum}
								playlist={playList}
								currentIdx={currentIdx}
								setCurrentIdx={(id) => {
									dispatch(actionTypes.setCurrentIdx(id));
								}}
							/>
							<Playbox relativeRef={playerRef} />
						</div>
					</PlayControl>
				</PlayerBar>
			</PlayerWrapper>
		</React.Fragment>
	);
};

export default Player;
