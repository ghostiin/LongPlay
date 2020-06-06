import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumModal from '../../components/AlbumModal';
import { chooseAlbum } from '../libraryPage/store/action';

const BoxAlbumDetail = ({ history, chooseAlbum, detail }) => {
	useEffect(() => {
		const id = history.location.pathname.split('/')[2];
		try {
			if (detail.album.id.toString() !== id) chooseAlbum(id);
		} catch (e) {
			chooseAlbum(id);
		}
	}, []);

	return <AlbumModal onDismiss={() => history.push('/box')} />;
};

const mapStateToProp = (state) => {
	return {
		detail: state.library.albumDetail
	};
};

export default connect(mapStateToProp, { chooseAlbum })(BoxAlbumDetail);
