import React from 'react';
import { Link } from 'react-router-dom';
import { Header as HeaderWrapper, Logo } from './style';
import Button from '../../UI/Button';
import Media from '../../components/MediaQueries';
import logo from './logo.svg';

const Header = () => {
	return (
		<HeaderWrapper>
			<div className='left'>
				<img src={logo} alt='Long Play Logo' />
			</div>
			<Media.Desktop>
				<Logo className='center'>
					LONG PLAY
					<span>good music to bad days</span>
				</Logo>
			</Media.Desktop>
			<Media.Tablet>
				<Logo className='center' tablet>
					LONG PLAY
				</Logo>
			</Media.Tablet>
			<div className='right'>
				<Link to='/zen'>
					<Button outlined>
						<i className='iconfont'>&#xe637;</i>
						ZEN MODE
					</Button>
				</Link>
				<Link to='/about'>
					<div className='about home-btn'>
						<i className='iconfont'>&#xe6de;</i>
					</div>
				</Link>
			</div>
		</HeaderWrapper>
	);
};

export default React.memo(Header);
