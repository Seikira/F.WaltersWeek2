import React from 'react';
import Header from './Header';
import Board from './Board';
import Restart from './Restart';
import Status from './Status';

const Game = () => {

    return (
        <div>
            <Header />
            <Board />
            <Status />
            <Restart />
        </div>
    )
}

export default Game;