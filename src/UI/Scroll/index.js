import React, { forwardRef, useEffect, useState, useRef, useImperativeHandle } from 'react';
// import { useImmer } from 'use-immer';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import ScrollInnerWrapper from './style';

const Scroll = forwardRef((props, ref) => {
	// 存放better-scroll的Bscroll实例
	const [ bScroll, setBscroll ] = useState();
	// 指向Wrapper的dom
	const wrapperRef = useRef();
	const { direction, mouseWheel, click, refresh } = props; // value
	const { onScroll, pullUp, scrollDown } = props; // func
	// 创建better-scroll并挂在在dom上
	useEffect(() => {
		const scroll = new BScroll(wrapperRef.current, {
			scrollX: direction === 'horizontal', // 如果direction = h 设为true
			scrollY: direction === 'vertical', // 如果direction =v 设为true
			probeType: 3, // 实时派发scroll事件
			click, // 开启点击
			mouseWheel // 开启鼠标滑轮
		});
		setBscroll(scroll);
		return () => {
			// 退出时删除实例
			setBscroll(null);
		};
	}, []);

	// 每次重新渲染都刷新Bscroll实例
	// refresh()
	// 重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
	useEffect(() => {
		if (refresh && bScroll) {
			bScroll.refresh();
		}
	});

	// 绑定scroll事件 当回调函数onScroll或bScroll实例发生变化时调用
	// scroll event
	// 参数：{Object} {x, y} 滚动的实时坐标
	// 触发时机：滚动过程中
	// on(type, fn, context) 监听当前实例上的钩子函数,如scroll
	// off(type, fn) 移除自定义事件监听器。只会移除这个回调的监听器。
	useEffect(
		() => {
			if (!bScroll || !onScroll) return undefined;
			bScroll.on('scroll', (scroll) => onScroll(scroll));
			return () => {
				bScroll.off('scroll');
			};
		},
		[ onScroll, bScroll ]
	);

	// 下滑判定/上拉判定,到底继续下滑则继续加载
	// 比较时注意 向下坐标系中y值为负
	useEffect(
		() => {
			if (!bScroll || !scrollDown) return undefined;
			// 是否到底
			bScroll.on('scrollEnd', () => {
				if (bScroll.y <= bScroll.maxScrollY + 100) {
					scrollDown(); // 继续下滑逻辑
					pullUp(); // 上拉逻辑
				}
			});
			return () => {
				bScroll.off('scrollEnd');
			};
		},
		[ scrollDown, pullUp, bScroll ]
	);

	// 可供父组件手动调用的方法
	useImperativeHandle(ref, () => ({
		// 父组件可手动调用refresh
		refresh(x = 0, y = 0) {
			if (bScroll) {
				bScroll.refresh();
				bScroll.scrollTo(x, y);
			}
		},
		// 父组件获取bscroll实例
		getBscroll() {
			if (bScroll) return bScroll;
			return null;
		}
	}));

	console.log('children', props.children);
	return <ScrollInnerWrapper ref={wrapperRef}>{props.children}</ScrollInnerWrapper>;
});

Scroll.propTypes = {
	direction: PropTypes.oneOf([ 'horizontal', 'vertical' ]), // 滚动方向 横向/纵向
	mouseWheel: PropTypes.bool, // 是否开启鼠标滑动支持 默认开启
	click: PropTypes.bool, // 支持点击 默认开启
	refresh: PropTypes.bool, // 是否刷新
	onScroll: PropTypes.func, // 滑动时触发的回调函数 用于scroll.on('scroll',onScroll)
	pullUp: PropTypes.func, // 下拉时调用的回调函数 可用于下拉加载
	scrollDown: PropTypes.func, // 下滑时调用的回调函数，用于下滑加载
	// pullLeft: PropTypes.func, // 左拉动时的回调函数，用于横向左拉加载，
	// pullRight: PropTypes.func, // 右拉动时的回调函数，用于横向右拉加载，
	// pullUpLoading: PropTypes.bool, // 是否显示下拉加载动画
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
};

Scroll.defaultProps = {
	direction: 'horizontal',
	mouseWheel: true,
	click: true,
	refresh: true,
	onScroll: null,
	pullUp: null,
	scrollDown: null
	// pullLeft: null,
	// pullRight: null,
	// pullUpLoading: true
};

export default Scroll;
