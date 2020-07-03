import React from 'react';
import PropTypes, { object } from 'prop-types';
import VolCard from '../../components/VolCard';
import Scroll from '../../UI/Scroll';
import { Wrapper, Content, Item } from './style';
import { volData2 as volData } from '../../api/mockData';

function Vol({ volData }) {
	const renderList = () => {
		return volData.map((vol) => {
			const { name: cardName, artist, volDescription: description, picUrl: imgUrl } = vol;
			const { name: singerName } = artist;
			return (
				<Item key={vol.id}>
					<VolCard cardName={cardName} singerName={singerName} description={description} imgUrl={imgUrl} />
				</Item>
			);
		});
	};

	return (
		<Wrapper>
			<Scroll direction='horizontal'>
				<Content>{renderList()}</Content>
			</Scroll>
		</Wrapper>
	);
}

Vol.propTypes = {
	volData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			picUrl: PropTypes.string,
			artist: PropTypes.shape({
				name: PropTypes.string
			}),
			volDescription: PropTypes.string
		})
	)
};

Vol.defaultProps = {
	volData
};
export default React.memo(Vol);
