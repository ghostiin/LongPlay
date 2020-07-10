import styled from 'styled-components/macro';
import style from '../../theme';

// 设置全屏背景色
const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ color }) => color || style.bgColorDark};
	overflow: hidden;
	color: ${({ fontColor }) => fontColor || style.textColor};

	.close-btn {
		background-color: black;
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
		text-align: center;

		line-height: 4rem;

		.iconfont {
			font-size: 1.5rem;
		}

		transition: all .2s;
		&:hover {
			transform: scale(1.1);
		}
		&:active {
			transform: scale(0.9);
		}
	}
`;

const Header = styled.div`
	display: flex;

	/* color: ${style.textColor}; */
	.center {
		flex: 1;
		text-align: center;
		padding: 3rem 0 1rem 0;
	}
	.left,
	.right {
		padding: 4rem 0;
	}
	.left {
		padding-left: 4rem;
	}
	.right {
		padding-right: 4rem;
	}
`;
const Logo = styled.span`
	font-size: ${({ tablet }) => (tablet ? '3rem' : '5rem')};
	font-family: ${style.logoFont};

	span {
		font-family: ${style.specialFont};
		font-size: 1rem;
		display: block;
		transform: translate(8rem, -1.5rem);
	}
`;

const PlayerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const AlbumScroll = styled.div``;

const Content = styled.div`${style.scrollHContent};`;

const Item = styled.div`padding: 20rem;`;

const Bottom = styled.div`
	position: fixed;
	bottom: 1rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export { Wrapper, Header, Logo, PlayerWrapper, AlbumScroll, Content, Item, Bottom };
