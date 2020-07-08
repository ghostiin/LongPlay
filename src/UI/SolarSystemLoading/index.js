import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../theme';
import { LoadContainer, Sun, FirstTrack, Earth, SecondTrack, Mars } from './style';

const SolarSystemLoading = ({ style, color, speed }) => {
	return (
		<LoadContainer style={style}>
			<Sun color={color} />
			<FirstTrack color={color} speed={speed}>
				<Earth color={color} />
			</FirstTrack>
			<SecondTrack color={color} speed={speed}>
				<Mars color={color} />
			</SecondTrack>
		</LoadContainer>
	);
};

SolarSystemLoading.propTypes = {
	speed: PropTypes.number,
	style: PropTypes.shape({
		margin: PropTypes.string
	}),
	color: PropTypes.string
};

SolarSystemLoading.defaultProps = {
	speed: 1.2,
	style: {
		margin: '0 auto'
	},
	color: styles.textColor
};
export default SolarSystemLoading;
