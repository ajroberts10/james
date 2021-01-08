import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Films from "./pages/Films";
import Art from "./pages/Art";
import Navbar from "./components/Navbar";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Router>
            <Switch>
                <Route path="/art">
                    <Art />
                </Route>
                <Route path="/games">
                    <Games />
                </Route>
                <Route path="/films">
                    <Films />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
