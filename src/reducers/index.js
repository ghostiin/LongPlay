import { combineReducers } from 'redux';
import { reducer as libraryReducer } from '../containers/libraryPage/store';
import { reducer as boxReducer } from '../components/Control/store';
import { reducer as searchReducer } from '../containers/searchPage/store';
import { reducer as playerReducer } from '../containers/playPage/store';
export default combineReducers({
	library: libraryReducer,
	box: boxReducer,
	search: searchReducer,
	player: playerReducer
});
