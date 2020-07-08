import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
	position: fixed;
	right: 2rem;
	bottom: 2rem;
	cursor: pointer;
`;

const BackTop = () => {
	return (
		<Wrapper onClick={() => window.scrollTo(0, 0)}>
			<i className='iconfont'>&#xe6a2;</i>back
		</Wrapper>
	);
};

export default BackTop;
