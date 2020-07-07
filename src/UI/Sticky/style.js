import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem 6rem;
	> div {
		flex: 1;
	}
	width: 100%;
`;

const StickyWrapper = styled.div`
	width: 100%;
	.fixed {
		background-color: ${style.secondaryColor};
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}
`;

// eslint-disable-next-line import/prefer-default-export
export { StickyWrapper, Wrapper };
