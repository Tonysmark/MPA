import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ModuleRoute } from '../../../Interfaces/IGlobal';
import SubPageA from './SubPageA';
import SubPageB from './SubPageB';
// BASE name 就不够灵活了，每次都得手动填充
const Routes: ModuleRoute[] = [
    {
        path: 'subPageA',
        component: SubPageA,
    },
    {
        path: 'subPageB',
        component: SubPageB,
    },
];

export const RoutingModule = () => {
    return (
        <BrowserRouter basename='ModuleA/pageA'>
            {Routes.map(({ path }) => (
                <Link key={path} to={path} className='mr-3'>
                    {path}
                </Link>
            ))}
            <Switch>
                <Route path='/' exact component={Routes[0].component} />
                {Routes.map(({ path, component }) => (
                    <Route key={path} path={`/${path}`} component={component} />
                ))}
            </Switch>
        </BrowserRouter>
    );
};
