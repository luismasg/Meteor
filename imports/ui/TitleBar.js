/**
 * Created by luismasg on 20/08/2017.
 */
import React, {Component}from 'react';

export default class TitleBar extends Component {

    renderSubtitle() {
        if (this.props.subtitle) {
            return <h3>{this.props.subtitle}</h3>;
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.renderSubtitle()}
            </div>
        );
    }
}


TitleBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string
};

{/*

 TitleBar.defaultProps={
 title:'default title'
 };

 */
}