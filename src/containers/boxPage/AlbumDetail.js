import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumModal from '../../components/AlbumModal';
import { chooseAlbum } from '../libraryPage/store/action';

const AlbumDetail = ({ history, chooseAlbum }) => {
	useEffect(() => {
		chooseAlbum(history.location.pathname.split('/')[2]);
	}, []);
	return <AlbumModal onDismiss={() => history.push('/box')} />;
};

const mapStateToProp = (state) => {
	return {
		detail: state.library.albumDetail
	};
};

export default connect(mapStateToProp, { chooseAlbum })(AlbumDetail);
