import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router";
import { routers } from "./routes";

import logo from "../assets/react.svg";
import { Suspense } from "react";

export const Navigation = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {routers.map((route) => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({ isActive }) => (isActive ? "nav-active" : "")}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Routes>
                        {routers.map((route) => (
                            <Route key={route.to} path={route.path} element={<route.Component />} />
                        ))}

                        <Route path="/*" element={<Navigate to={routers[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
