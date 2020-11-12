import React, { Component } from 'react';
import { LazyRouter } from '../Common/types/IRouter';
import { Route, Router, useHistory } from 'react-router-dom';
import loadable from  '@loadable/component'
// TODO  怎么把这里路由的写法 看上去神似 Angular
interface Props {}
interface State {}
// 路由类型待修复
const Routes: any[] = [
    {
        path: 'auto',
        loadChildren: () => import('./pages/Home').then(m => m.HomePage),
        name: '主页',
    },
];

class Root extends Component<Props, State> {
    state = {};

    render() {
        return (
            <Router history={useHistory()}>

                {Routes.map(r => (
                    <Route key={r.path} path={r.path} component={loadable(r.loadChildren)}></Route>
                ))}
            </Router>
        );
    }
}
