import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Loadingv1 from '../UI/Loading';
import AlbumItem from '../AlbumItem';

const ModalWrapper = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(24, 20, 26, 0.5);
	z-index: 99;
	display: flex;
	justify-content: center;
	align-items: center;

	.modal {
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

					.song {
						flex: 0 0 20%;
						margin: 1rem;
					}
				}
			}
		}
	}
`;

const Modal = ({ onDismiss, resource }) => {
	const Detail = ({ album, songs }) => {
		console.log(album);
		return (
			<React.Fragment>
				<img className="modal-bgimg" src={album.picUrl} />
				<div className="modal-content">
					<div className="inner">
						<div className="left">
							<span>Album</span>
							<AlbumItem album={album} titleSize="4rem" />
						</div>
						<div className="right">
							<span>Songs</span>
							{songs.map((song) => {
								return (
									<div className="song" key={song.id}>
										{song.name}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	};
	return ReactDOM.createPortal(
		<ModalWrapper onClick={onDismiss}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				{resource === null ? <Loadingv1 /> : Detail(resource)}
			</div>
		</ModalWrapper>,
		document.querySelector('#modal')
	);
};

export default Modal;
