import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumModal from '../../components/AlbumModal';
import { chooseAlbum } from './store/action';

const LibraryAlbumDetail = ({ history, chooseAlbum, detail }) => {
	useEffect(() => {
		const id = history.location.pathname.split('/')[2];
		try {
			if (detail.album.id.toString() !== id) chooseAlbum(id);
		} catch (e) {
			chooseAlbum(id);
		}
	}, []);

	return <AlbumModal onDismiss={() => history.push('/library')} />;
};

const mapStateToProp = (state) => {
	return {
		detail: state.library.albumDetail
	};
};

export default connect(mapStateToProp, { chooseAlbum })(LibraryAlbumDetail);
