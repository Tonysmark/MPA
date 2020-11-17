import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PageA from './pages/pageA';
import PageB from './pages/pageB';

/**
 * @todo 首先使用loadable创建代码分割
 * @todo 路由可不可以写成列表渲染方式
 */
interface Props {}

export default function Routes(props: Props) {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/about'>
                        <PageA />
                    </Route>
                    <Route path='/'>
                        <PageB />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
