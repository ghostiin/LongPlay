import React from 'react';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';
import { GlobalStyle } from './theme/globalStyles';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalFonts } from './assets/fonts/fonts';
import history from './history';
function App() {
	return (
		<Router history={history}>
			<GlobalStyle />
			<IconStyle />
			<GlobalFonts />
			{renderRoutes(routes)}
		</Router>
	);
}

export default App;
