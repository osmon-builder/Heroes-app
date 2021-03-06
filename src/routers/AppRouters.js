import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoute } from "./DashboardRoute";


export const AppRouters = () => {
    return (
        <Router>
            <div>                
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route  path="/" component={DashboardRoute} />
                </Switch>
            </div>
        </Router>
    );
}

