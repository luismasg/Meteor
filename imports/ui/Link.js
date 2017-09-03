import React, {Component} from "react";
import {browserHistory} from "react-router";

export default class Link extends Component {

    handleLogout(e) {
        //  e.preventDefault();
        browserHistory.push("/");
    }

    render() {
        return (
            <div>
                <p> Link comp here.</p>
                <button onClick={ this.handleLogout.bind(this) }>Log out</button>
            </div>
        );
    }
}