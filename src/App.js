import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createStore from './store/index.bp';
// import store from './store/index';
import history from './history';
import ResetStyle from './theme/globalStyle';
import IconStyle from './assets/icons/iconfont';
import routes from './routes';
import Media from './components/MediaQueries';
import Misc from './theme/styleMisc';
import LogoMuseFont from './assets/fonts/museomoderno';

const { store, persistor } = createStore();

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router history={history}>
					<div className='App'>
						<ResetStyle />
						<LogoMuseFont />
						<IconStyle />
						<Media.Mobile>
							<Misc.Inform>
								Please Use LP On PC Or Enlarge Your Browser<br />
								<br />mobile/touch IS ON THE WAY...{' '}
							</Misc.Inform>
						</Media.Mobile>
						<Media.Default>{renderRoutes(routes)}</Media.Default>
					</div>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
