import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import("../01-lazload/layout/LazyLayout"));
//const Lazy1 = lazy(() => import("../01-lazload/pages/LazyPage1"));
// const Lazy2 = lazy(() => import("../01-lazload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import("../01-lazload/pages/LazyPage3"));

export const routers: Route[] = [
    {
        path: "/lazyload/*",
        to: "/lazyload/",
        Component: LazyLayout,
        name: "Lazy Layout - Dash",
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No Lazy Page",
    },
];
