import loadable, { LoadableComponent } from '@loadable/component';
import {  ComponentType } from 'react';
interface ModuleRoute{
    path: string;
    component?: ComponentType;
    loadChildren?: LoadableComponent<ComponentType>;
}
export const Routes:ModuleRoute[] = [
    {
        path: '/pageA',
        // 大的 Page 或者说一个Module,可以用 loadable 做代码分割， 这部分路由下的代码按需加载
        component: loadable(() => import('./Pages/pageA')),
    },
    {
        path: '/pageB',
        component: loadable(() => import('./Pages/pageB')),
    },
];
