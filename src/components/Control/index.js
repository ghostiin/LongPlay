import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { addAlbumToBox, removeAlbumFromBox } from './store/action';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 1rem 0;
	transform: translateX(-1rem);
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 3rem;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`;

const Button = styled.div`
	display: inline-block;
	cursor: pointer;
	transition: all 0.2s;
	&:hover {
		transform: scale(1.1, 1.1);
	}
	&:active {
		transform: scale(1, 1);
	}
`;

const Control = ({ resource, boxList, addAlbumToBox, removeAlbumFromBox }) => {
	return (
		<Wrapper>
			<Button className="iconfont">&#xe9f9;</Button>
			{!_.find(boxList, (e) => e.album.id === resource.id) ? (
				<Button
					className="iconfont"
					onClick={() => {
						addAlbumToBox(resource.id);
					}}
				>
					&#xe69f;
				</Button>
			) : (
				<Button
					className="iconfont"
					onClick={() => {
						removeAlbumFromBox(resource.id);
					}}
				>
					&#xe69e;
				</Button>
			)}

			<Button className="iconfont">&#xe6a1;</Button>
		</Wrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		boxList: state.box
	};
};

export default connect(mapStateToProps, { addAlbumToBox, removeAlbumFromBox })(Control);
