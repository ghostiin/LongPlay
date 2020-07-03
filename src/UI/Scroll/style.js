import styled from 'styled-components/macro';

// 根据better-scroll原理，wrapper应为固定高度且小于内部content时才可滑动
// 这里我们将wrapper应固定高度的工作交给调用时的外部元素Wrapper去完成，外部Wrapper包裹这个innerWrapper
// 这个innerwrapper用于挂载bscroll在其上，innerWrapper继承外部wrapper（外部warpper是innerwrapper父元素）的固定宽高
// 所以innerWrapper内部的content（渲染的children）即可滑动
const ScrollInnerWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export default ScrollInnerWrapper;
