/**
 * Created by luisma on 20/08/2017.
 */


import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';
export default class PlayerList extends React.Component {

    renderPlayers() {
        if (this.props.players && this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Please add a player to get started!</p>
                </div>
            );
        } else {
            return !!this.props.players && this.props.players.map(player => <Player key={player._id} player={player}/>);
        }
    }

    render() {
        return (
            <div>
                <FlipMove duration={650} easing="ease-out" maintainContainerHeight={true}>
                    {this.renderPlayers() || <p>Something is wrong. I didn't receive list of players.</p>}
                </FlipMove>
            </div>
        );
    }
};

PlayerList.propTypes = {
    players: React.PropTypes.array.isRequired
};