import loadable from '@loadable/component';
import { ModuleRoute } from '../Interfaces/IGlobal';

// NOTE 坐等 React router V6


export const Routes: ModuleRoute[] = [
    {
        path: 'pageA',
        // 大的 Page 或者说一个Module,可以用 loadable 做代码分割， 这部分路由下的代码按需加载
        loadChildren: loadable(() => import('./Pages/pageA')),
    },
    {
        path: 'pageB',
        loadChildren: loadable(() => import('./Pages/pageB')),
    },
];
