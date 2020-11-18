import { LoadableComponent } from '@loadable/component';
import { ComponentType } from 'react';
export interface ModuleRoute {
    path: string;
    component?: ComponentType; // 组件，立即加载
    loadChildren?: LoadableComponent<ComponentType>; // 懒加载 webpack-chunk
    children?: ModuleRoute[];
}
