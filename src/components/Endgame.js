import React, { useState, useEffect } from 'react';
import DisplayGamesRes from './DisplayGamesRes';
import DisplayResOfGame from './DisplayResOfGame'
import './style/Endgame.css'



const Endgame = (props) => {
    console.log(props);
    
    const [isDisplayed, setIsDisplayed] = useState(false);


    useEffect(() => {
        setInterval(() => {
            setIsDisplayed(true);
        }, 1000);
    }, []);

    return (

       
        <div className='endgame'>
            {!isDisplayed ? <DisplayResOfGame win={ props.win}/> : <DisplayGamesRes dataOfGames={props.dataOfGames}/>}
            <button onClick={props.restartGame} className='endgame-btn' type='text'>Wanna try again?</button>
        </div>
    );
};

export default Endgame;
