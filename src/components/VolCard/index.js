import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../UI/Card';
import Scroll from '../../UI/Scroll';
import Button from '../../UI/Button';
import style from '../../theme';
import defaultImg from './defaultCover.svg';
import { CoverImg, CardInfo, CardDescription, CardAction, Nameplate } from './style';

const VolCard = (props) => {
	const { imgUrl, cardCatgory, cardName, singerName, description } = props;
	return (
		<Card>
			<div className='side side--front'>
				<CoverImg>
					<img src={imgUrl} alt='cover' />
				</CoverImg>
				<CardInfo>
					<div className='category'>{cardCatgory}</div>
					<div className='name'>{cardName}</div>
					<div className='singer'>
						<span>By</span>
						{singerName}
					</div>
				</CardInfo>
			</div>
			<div className='side side--back'>
				<CardInfo small>
					<img src={imgUrl} alt='cover' />
					<div className='right'>
						<div className='category'>{cardCatgory}</div>
						<div className='name'>{cardName}</div>
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
					<Button>
						<i className='iconfont'>&#xe9f9;</i>
						Play Now
					</Button>
					<Button outlined outlinedColor={style.mainColor}>
						<i className='iconfont'>&#xe69f;</i>
						Collect
					</Button>
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
	description: PropTypes.string
};

VolCard.defaultProps = {
	imgUrl: defaultImg,
	cardCatgory: 'ALBUM',
	cardName: 'ALBUM NAME',
	singerName: 'SINGER',
	description: 'Good Music To Bad Days'
};

export default React.memo(VolCard);
