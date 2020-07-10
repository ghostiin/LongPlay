import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, Item, ScrollWrapper } from './style';
import Scroll from '../../UI/Scroll';

// import default100 from './default100.svg';

const PlayboxBar = ({ boxAlbumsId, boxAlbumsList, switchAlbum, currentAlbumId }) => {
	const renderList = () => {
		return boxAlbumsId.map((e) => {
			const { album } = boxAlbumsList[e];
			return (
				<Item
					onClick={() => switchAlbum(album.id)}
					key={album.id}
					style={currentAlbumId === album.id ? { opacity: 1 } : {}}
				>
					<div>
						<img src={`${album.picUrl}?param=310x310`} alt={album.name} />
					</div>
				</Item>
			);
		});
	};
	return (
		<Wrapper>
			{boxAlbumsId.length ? (
				<ScrollWrapper>
					<Scroll direction='horizontal'>
						<Content>{renderList()}</Content>
					</Scroll>
				</ScrollWrapper>
			) : (
				'GO AND FIND SOME GOOD MUSIC FOR YOUSELF'
			)}
		</Wrapper>
	);
};

PlayboxBar.propTypes = {
	boxAlbumsId: PropTypes.arrayOf(PropTypes.number).isRequired,
	boxAlbumsList: PropTypes.objectOf(
		PropTypes.shape({
			album: PropTypes.shape({
				id: PropTypes.id,
				name: PropTypes.string,
				picUrl: PropTypes.string
			})
		})
	).isRequired,
	switchAlbum: PropTypes.func,
	currentAlbumId: PropTypes.number.isRequired
};

PlayboxBar.defaultProps = {
	switchAlbum: () => {}
};

export default React.memo(PlayboxBar);
