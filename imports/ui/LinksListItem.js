import React, {Component} from "react";
import {Meteor} from 'meteor/meteor';
import Clipboard from 'clipboard';
export default class LinksListItem extends Component {
constructor(props){
    super(props);
    this.state={
        copied:false
    };
}
componentDidMount(){
    this.clipboard=new Clipboard(this.refs.copy);
    this.clipboard.on('success',() => {
        this.setState({copied:true});
        setTimeout(() => this.setState({copied:false}) , 1000);
    }).on('error',() => {
        alert('unable to copy, plase manuelly copy the link');
    });
}
componentWillUnmount(){
    this.clipboard.destroy();
}
    render() {
        let {url,shortUrl,visible,_id}=this.props;
        return (
            <div >
                <p>{url}</p>
                <p>{shortUrl}</p>
                <button ref="copy" data-clipboard-text={shortUrl}>{(this.state.copied)?'copied':'copy'}</button>
                <button onClick={() => {
                    Meteor.call('links.setVisibility',_id,!visible)
                }}>{(visible)?'hide':'unhide'}</button>
            </div>
        );
    }
};
LinksListItem.propTypes={
    shortUrl:React.PropTypes.string.isRequired,
    url:React.PropTypes.string.isRequired,
    _id:React.PropTypes.string.isRequired,
    userId:React.PropTypes.string.isRequired,
    visible:React.PropTypes.bool.isRequired
};
