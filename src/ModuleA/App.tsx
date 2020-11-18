import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Routes } from './router';
import '../theme/index.scss';

// TODO 如果牵扯到 复杂路由嵌套怎么办？？？

const Root = () => {
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
                {Routes.map(({ path, loadChildren }) => (
                    <Route key={path} path={path} component={loadChildren} />
                ))}
            </Switch>
        </BrowserRouter>
    );
};



ReactDOM.render(
    <StrictMode>
        <Root />
    </StrictMode>,
    document.querySelector('#app'),
);
