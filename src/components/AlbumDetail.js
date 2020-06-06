import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from './UI/Modal';
import { getAlbumDetail } from '../api/request';

const AlbumDetail = ({ history }) => {
	const [ album, setAlbum ] = useState(null);

	const fetchAlbum = async (id) => {
		const response = await getAlbumDetail(id);
		setAlbum(response);
	};
	useEffect(() => {
		fetchAlbum(history.location.pathname.split('/')[2]);
	}, []);
	return <Modal onDismiss={() => history.push('/library')} resource={album} />;
};

export default connect()(AlbumDetail);
