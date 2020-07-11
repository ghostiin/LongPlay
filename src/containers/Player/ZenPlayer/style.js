import styled from 'styled-components/macro';
import style from '../../../theme';

const Wrapper = styled.div`
	display: flex;
	font-family: ${style.sansFont};

	justify-content: space-between;
	width: 50vw;
	position: relative;

	.left,
	.right {
		flex: 1;
		margin: 1rem;
	}
	.zen {
		font-size: 1.8rem;
	}
	.left {
		min-width: 234.2px;
		.main {
			font-family: ${style.seridFont};
			font-size: 2.5rem;
			main: 100%;
			color: ${({ themeColor }) => themeColor || style.textColor};

			&::after {
				content: "";

				display: block;
				width: 20%;
				height: 0px;
				border: 1px solid ${style.textColor};
			}
			${style.moreWrap};
			word-break: keep-all;
		}
		.secondary {
			margin-top: 1.5rem;
			width: 100%;
			${style.noWrap};
		}
		.sub {
			opacity: 0.5;
		}
	}

	.playlist {
		margin-top: 1rem;
		color: ${style.subColor};
	}

	.out-btn {
		border: 2px solid ${style.textColor};
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		line-height: 4rem;
		text-align: center;
		position: absolute;
		cursor: pointer;
		transition: all .2s;

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(0.9);
		}
	}

	.prev {
		left: -10vw;
		top: 50%;
	}

	.next {
		right: -10vw;
		top: 50%;
	}
`;

const Control = styled.div`
	.control-btn {
		width: 80%;

		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;

		i {
			cursor: pointer;
		}
		.center {
			background-color: ${({ themeColor }) => themeColor || style.bgColorLight};
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			text-align: center;
			line-height: 3rem;
			transition: all .2s;
			color: ${style.darkColor};
			&:hover {
				transform: scale(1.1);
			}

			&:active {
				transform: scale(0.9);
			}
		}

		.prev,
		.next {
			background-color: ${style.darkColor};
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			text-align: center;
			line-height: 2.5rem;
			transition: all .2s;
			color: ${style.textColor};
			&:hover {
				transform: scale(1.1);
			}

			&:active {
				transform: scale(0.9);
			}
		}
	}
`;

const InnerPlaylist = styled.div`height: 20vh;`;

const Cover = styled.div`
	text-align: center;
	img {
		box-shadow: 0rem 0.2rem 1.9rem 0rem rgba(0, 0, 0, 0.16);
	}
`;

const LyricWrapper = styled.div`
	text-align: center;
	opacity: 0.5;
`;

const Content = styled.div``;

const Item = styled.div`
	width: 100%;
	line-height: 2.5rem;
	opacity: 0.5;
	cursor: pointer;
	${style.noWrap};
	&:not(:last-child) ::after {
		content: "";
		opacity: 0.1;
		display: block;
		width: 100%;
		height: 0px;
		border: 1px solid rgba(255, 255, 255, 1);
	}
`;

const ProgressBarWrapper = styled.div`
	padding: 1rem 0;
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

export { Wrapper, Control, InnerPlaylist, Cover, LyricWrapper, Content, Item, ProgressBarWrapper };
