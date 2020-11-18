import React, { Component } from 'react';
import { RoutingModule } from './pageA.routing';

import Style from './style.module.scss';
interface Props {}
interface State {}

export default class index extends Component<Props, State> {
    state = {};

    render() {
        return (
            <div>
                <h1 className={Style.title}>Page A</h1>
                <RoutingModule></RoutingModule>
            </div>
        );
    }
}
