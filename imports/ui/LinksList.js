import React,{ Component } from 'react';
import { Links } from  '../api/links';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';


export default class LinksList extends Component {

    constructor(props){
        super(props);
        this.state={
            links:[]
        };
    }
    componentDidMount(){
        this.linksTracker =Tracker.autorun(()=>{
        Meteor.subscribe('links');
            this.setState({ links: Links.find({}).fetch() })
        });
    }
    componentWillUnmount(){
        console.log('un mount');
        this.linksTracker.stop();
    }
    renderLinksListItems(){
        return this.state.links.map(link=><p key={link._id}>{link.url}</p>);
    }
    render(){
        return (
            <div>
                <p> Links List </p>
                <div>{this.renderLinksListItems()}</div>
            </div>
        );
    }
}
