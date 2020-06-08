import React, { useRef, useState, useEffect } from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';

const VScrollWrapper = styled.div`
	margin-top: 2rem;
	height: ${({ height }) => height || '50rem'};
	overflow: hidden;
`;

const ItemWrapper = styled.div`
	margin: 2rem 0;
	cursor: pointer;
	opacity: 0.5;
	transition: all .3s;
	&:hover {
		opacity: 1;
		font-size: 2rem;
		margin: 2.5rem 0;
		margin-left: 0.5rem;
	}
`;

const CheckItemWrapper = styled.div`
	margin: 4rem 0;
	margin-left: 1rem;
	font-size: 3rem;
	cursor: default;
`;

const VScroll = ({ list, currentIndex, onItemClick }) => {
	const [ vScroll, setVScroll ] = useState(null);

	const scrollRef = useRef();
	useEffect(() => {
		const scroll = new BScroll(scrollRef.current, {
			scrollY: true,
			probeType: 3,
			click: true,
			mouseWheel: true
		});
		setVScroll(scroll);

		return () => {
			setVScroll(null);
		};
	}, []);

	useEffect(() => {
		if (vScroll) {
			vScroll.refresh();
		}
	});

	const renderList = () => {
		return list.map((song, id) => {
			if (id === currentIndex) {
				return <CheckItemWrapper key={id}>{song.name}</CheckItemWrapper>;
			} else {
				return (
					<ItemWrapper key={id} onClick={() => onItemClick(id)}>
						{song.name}
					</ItemWrapper>
				);
			}
		});
	};
	return (
		<VScrollWrapper ref={scrollRef}>
			<div>{renderList()}</div>
		</VScrollWrapper>
	);
};

export default VScroll;
