import { BrowserRouter, Route, Switch} from 'react-router-dom';
//import { Router, Route, hashHistory } from 'react-router'
import React from "react";
import Index from "../components/index"
import NotFound from "../components/NotFound";


export default function RouterConfig(){
	return (
		<BrowserRouter>
			<div>
				<Switch>
				<Route exact path="/" component={Index}/>
				<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}


