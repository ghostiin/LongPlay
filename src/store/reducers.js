import { combineReducers } from 'redux';
import { reducer as albumsReducer } from '../containers/Albums/store';
import { reducer as boxReducer } from '../components/Playbox/store';

export default combineReducers({
	albums: albumsReducer,
	box: boxReducer
});
