import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import history from '../../history';
import style from '../../theme';

const Wrapper = styled.div`
	padding: 5rem 3rem;
	background-color: ${style.darkColor};
	color: ${style.textColor};
	border-radius: 1rem;
	font-family: ${style.sansFont};
	line-height: 1.7rem;
	.impress {
		font-size: 2rem;
	}
	.link {
		display: inline-block;
		margin-left: 2rem;
		text-decoration: underline;
	}
	.info {
		margin-left: 1rem;
		display: inline-block;
		opacity: 0.75;
	}
`;

const About = () => {
	const handleBack = useCallback(() => {
		history.back();
	}, []);
	return (
		<Modal onDismiss={handleBack}>
			<Wrapper>
				<div className='impress'>
					Thanks for Using LONG PLAY！<span role='img' aria-label='cheers'>
						🎉🎉🎉
					</span>
				</div>
				<br />
				Long Play使用网易云三方API，<br />
				在此感谢 <u>@Binaryify的NeteaseCloudMusicApi </u> <br />
				Long Play认为听歌应该像看书一样，读书读整册，听歌听整张，<br />
				所以只提供以专辑为playlist的听歌体验 <br />
				此外在ZEN MODE<span role='img' aria-label='zen mode'>
					📀
				</span>下,可以顺序播放您Box中所存的所有专辑<br />
				<br />
				<Button onPropsClick={handleBack}> Start Now</Button>
				<div className='link'>
					<a href='https://github.com/ghostiin/LongPlay' target='_blank' rel='noreferrer'>
						Github Src
					</a>
				</div>
				<div className='info'>@verison: v1</div>
			</Wrapper>
		</Modal>
	);
};

export default About;
