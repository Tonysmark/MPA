import React, { Component } from 'react';

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
    state = {};
	componentDidMount() { 
		console.log("app")
	}
    render() {
        return (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium similique fugit odit reiciendis nesciunt velit eius quos quasi officiis veniam consequuntur, quod rerum explicabo tempora error non voluptatem repellendus
                magni!
            </div>
        );
    }
}
