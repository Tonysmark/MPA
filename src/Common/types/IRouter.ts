export interface LazyRouter {
    path: string;
    loadChildren: Promise<{ default: React.ComponentType }>;
    name?: string;
}
