import React, {Component} from "react";
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';


export default class Link extends Component {

    handleLogout(e) {
        Accounts.logout();
    }
    onSubmit(e){
        const url =this.refs.url.value.trim();
        e.preventDefault();
        if(url){
            Meteor.call('links.insert',url);            
            this.refs.url.value='';
        }

    }

    render() {
        return (
            <div>
                <p> Your Links</p>
                <button onClick={this.handleLogout.bind(this) }>Log out</button>
                <LinksList />
                <p>Add Link</p>
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <input type="text" ref="url" placeholder="URL"></input>
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}
