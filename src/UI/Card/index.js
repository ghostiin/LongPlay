import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './style';

// 使用Card
/* <Card>
	<div className='front'>...</div>
	<div className='back'>...</div>
</Card>; */

const Card = (props) => {
	const { children } = props;
	return <CardWrapper>{children}</CardWrapper>;
};

Card.propTypes = {
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
};

export default Card;
