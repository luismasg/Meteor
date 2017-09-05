import React, {Component} from "react";
import {Accounts} from 'meteor/accounts-base';


export default class Link extends Component {

    handleLogout(e) {
        Accounts.logout();
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
