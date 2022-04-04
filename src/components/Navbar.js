import React from 'react';
import './style/Navbar.css'

const Navbar = (props) => {
    const { firstPlayer, secondPlayer } = props.gameData;
    const { winnerX, winnerO, draw } = props.results;
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <h2 className='navbar-header'>Tic Tac Toe</h2>
                </div>
            <div className='navbar-right'>
                <p>{firstPlayer}: {winnerX}</p>
                <p>{secondPlayer}: {winnerO}</p>
                <p>Ties: {draw}</p>
            </div>
        </div>
    );
};

export default Navbar;
