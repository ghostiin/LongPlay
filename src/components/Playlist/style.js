import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	color: ${style.textColor};
	background-color: ${style.darkColor};
	z-index: 101;
	width: 100%;
	height: 100%;
	border-radius: 1.5rem;
	overflow: hidden;
	font-family: ${style.sansFont};
`;

const ScrollWrapper = styled.div`
	height: 70%;
	overflow: hidden;
`;

const Content = styled.div`
	width: 100%;
	padding: 1rem 0;
	padding-bottom: 2rem;
`;

const Item = styled.div`
	padding: 0 1rem;
	width: 100%;
	line-height: 2.5rem;
	position: relative;
	opacity: 0.5;
	cursor: pointer;
	${style.noWrap};
	&:not(:last-child)::after {
		content: "";

		display: block;
		width: 100%;
		height: 0px;
		border: 1px solid rgba(57, 53, 58, 1);
	}
	span {
		color: ${style.subColor};
	}
	transition: all .2s;
	&:hover {
		opacity: 1;
	}
`;

const Header = styled.div`
	height: 30%;
	border-radius: 1.5rem 1.5rem 0 0;
	background-color: rgba(15, 12, 16, 1);
	padding: 1.5rem;

	.info {
		display: flex;
		justify-content: space-between;
		&-left {
		}

		&-right {
			padding-left: 1rem;
			text-align: right;

			.sub {
				/* color: rgba(152, 152, 152, 1); */
				color: ${style.subColor};
			}

			.name {
				${style.moreWrap};
				font-size: 1.2rem;
				font-weight: 500;
			}
		}
	}

	.control {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;

		.prev,
		.next {
			cursor: pointer;
			opacity: 0.5;

			transition: all .2s;
		}

		.prev:hover,
		.next:hover {
			opacity: 1;
		}
	}
`;

/* // eslint-disable-next-line import/prefer-default-export */
export { Wrapper, Item, Header, Content, ScrollWrapper };
