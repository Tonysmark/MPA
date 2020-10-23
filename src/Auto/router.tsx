import React, { Component } from 'react';

interface Props {}
interface State {}

interface Router {
	path: string;
	loadChildren?: Promise<any>;
	name?: string;
}

class Root extends Component<Props, State> {
	state = {};

	render() {
		return <div></div>;
	}
}

const Routes: Router[] = [
	{
		path: 'auto',
		loadChildren: import('./pages/Home').then((m) => m.HomePage),
		name: '主页',
	},
];

