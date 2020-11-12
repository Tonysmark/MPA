import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface Props {}
interface State {}

class App extends Component<Props, State> {
	state = {};

	render() {
		return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum illo vel quibusdam consequatur, placeat provident iste animi nesciunt. Voluptatem omnis et natus, consectetur hic est quidem sequi quod quam?</div>;
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
