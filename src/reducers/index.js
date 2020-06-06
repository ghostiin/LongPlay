import { combineReducers } from 'redux';
import { reducer as libraryReducer } from '../containers/libraryPage/store';
import { reducer as boxReducer } from '../components/Control/store';
export default combineReducers({
	library: libraryReducer,
	box: boxReducer
});
