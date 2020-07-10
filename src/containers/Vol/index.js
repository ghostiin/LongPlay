import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import VolCard from '../../components/VolCard';
import Scroll from '../../UI/Scroll';
import { actions as playActionTypes } from '../Player/store';
import { actions as boxActionTypes } from '../../components/Playbox/store';
import { Wrapper, Content, Item } from './style';
import { volData } from '../../api/mockData';

// eslint-disable-next-line no-shadow
function Vol({ volData }) {
	const dispatch = useDispatch();
	const { boxAlbumsList } = useSelector((state) => state.box);
	const renderList = () => {
		return volData.map((vol) => {
			const { name: cardName, artist, volDescription: description, picUrl: imgUrl } = vol;
			const { name: singerName } = artist;
			return (
				<Item key={vol.id}>
					<VolCard
						playNow={() => {
							dispatch(playActionTypes.playNow(vol.id));
						}}
						collect={() => {
							dispatch(boxActionTypes.addAlbumToBox(vol.id));
						}}
						collected={!!boxAlbumsList[vol.id.toString()]}
						cardName={cardName}
						singerName={singerName}
						description={description}
						imgUrl={imgUrl}
					/>
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
