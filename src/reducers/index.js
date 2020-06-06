import { combineReducers } from 'redux';
import { reducer as libraryReducer } from '../containers/libraryPage/store';
export default combineReducers({
	library: libraryReducer
});
