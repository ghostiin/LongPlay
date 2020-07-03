// marquee 动画，一开始先delay一下
const dynamicMarqueeAnimation = (DYNAMIC_VALUE = `0px`) => {
	return `
    @-webkit-keyframes dynamicMarqueeAnimation${DYNAMIC_VALUE}{
		0%,
		10% {
			transform: translateX(0px);
		}
		100% {
			-webkit-transform: translateX(${DYNAMIC_VALUE});
			transform: translateX(${DYNAMIC_VALUE});
		}
	};
	@-moz-keyframes dynamicMarqueeAnimation${DYNAMIC_VALUE} {
		0%,
		10% {
			transform: translateX(0px);
		}
		100% {
			-webkit-transform: translateX(${DYNAMIC_VALUE});
			transform: translateX(${DYNAMIC_VALUE});
		}
	};
	@keyframes dynamicMarqueeAnimation${DYNAMIC_VALUE} {
		0%,
		10% {
			transform: translateX(0px);
		}

		100% {
			-webkit-transform: translateX(${DYNAMIC_VALUE});
			transform: translateX(${DYNAMIC_VALUE});
		}
	};
    `;
};

export default dynamicMarqueeAnimation;
