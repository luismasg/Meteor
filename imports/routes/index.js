import {Meteor} from "meteor/meteor";
import React from "react";
import {browserHistory, Router} from "react-router";


import Signup from "../ui/Signup";
import Link from "../ui/Link";
import NotFound from "../ui/NotFound";
import Login from "../ui/Login";

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
export const onAuthChange=(isAuthenticated)=>{
    const pathname=browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage= unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage =authenticatedPages.includes(pathname);

    if( isUnauthenticatedPage && isAuthenticated ){
        browserHistory.replace('/links');
    }else if(isAuthenticatedPage && !isAuthenticated ){
        browserHistory.replace('/');
    }
};
export const routes = (
    <Router history={browserHistory}>
        <route path="/" component={Login} onEnter={onEnterPublicPage}/>
        <route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
        <route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
        <route path="*" component={NotFound}/>
    </Router>
);
Tracker.autorun(()=>{
    const isAuthenticated = !!Meteor.userId();
});
