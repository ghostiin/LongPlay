import React from 'react';
import PropTypes from 'prop-types';
import { useAnimationPlayState, useAnimationDuration } from './hooks';
import { Wrapper, TextWrapper, TextElem } from './style';

const Marquee = ({ speed, children, style }) => {
	const { textWrapper, animationPlayState } = useAnimationPlayState();
	const { textElem, calcElem, dynamicX, animationDuration } = useAnimationDuration(speed);
	// 添加尾巴防止出现突然闪现回开头
	return (
		<Wrapper style={{ ...style }} ref={calcElem}>
			<TextWrapper
				ref={textWrapper}
				animationPlayState={animationPlayState}
				animationDuration={animationDuration}
				x={dynamicX.current}
			>
				<TextElem ref={textElem}>{children}</TextElem>
				<TextElem>{children}</TextElem>
			</TextWrapper>
		</Wrapper>
	);
};

Marquee.propTypes = {
	speed: PropTypes.number, // 滚动速度
	children: PropTypes.string.isRequired, // 暂时只支持文字
	style: PropTypes.shape({
		height: PropTypes.string
	})
};

Marquee.defaultProps = {
	speed: 1,
	style: {
		height: 'inherit'
	}
};

export default Marquee;
