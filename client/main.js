import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router} from "react-router";
import { Tracker } from 'meteor/tracker';

import Signup from "./../imports/ui/Signup";
import Link from "./../imports/ui/Link";
import NotFound from "./../imports/ui/NotFound";
import Login from "./../imports/ui/Login";

const unauthenticatedPages=['/','/signup'];
const authenticatedPages=['/links'];

const onEnterPublicPage=()=>{
    if(Meteor.userId()){
    browserHistory.replace('/links');
    }
};
const onEnterPrivatePage=()=>{
    if(!Meteor.userId()){
    browserHistory.replace('/');
    }
};
const routes = (
    <Router history={browserHistory}>
        <route path="/" component={Login} onEnter={onEnterPublicPage}/>
        <route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
        <route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
        <route path="*" component={NotFound}/>
    </Router>
);
Tracker.autorun(()=>{
    const isAuthenticated = !!Meteor.userId();
    const pathname=browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage= unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage =authenticatedPages.includes(pathname);

    if( isUnauthenticatedPage && isAuthenticated ){
        browserHistory.replace('/links');
    }else if(isAuthenticatedPage && !isAuthenticated ){
        browserHistory.replace('/');
    }

});

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('#app'));
});
