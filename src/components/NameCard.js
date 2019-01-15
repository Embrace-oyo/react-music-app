import React from 'react';

export default class NameCard extends React.Component{
	render() {
		let data = {
			name: '盛世嫡妃',
			number: '20',
			isHuman: '外星人',
			tags: ['坏人', '逗比', '吃货']
		};
		const listItems = data.tags.map((x) =>
			<li key={x}>
				{x}
			</li>
		);
		return (
			<div>
					<h4>{data.name}</h4>
					<h4>{data.number}</h4>
					<h4>{data.isHuman}</h4>
					 <ul>
						 {listItems}
					 </ul>
			</div>
		);
	}
};



