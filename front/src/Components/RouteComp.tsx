import React from 'react';
import {Navigate, Route, Routes,} from "react-router-dom";
import {publicRoutes} from "./RoutesConst";

const RouteComp = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, element})=>
                <Route
                       key={path}
                       path={path}
                       element={element}/>
            )}
        </Routes>
    );
};

export default RouteComp;