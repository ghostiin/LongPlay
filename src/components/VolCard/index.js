import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Card from '../../UI/Card';
import Scroll from '../../UI/Scroll';
import Button from '../../UI/Button';
import style from '../../theme';
import Marquee from '../../UI/Marquee';
import defaultImg from './defaultCover.svg';
import { CoverImg, CardInfo, CardDescription, CardAction, Nameplate } from './style';

const VolCard = (props) => {
	const { imgUrl, cardCatgory, cardName, singerName, description } = props;
	const { playNow, collect, collected } = props;
	return (
		<Card>
			<div className='side side--front'>
				<CoverImg>
					<LazyLoad placeholder={<img src={defaultImg} alt='cover' />}>
						<img src={`${imgUrl}?param=360x360`} alt='cover' />
					</LazyLoad>
				</CoverImg>
				<CardInfo>
					<div className='category'>{cardCatgory}</div>

					<Marquee className='name' style={{ fontSize: '1.8rem', fontWeight: '600' }}>
						{cardName}
					</Marquee>

					<div className='singer'>
						<span>By</span>
						{singerName}
					</div>
				</CardInfo>
			</div>
			<div className='side side--back'>
				<CardInfo small>
					<LazyLoad placeholder={<img src={defaultImg} alt='cover' />}>
						<img src={`${imgUrl}?param=360x360`} alt='cover' />
					</LazyLoad>
					<div className='right'>
						<div className='category'>{cardCatgory}</div>
						<Marquee className='name' style={{ fontSize: '1.2rem', fontWeight: '600', width: '12rem' }}>
							{cardName}
						</Marquee>
						<div className='singer'>
							<span>By</span>
							{singerName}
						</div>
					</div>
				</CardInfo>
				<CardDescription>
					<Scroll>
						<div className='content'>
							<div className='text'>{description}</div>
						</div>
					</Scroll>
				</CardDescription>
				<CardAction>
					<Button onPropsClick={playNow} aria-hidden>
						<i className='iconfont'>&#xe9f9;</i>
						Play Now
					</Button>
					{collected ? (
						<Button outlined outlinedColor={style.mainColor}>
							<i className='iconfont'>&#xe618;</i>
							In Box!
						</Button>
					) : (
						<Button onPropsClick={collect} outlined outlinedColor={style.mainColor}>
							<i className='iconfont'>&#xe69f;</i>
							Collect
						</Button>
					)}
				</CardAction>
				<Nameplate>{singerName}</Nameplate>
			</div>
		</Card>
	);
};

VolCard.propTypes = {
	imgUrl: PropTypes.string,
	cardCatgory: PropTypes.string,
	cardName: PropTypes.string,
	singerName: PropTypes.string,
	description: PropTypes.string,
	playNow: PropTypes.func,
	collect: PropTypes.func,
	collected: PropTypes.bool
};

VolCard.defaultProps = {
	imgUrl: defaultImg,
	cardCatgory: 'ALBUM',
	cardName: 'ALBUM NAME',
	singerName: 'SINGER',
	description: 'Good Music To Bad Days',
	playNow: null,
	collect: null,
	collected: false
};

export default React.memo(VolCard);
