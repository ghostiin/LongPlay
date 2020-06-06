import React from 'react';
import styled, { keyframes } from 'styled-components';

const sizeContainer = {
	small: '24px',
	default: '30px',
	large: '36px'
};

const stretchdelay = keyframes`
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
`;

const LoadContainer = styled.div`
	width: 10rem;

	height: 3rem;
	text-align: center;
	font-size: 1rem;
`;

const box = styled.div`
	background-color: #fff;
	height: 100%;
	width: 6px;
	display: inline-block;
	margin-left: 5px;
	animation: ${stretchdelay} 1.2s infinite ease-in-out;
`;

const BoxLoadingFirst = styled(box)`
  animation-delay: -1.2s;
`;

const BoxLoadingTwo = styled(box)`
  animation-delay: -1.1s;
`;

const BoxLoadingThree = styled(box)`
  animation-delay: -1s;
`;

const BoxLoadingFour = styled(box)`
  animation-delay: -0.9s;
`;

const BoxLoadingFive = styled(box)`
  animation-delay: -0.8s;
`;

const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 5rem;
`;

const Loadingv1 = () => {
	return (
		<LoadingWrapper>
			<LoadContainer>
				<BoxLoadingFirst />
				<BoxLoadingTwo />
				<BoxLoadingThree />
				<BoxLoadingFour />
				<BoxLoadingFive />
			</LoadContainer>
		</LoadingWrapper>
	);
};

export default Loadingv1;
