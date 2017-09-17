import React, {Component} from "react";
import {Meteor} from 'meteor/meteor';

export default class LinksListItem extends Component {

    render() {
        console.log(this.props);
        return (
            <div style={{border:'1px solid black',marginBottom:10}}>
                <p>{this.props.link.url}</p>
                <p>{this.props.shortUrl}</p>
            </div>
        );
    }
};
LinksListItem.propTypes={
    shortUrl:React.PropTypes.string.isRequired
    // ,
    // link.url:React.PropTypes.string.isRequired,
    // link._id:React.PropTypes.string.isRequired,
    // link.userId:React.PropTypes.string.isRequired


};
