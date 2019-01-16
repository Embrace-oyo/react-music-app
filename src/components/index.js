import React from 'react';

export default class Index extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			curryIndex: 0,
			tabList: [
				{index: 0, title: '推荐'},
				{index: 1, title: '歌手'},
				{index: 2, title: '排行'},
				{index: 3, title: '搜索'},
			]
		}
	}
	render(){
		return (
			<div className="index">
				<div className="head-box">
					<div className="m-header">
						<div className="icon"></div>
						<h1>Embrace Music</h1>
					</div>
					<div className="tab-box">
						{this.tabList.map((li) =>
							<div className={`item ${li.index===this.state.curryIndex?"active":null}`} key={li.index}>
								<span class="tab-link">{li.title}</span>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
