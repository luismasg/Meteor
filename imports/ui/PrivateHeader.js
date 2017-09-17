import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

const PrivateHeader =({title})=>{
    return(
        <div>
            <h1> {title}</h1>
            <button onClick={()=>Accounts.logout()}>Log out</button>
        </div>
    );
};
PrivateHeader.propTypes = {
    title: React.PropTypes.string.isRequired
};
export default PrivateHeader;
