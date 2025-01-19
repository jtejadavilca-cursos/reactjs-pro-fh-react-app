import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazload/pages/NoLazy";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";
import {
    DynamicForm,
    FormikAbstract,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPageFormik,
    RegisterPageTraditional,
} from "../03-forms/pages";

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
        to: "/",
        path: "/",
        Component: FormikAbstract,
        name: "Forms - Formik Abstract",
    },
    {
        to: "/formik-components",
        path: "/formik-components",
        Component: FormikComponents,
        name: "Forms - Formik Components",
    },
    {
        to: "/formik-yup",
        path: "/formik-yup",
        Component: FormikYupPage,
        name: "Forms - Formik Yup",
    },
    {
        to: "/formik-basic",
        path: "/formik-basic",
        Component: FormikBasicPage,
        name: "Forms - Formik Basic",
    },
    {
        to: "/register-formik",
        path: "/register-formik",
        Component: RegisterPageFormik,
        name: "Forms - Register Formik",
    },
    {
        to: "/register-traditional",
        path: "/register-traditional",
        Component: RegisterPageTraditional,
        name: "Forms - Register Traditional",
    },
    {
        to: "/dynamic-form",
        path: "/dynamic-form",
        Component: DynamicForm,
        name: "Forms - Dynamic Form",
    },
    {
        to: "/shopping-page",
        path: "/shopping-page",
        Component: ShoppingPage,
        name: "Shopping Page",
    },
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
