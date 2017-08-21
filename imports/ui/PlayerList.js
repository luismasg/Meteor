/**
 * Created by luisma on 20/08/2017.
 */


import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {

    renderPlayers() {
        if (this.props.players && this.props.players.length === 0) {
            return <p>Please add a player to get started!</p>
        } else {
            return !!this.props.players && this.props.players.map(player => <Player key={player._id} player={player}/>);
        }
    }

    render() {
        return (
            <div>
                {this.renderPlayers() || <p>Something is wrong. I didn't receive list of players.</p>}
            </div>
        );
    }
};

PlayerList.propTypes = {
    players: React.PropTypes.array.isRequired
};