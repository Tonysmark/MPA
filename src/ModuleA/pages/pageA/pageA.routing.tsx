
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ModuleRoute } from '../../../Interfaces/IGlobal';
import SubPageA from './SubPageA';
import SubPageB from './SubPageB';

const Routes: ModuleRoute[] = [
    {
        path: '/subPageA',
        component: SubPageA,
    },
    {
        path: '/SubPageB',
        component: SubPageB,
    },
];

export const RoutingModule = () => {
    return (
        <BrowserRouter basename='ModuleA'>
            {Routes.map(({ path }) => (
                <>
                    <Link key={path} to={path}>
                        {path}
                    </Link>
                    <br />
                </>
            ))}
            <Switch>
                <Route path='/' exact component={Routes[0].component} />
                {Routes.map(({ path, component }) => (
                    <Route key={path} path={path} component={component} />
                ))}
            </Switch>
        </BrowserRouter>
    );
};
