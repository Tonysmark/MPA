import React, { Component } from 'react';
import { Checkbox } from 'antd-mobile';

interface Props {}
interface State {}

export default class index extends Component<Props, State> {
    state = {};
    onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };
    render() {
        return (
            <div>
                <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
            </div>
        );
    }
}
