import styled from 'styled-components/macro';
import style from '../../theme';

const PlayerWrapper = styled.div`
	width: 100vw;
	height: minmax(6rem, 10vh);
	position: fixed;
	bottom: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${style.textColor};
	font-family: ${style.sansFont};
`;

const PlayerBar = styled.div`
	width: 80%;
	height: 100%;
	background-color: ${style.darkColor};
	border-radius: 1.5rem;
`;
const PlayControl = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* padding: 0.5rem 0; */
	i {
		display: inline-block;
		font-size: 1.5rem;
		cursor: pointer;
		/* opacity: 0.75; */
		transition: all .2s;
		&:hover {
			transform: scale(1.1);
		}
	}
	.info {
		margin: 1rem 0;
		margin-left: 1.5rem;
		width: 30%;

		img {
			float: left;
			margin-right: 1rem;
		}
	}
	.control {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.control-btn {
			width: 80%;

			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: center;
		}

		.center {
			font-size: 2rem;
		}

		/* .cover {
			width: 10vw;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -75%);

			img {
				border-radius: 50%;
			}
		} */
	}

	.func {
		width: 30%;
		letter-spacing: 1.5rem;
		text-align: right;
	}
`;
const ProgressBarWrapper = styled.div`
	padding-top: 1rem;
	font-size: 0.8rem;
	display: flex;
	align-items: center;
	width: 100%;
	.time {
		margin: 0 0.5rem;
	}
	.progressbar {
		width: 75%;
		flex: 1;
	}
`;
export { PlayerWrapper, PlayerBar, PlayControl, ProgressBarWrapper };
