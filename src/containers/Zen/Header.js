import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Media from '../../components/MediaQueries';
import { Header as HeaderWrapper, Logo } from './style';

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
			<Link to='/' className='right'>
				<div className='close-btn'>
					<div className='iconfont'>&#xe69e;</div>
				</div>
			</Link>
		</HeaderWrapper>
	);
};

export default React.memo(Header);
