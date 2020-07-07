import styled, { keyframes } from 'styled-components/macro';
import style from '../../theme';

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
// to-do props to control value/color/speed
const LoadContainer = styled.div`
	width: 100px;
	height: 30px;
	text-align: center;
	font-size: 10px;
`;

const box = styled.div`
	background-color: ${style.textColor};
	height: 100%;
	width: 6px;
	display: inline-block;
	margin-left: 5px;
	animation: ${stretchdelay} ${(props) => props.speed || 1.2}s infinite ease-in-out;
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

export { LoadContainer, BoxLoadingFirst, BoxLoadingTwo, BoxLoadingThree, BoxLoadingFour, BoxLoadingFive };
