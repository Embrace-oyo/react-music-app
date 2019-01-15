import React from 'react';
import RouterConfig from './router/routerConfig'
import {BrowserRouter} from "react-router-dom";
class App extends React.Component{
	render() {
		return (
			<div>
				<div className="headerTab">top</div>
				<div className="content">
					<BrowserRouter>
						<RouterConfig />
					</BrowserRouter>
				</div>
				<div className="bottomTab">bottom</div>
			</div>
		);
	}
}

export default App



