import {Route, Switch} from 'react-router-dom';
import React from "react";
import Index from "../components/index"
import NameCard from "../components/NameCard";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import NotFound from "../components/NotFound";


export default function RouterConfig(){
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Index}/>
				<Route path="/name-card" component={NameCard}/>
				<Route path="/page-one" component={PageOne}/>
				<Route path="/page-Two" component={PageTwo}/>
				<Route exact component={NotFound}/>
			</Switch>
		</div>
	)
}


