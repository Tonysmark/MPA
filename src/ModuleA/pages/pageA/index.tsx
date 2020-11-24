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
                <h1 className={Style.title}>PageAAA</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur sequi quas voluptatem. Laudantium officia a dicta! Esse, debitis expedita, assumenda soluta reprehenderit autem repellat, qui necessitatibus
                    mollitia harum placeat.
                </span>

                <RoutingModule />
                {/* 相当于 router-outlet */}
            </div>
        );
    }
}
