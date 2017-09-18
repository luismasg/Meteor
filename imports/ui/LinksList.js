import React,{ Component } from 'react';
import { Links } from  '../api/links';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import LinksListItem from './LinksListItem'


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
        return this.state.links.map((link)=>{
            const shortUrl=Meteor.absoluteUrl(link._id);
         return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
        });
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
