import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import store from './store';
import ResetStyle from './theme/globalStyle';
import IconStyle from './assets/icons/iconfont';
import LogoMuseFont from './assets/fonts/museomoderno';
import routes from './routes';
import Media from './components/MediaQueries';
import Misc from './theme/styleMisc';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<ResetStyle />
					<IconStyle />
					<LogoMuseFont />
					<Media.Mobile>
						<Misc.Inform>Please Use LP On PC Or Enlarge Your Browser</Misc.Inform>
					</Media.Mobile>
					<Media.Default>{renderRoutes(routes)}</Media.Default>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
