import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Routes } from './router';
import '../theme/index.scss';
ReactDOM.render(
    <StrictMode>
        <BrowserRouter basename='ModuleA'>
            {Routes.map(({ path }) => (
                <>
                    <Link key={path} to={path}>{path}</Link>
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
    </StrictMode>,
    document.querySelector('#app'),
);
