import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import VScroll from '../../components/VScroll';
import BScroll from 'better-scroll';

const VScrollWrapper = styled.div`
	margin: 0 10rem;
	font-size: 1.6rem;
	font-family: ${({ theme }) => theme.fonts.text.regular};
	text-align: right;
`;

const Title = styled.div`
	margin-left: 10rem;
	font-size: 5rem;
	font-family: ${({ theme }) => theme.fonts.main.bold};
	line-height: 6rem;

	span {
		opacity: 0.5;
		font-size: 1.6rem;
	}
	.singer {
		font-size: 1.6rem;
	}
`;

const LyricWrapper = styled.div`
	text-align: right;

	font-size: 2rem;
	line-height: 4rem;
	.text {
		word-wrap: break-word;
		word-break: break-all;
		text-align: right;
		opacity: 0.5;
	}
	.current {
		opacity: 1;
	}
	.pure {
		text-align: center;
		font-size: 3rem;
	}
`;
const SongLyrics = ({ song, album, currentTime, currentLyric, currentPlayingLyric, currentLineNum }) => {
	const lyricLineRefs = useRef([]);

	const renderList = () => {
		return (
			<VScrollWrapper>
				<VScroll>
					<LyricWrapper>
						{currentLyric ? (
							currentLyric.lines.map((item, index) => {
								lyricLineRefs.current[index] = React.createRef();
								return (
									<div
										className={`text ${currentLineNum === index ? 'current' : ''}`}
										key={item + index}
										ref={lyricLineRefs.current[index]}
									>
										{item.txt}
									</div>
								);
							})
						) : (
							<div className="text pure">Just Enjoying</div>
						)}
					</LyricWrapper>
				</VScroll>
			</VScrollWrapper>
		);
	};
	return <React.Fragment>{renderList()}</React.Fragment>;
};

export default SongLyrics;
