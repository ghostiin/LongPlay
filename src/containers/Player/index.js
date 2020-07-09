import React, { useRef } from 'react';
import Marquee from '../../UI/Marquee';
import Playbox from '../../components/Playbox';
import Playlist from '../../components/Playlist';
import { PlayerWrapper, PlayerBar, PlayControl, ProgressBar } from './style';
import default80 from './default80.svg';

const Player = () => {
	const playerRef = useRef(null);
	return (
		<React.Fragment>
			<PlayerWrapper>
				<PlayerBar ref={playerRef}>
					<PlayControl>
						<div className='info'>
							<img src={default80} alt='cover' />
							<Marquee>NameNameNameNameName</Marquee>
							<Marquee>Singer</Marquee>
						</div>
						<div className='control'>
							<div>
								<i className='iconfont shuffle'>&#xe619;</i>
								<i className='iconfont prev'>&#xed09;</i>
								<i className='iconfont pause center'>&#xe755;</i>
								<i className='iconfont next'>&#xe6d2;</i>
								<i className='iconfont repeat'>&#xe714;</i>
							</div>
							{/* <div className='cover'>
							<img src={default200} alt='cover' />
						</div> */}

							<ProgressBar />
						</div>
						<div className='func'>
							<Playlist relativeRef={playerRef} />
							<Playbox relativeRef={playerRef} />
						</div>
					</PlayControl>
				</PlayerBar>
			</PlayerWrapper>
		</React.Fragment>
	);
};

export default Player;
