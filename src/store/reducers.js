import { combineReducers } from 'redux';
import { reducer as albumsReducer } from '../containers/Albums/store';

export default combineReducers({
	albums: albumsReducer
});
