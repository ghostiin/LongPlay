import React from 'react';
import PropTypes from 'prop-types';
import {
	LoadContainer,
	BoxLoadingFirst,
	BoxLoadingTwo,
	BoxLoadingThree,
	BoxLoadingFour,
	BoxLoadingFive
} from './style';

const WaveLoading = ({ style, speed }) => {
	return (
		<LoadContainer style={style}>
			<BoxLoadingFirst speed={speed} />
			<BoxLoadingTwo speed={speed} />
			<BoxLoadingThree speed={speed} />
			<BoxLoadingFour speed={speed} />
			<BoxLoadingFive speed={speed} />
		</LoadContainer>
	);
};

WaveLoading.propTypes = {
	speed: PropTypes.number,
	style: PropTypes.shape({
		margin: PropTypes.string
	})
};

WaveLoading.defaultProps = {
	speed: 1.2,
	style: {
		margin: '0 auto'
	}
};

export default WaveLoading;
