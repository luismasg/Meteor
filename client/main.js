import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import {Players} from "./../imports/api/players";


import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        ReactDOM.render(<App title="Score Keep" players={Players.find().fetch()}/>, document.getElementById('app'));
    });
});