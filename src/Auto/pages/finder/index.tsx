import React, { Component } from 'react';
import styles from './style.module.scss';
interface Props {}
interface State {}

export default class Finder extends Component<Props, State> {
	state = {};

	render() {
		return (
			<div className={styles.finderWrapper}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio tenetur esse dolorem id iure necessitatibus,
				voluptate mollitia omnis ratione voluptatum deserunt quaerat quasi dignissimos quidem at vero a non.
			</div>
		);
	}
}
