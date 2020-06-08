import React from 'react';
import styled from 'styled-components';
import cdBg from '../../assets/imgs/cd-bg.svg';
import cdMsk from '../../assets/imgs/cd-msk.svg';
import cdDefault from '../../assets/imgs/cd-default.svg';
import { connect } from 'react-redux';
import { togPlayerOn } from '../../containers/playPage/store/action';

const CDWrapper = styled.div`
	position: relative;
	margin-top: 2rem;

	img {
		display: block;
		width: 100%;
	}

	.cd_bg {
		width: 56rem;
		height: 56rem;
	}
	.cd_cover {
		width: 43rem;
		height: 43rem;
		position: absolute;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.cd_msk {
		width: 16rem;
		height: 16rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.play_bar {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 3rem;
		cursor: pointer;
		transition: all .2s;
		&:hover {
			font-size: 3.5rem;
		}
		&:active {
			font-size: 2.9rem;
			opacity: 0.8;
		}
	}
`;

const CDPlayer = ({ currentAlbum, isPlayerOn, togPlayerOn }) => {
	return (
		<CDWrapper>
			<img src={cdBg} className="cd_bg" />
			<img src={currentAlbum ? currentAlbum.picUrl : cdDefault} className="cd_cover" />
			<img src={cdMsk} className="cd_msk" />
			{isPlayerOn ? (
				<div className="play_bar iconfont" onClick={() => togPlayerOn(false)}>
					&#xe63d;
				</div>
			) : (
				<div className="play_bar iconfont" onClick={() => togPlayerOn(true)}>
					&#xe6e2;
				</div>
			)}
		</CDWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		currentAlbum: state.player.currentAlbum,
		isPlayerOn: state.player.isPlayerOn
	};
};

export default connect(mapStateToProps, { togPlayerOn })(CDPlayer);
