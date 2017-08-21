/**
 * Created by LuisMa on 20/08/2017.
 */


import React from 'react';
import {Players} from "./../api/players";
export default class Player extends React.Component {

    render() {
        return (
            <p>
                {this.props.player.name} has {this.props.player.score} points(s).
                <button onClick={() => {
                    Players.update(this.props.player._id, {$inc: {score: 1}});
                }}>+1
                </button>
                <button onClick={() => {
                    Players.update(this.props.player._id, {$inc: {score: -1}})
                }}>-1
                </button>
                <button onClick={() => Players.remove(this.props.player._id)}>&times;</button>
            </p>
        );
    }
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired
};
