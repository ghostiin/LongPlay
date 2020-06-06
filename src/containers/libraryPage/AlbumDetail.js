import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumModal from '../../components/AlbumModal';
import { chooseAlbum } from './store/action';

const AlbumDetail = ({ history, chooseAlbum, detail }) => {
	useEffect(() => {
		chooseAlbum(history.location.pathname.split('/')[2]);
	}, []);
	return <AlbumModal onDismiss={() => history.push('/library')} />;
};

const mapStateToProp = (state) => {
	return {
		detail: state.library.albumDetail
	};
};

export default connect(mapStateToProp, { chooseAlbum })(AlbumDetail);
