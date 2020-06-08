import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Modal from './UI/Modal';
import Loadingv1 from './UI/Loading';
import AlbumItem from './AlbumItem';
import VScroll from './VScroll';
const DetailWrapper = styled.div`
	font-family: ${({ theme }) => theme.fonts.text};
	font-size: 1.6rem;
	color: ${({ theme }) => theme.colors.text};
	width: 80rem;
	max-height: 48rem;
	background-color: ${({ theme }) => theme.colors.main};
	border-radius: 2rem;
	box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);
	overflow-x: auto;
	overflow-y: hidden;
	position: relative;
	text-align: center;

	.modal-bgimg {
		opacity: 0.2;
		width: 48rem;
		height: auto;
	}
	.modal-content {
		position: absolute;
		top: 0;
		width: 100%;
		padding: 4rem;

		.inner {
			display: flex;
			justify-content: space-between;

			.left {
				text-align: left;
			}
			span {
				font-family: ${({ theme }) => theme.fonts.text.bold};
				font-size: 2rem;
				opacity: 0.5;
			}

			.right {
				display: flex;
				flex-direction: column;
				overflow-x: auto;
				text-align: right;
			}
		}
	}
`;

const AlbumModal = ({ onDismiss, detail }) => {
	const renderList = (songs) => {
		return <VScroll list={songs} onItemClick={() => {}} height="inherit" />;
	};
	const Detail = (detail) => {
		if (!detail) {
			return <div>No this Album</div>;
		} else {
			const { album, songs } = detail;
			return (
				<React.Fragment>
					<img className="modal-bgimg" src={album.picUrl} alt={album.name} />
					<div className="modal-content">
						<div className="inner">
							<div className="left">
								<span>Album</span>
								<AlbumItem album={album} titleSize="4rem" />
							</div>
							<div className="right">
								<span>Songs</span>
								{renderList(songs)}
							</div>
						</div>
					</div>
				</React.Fragment>
			);
		}
	};

	return (
		<Modal onDismiss={onDismiss}>
			<DetailWrapper>
				{detail !== undefined && detail.code !== 200 ? <Loadingv1 /> : Detail(detail)}
			</DetailWrapper>
		</Modal>
	);
};
const mapStateToprops = (state) => {
	return {
		detail: state.library.albumDetail
	};
};

export default connect(mapStateToprops)(AlbumModal);
