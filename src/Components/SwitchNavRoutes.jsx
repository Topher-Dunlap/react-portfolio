import {React} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Articles from "./Articles";
import Contact from "./Contact";

export default function SwitchNavRoutes() {
    return(
        <Switch>
            <Route
                exact path="/"
                component={Home}
            />
            <Route
                path='/about'
                component={About}
            />
            <Route
                path='/projects'
                component={Projects}
            />
            <Route
                path='/articles'
                component={Articles}
            />
            <Route
                path='/contact'
                component={Contact}
            />
        </Switch>
    )
}