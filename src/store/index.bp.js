import { createStore, compose, applyMiddleware } from 'redux'; // 使用redux-dev tool
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'box' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
	const persistor = persistStore(store);
	return { store, persistor };
};

// const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
// const persistor = persistStore(store);
// export { store, persistor };
