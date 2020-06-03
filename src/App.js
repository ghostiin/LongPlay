import React from 'react';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './theme/globalStyles';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalFonts } from './assets/fonts/fonts';
function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<IconStyle />
			<GlobalFonts />
			{renderRoutes(routes)}
		</BrowserRouter>
	);
}

export default App;
