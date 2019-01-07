import React from 'react';
import { NameCard } from './components/NameCard.js';
import {PageOne} from './components/PageOne.js';
import {PageTwo} from './components/PageTwo.js';
import {Route} from "react-router-dom";
class App extends React.Component{
	render() {
		return (
			<div>
				<Route path="/name-card" component={NameCard}/>
				<Route path="/page-one" component={PageOne}/>
				<Route path="/page-Two" component={PageTwo}/>
			</div>
		);
	}
}

export default App



