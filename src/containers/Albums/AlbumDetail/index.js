import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../store/action';
import Modal from '../../../UI/Modal';
import Scroll from '../../../UI/Scroll';
import SolarSystemLoading from '../../../UI/SolarSystemLoading';
import { Wrapper, AlbumInfo, SongInfo, Content } from './style';
import default200 from './default200.svg';

const AlbumDetail = ({ history }) => {
	const id = history.location.pathname.split('/').pop();
	const { newAlbumsList, searchAlbumsList, detailLoading } = useSelector((state) => state.albums);
	const dispatch = useDispatch();
	const albumDefault = {
		name: 'Oops!Cant find the album',
		picUrl: default200,
		artist: {
			name: 'Oops!Cant find the singer'
		}
	};
	let album;
	if (newAlbumsList[id]) {
		album = newAlbumsList[id];
	} else if (searchAlbumsList[id]) {
		album = searchAlbumsList[id];
	} else {
		album = albumDefault;
	}

	useEffect(() => {
		if (!album.songs || (album.songs && album.songs.length === 0)) dispatch(actionTypes.getSonglist(id));
	}, []);

	const renderInfo = () => {
		return (
			<AlbumInfo>
				<div className='cover'>
					<img src={`${album.picUrl}?param=310x310`} alt={album.name} />
				</div>
				<div className='category'>Album</div>
				<div className='name'> {album.name}</div>
				<div className='singer'>
					<span>By </span>
					{album.artist.name}
				</div>
				<div className='state'>
					<i className='iconfont'>&#xe6e2;</i>
					<i className='iconfont'>&#xea00;</i>
				</div>
			</AlbumInfo>
		);
	};

	const renderSonglist = () => {
		return (
			<SongInfo>
				{detailLoading ? (
					<SolarSystemLoading />
				) : (
					<React.Fragment>
						<div className='info'>
							{album.songs && album.songs.length}
							<span> Songs</span>
						</div>
						<Scroll>
							<Content>
								{album.songs &&
									album.songs.map((song, idx) => {
										return (
											<div className='item' key={song.id}>
												<span>{idx + 1}. </span>
												{song.name}
											</div>
										);
									})}
							</Content>
						</Scroll>
					</React.Fragment>
				)}
			</SongInfo>
		);
	};
	// to-do ondismiss err
	return (
		<Modal onDismiss={() => history.goBack()}>
			<Wrapper bgImg={album ? `${album.picUrl}?param=310x310` : default200}>
				{renderInfo()}
				{renderSonglist()}
			</Wrapper>
		</Modal>
	);
};

AlbumDetail.propTypes = {
	history: PropTypes.shape({
		location: PropTypes.shape({
			pathname: PropTypes.string
		}),
		goBack: PropTypes.func
	}).isRequired
};

export default React.memo(AlbumDetail);
