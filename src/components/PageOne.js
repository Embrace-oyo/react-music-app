import React from 'react';
import { Link } from 'react-router-dom';
export default class PageOne extends React.Component{
	render() {
		return (
			<div>
				<Link to="/name-card" tag="button">jump</Link>
				page1
			</div>
		);
	}
}
