import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router} from "react-router";

import Signup from "./../imports/ui/Signup";
import Link from "./../imports/ui/Link";
import NotFound from "./../imports/ui/NotFound";
import Login from "./../imports/ui/Login";
window.browserHistory = browserHistory;
const routes = (
    <Router history={browserHistory}>
        <route path="/" component={Login}/>
        <route path="/signup" component={Signup}/>
        <route path="/links" component={Link}/>
        <route path="*" component={NotFound}/>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('#app'));
});