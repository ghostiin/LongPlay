import styled from 'styled-components/macro';
import dynamicMarqueeAnimation from '../../theme/animations';

const Wrapper = styled.div`overflow: hidden;`;

const TextWrapper = styled.div`
	white-space: nowrap;
	will-change: transform;
	/* animation-name: dynamicMarqueeAnimation${({ x }) => x}; */
	animation-name: dynamicMarqueeAnimation${({ x }) => x};
	animation-play-state: ${({ animationPlayState }) => animationPlayState};
	animation-duration: ${({ animationDuration }) => animationDuration};
	animation-timing-function: linear;
	animation-iteration-count: infinite;

	${({ x }) => (x ? dynamicMarqueeAnimation(x) : '')};
`;

const TextElem = styled.div`
	/* 防止与尾巴重合 */
	min-width: 100%;
	display: inline-box;
	/* margin-right值与计算动画translateX时加上的gap相等 */
	/* 防止突然闪现，平滑过渡到尾巴的开头 */
	margin-right: 40px;
	box-sizing: border-box;
`;

export { Wrapper, TextWrapper, TextElem };
