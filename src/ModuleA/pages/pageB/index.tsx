import React, { Component } from 'react';
import './style.scss';
interface Props {}
interface State {}

export default class index extends Component<Props, State> {
    state = {};

    render() {
        return (
            <div>
                <h1 className={'title'}>PageB</h1>
                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, similique!</p>
            </div>
        );
    }
}
