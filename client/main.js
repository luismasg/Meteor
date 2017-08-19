import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';


const renderPlayers = (playersList) => {
    return playersList.map(player => {
        return <p key={player._id}>{player.name} has {player.score} points(s).</p>
    })
};


Meteor.startup(function () {

    Tracker.autorun(function () {
        let players = Players.find().fetch();
        let title = "Score Keep";
        let name = 'LuisMa';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name} !</p>
                <p>This is my second p.</p>
                {renderPlayers(players)}
            </div>
        );

        ReactDOM.render(jsx, document.getElementById('app'));
    });
    Players.insert({
        name: 'Jenny',
        score: -2
    });

});
