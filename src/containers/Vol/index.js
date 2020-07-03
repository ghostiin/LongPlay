import React from 'react';
import Card from '../../UI/Card';
import Wrapper from './style';

function Vol() {
	return (
		<Wrapper>
			<Card>
				<div className='front'>Front</div>
				<div className='back'>Back</div>
			</Card>
		</Wrapper>
	);
}

export default React.memo(Vol);
