import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Players} from "./../imports/api/players";
import {Tracker} from "meteor/tracker";

const renderPlayers = (playersList) => {
    return playersList.map(player => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} points(s).
                <button onClick={() => Players.remove({_id: player._id})}>&times;</button>
            </p>
        );
    });
};

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
        e.target.playerName.value = '';
        //PLAYERS INSERT
        Players.insert({
            name: playerName,
            score: 0
        });
    }
};

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "Score Keep";
        let name = 'LuisMa';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name} !</p>
                <p>This is my second p.</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});