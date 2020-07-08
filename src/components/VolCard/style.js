import styled from 'styled-components/macro';
import style from '../../theme';

const CoverImg = styled.div`
	width: 100%;
	height: auto;
	img {
		border-radius: 1rem 1rem 0 0;
	}
`;
const CardInfo = styled.div`
	display: flex;
	width: 100%;

	${({ small }) => {
		if (small) {
			return `
            padding: 0 1.5rem;
            padding-top:3rem;
            `;
		}
		return `padding: 1rem;
        flex-direction: column;
        `;
	}};

	.category {
		color: ${style.subColor};
		font-weight: 500;
	}
	.name {
		font-weight: 600;
		font-size: ${({ small }) => (small ? '1.2rem' : '1.8rem')};
		${({ small }) => {
			if (small) {
				return style.moreWrap();
			}
			return style.noWrap();
		}};
	}
	.singer {
		span {
			color: ${style.subColor};
			padding-right: 0.5rem;
		}
	}

	/* small props */
	img {
		width: 6rem;
		height: 6rem;
		box-shadow: ${style.boxShadow};
		border-radius: 0.5rem;
	}
	.right {
		flex: 1;
		width: 12rem;
		/* padding-left: 1rem; */
		margin-left: 1rem;
	}
`;

const CardDescription = styled.div`
	padding: 2rem;
	height: 15rem;
	.text {
		height: 50%;
	}
`;

const CardAction = styled.div`
	padding: 0 2rem;
	font-weight: 300;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const Nameplate = styled.div`
	font-family: ${style.specialFont};
	text-align: center;
	padding-top: 1.5rem;

	width: 100%;
`;

export { CoverImg, CardInfo, CardDescription, CardAction, Nameplate };
