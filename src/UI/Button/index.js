import React from 'react';
import propTypes from 'prop-types';
import BaseButton from './style';
import style from '../../theme';

const Button = ({ bgColor, fontColor, fontSize, subColor, children, outlined, outlinedColor }) => {
	return (
		<BaseButton
			bgColor={bgColor}
			fontColor={fontColor}
			fontSize={fontSize}
			subColor={subColor}
			outlined={outlined}
			outlinedColor={outlinedColor}
		>
			{children}
		</BaseButton>
	);
};

Button.propTypes = {
	bgColor: propTypes.string, // button背景色
	fontColor: propTypes.string, // button text颜色
	subColor: propTypes.string, // button active时显示颜色
	fontSize: propTypes.string, // button text 大小
	children: propTypes.node, // 渲染子元素
	outlined: propTypes.bool, // 是否显示outlined（outlined则背景色为透明）
	outlinedColor: propTypes.string // 显示的outline的颜色
};

Button.defaultProps = {
	bgColor: style.mainColor,
	fontColor: style.textColor,
	subColor: style.subColor,
	fontSize: '1rem',
	children: null,
	outlined: false,
	outlinedColor: style.textColor
};
export default React.memo(Button);
