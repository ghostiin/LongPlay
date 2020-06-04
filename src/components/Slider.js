import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css/swiper.css';
import Swiper from 'swiper';
import slider1 from '../assets/imgs/slider1.png';
import slider2 from '../assets/imgs/slider2.png';
import slider3 from '../assets/imgs/slider3.png';
import slider4 from '../assets/imgs/slider4.png';

const banners = [ slider1, slider2, slider3, slider4 ];

export const SliderContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	margin: auto;
	.slider-container {
		position: relative;
		width: 100rem;
		height: 30rem;
		overflow: hidden;

		.slider-img {
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.swiper-pagination-bullet-active {
		background: #fff;
	}
`;

const Slider = () => {
	const [ sliderSwiper, setSliderSwiper ] = useState(null);

	useEffect(
		() => {
			if (banners.length && !sliderSwiper) {
				const newSwiper = new Swiper('.slider-container', {
					loop: true,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false
					},
					pagination: { el: '.swiper-pagination' }
				});
				setSliderSwiper(newSwiper);
			}
		},
		[ banners.length, sliderSwiper ]
	);

	return (
		<SliderContainer>
			<div className="slider-container">
				<div className="swiper-wrapper">
					{banners.map((slider) => {
						return (
							<div className="swiper-slide" key={slider}>
								<div className="slider-img">
									<img src={slider} width="100%" height="100%" alt="推荐" />
								</div>
							</div>
						);
					})}
				</div>
				<div className="swiper-pagination" />
			</div>
		</SliderContainer>
	);
};

export default Slider;
