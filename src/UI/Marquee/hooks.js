import { useEffect, useRef, useState } from 'react';

// 控制animation-play-state
// example: 监听鼠标相关事件，返回触发的animation-play-state
const useAnimationPlayState = () => {
	const textWrapper = useRef(null);
	const [ animationPlayState, setAnimationPlayState ] = useState(undefined);

	useEffect(() => {
		const mouseOutHandler = function() {
			setAnimationPlayState('running');
		};
		const mouseInHandler = function() {
			setAnimationPlayState('paused');
		};
		textWrapper.current.addEventListener('mouseenter', mouseInHandler);
		textWrapper.current.addEventListener('mouseleave', mouseOutHandler);
		const forCleanRef = textWrapper; // 防止在clean使ref.current早已变化
		return () => {
			forCleanRef.current.removeEventListener('mouseenter', mouseInHandler);
			forCleanRef.current.removeEventListener('mouseleave', mouseOutHandler);
		};
	}, []);
	return { textWrapper, animationPlayState };
};

const useAnimationDuration = (speed) => {
	const textElem = useRef(null);
	const calcElem = useRef(null);
	const [ animationDuration, setAnimationDuration ] = useState(undefined);
	const dynamicX = useRef(0);

	useEffect(
		() => {
			const marqueeRun = () => {
				const marqueeSpeed = speed || 1;
				// 只有当textElem大于外部组件Wrapper的宽度时才发生滚动
				if (textElem.current.clientWidth > calcElem.current.clientWidth) {
					const textElemWidth = textElem.current.clientWidth;
					const width = textElemWidth + 40;
					dynamicX.current = `-${width}px`; // dynamicMarqueeAnimation的 DYNAMIC_VALUE值
					setAnimationDuration(`${width * 20 / marqueeSpeed}ms`);
				}
				console.log(textElem.current.clientWidth, textElem.current.scrollWidth, calcElem.current.clientWidth);
			};
			marqueeRun();
			window.addEventListener('resize', marqueeRun);
			return () => {
				window.removeEventListener('resize', marqueeRun);
			};
		},
		[ speed ]
	);

	return { textElem, calcElem, dynamicX, animationDuration };
};

export { useAnimationDuration, useAnimationPlayState };
