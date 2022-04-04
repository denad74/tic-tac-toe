
import React from 'react'
import { useState, useEffect } from 'react';
import Board from './Board';
import Endgame from './Endgame';
import Navbar from './Navbar';

const INITVALUE = '';
const PLAYERONE = 'X';
const PLAYERTWO = 'O';
const winnerTest = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const Game = (props) => {

    // const [dataOfGames, setDataOfGames] = useState([]);
    const [dataOfGames, setDataOfGames] = useState(() => {
  const saved = localStorage.getItem("dataOfGames");
  const initialValue = JSON.parse(saved);
    return initialValue || [];
  });


    // props.gameDataProps.firstPlayer = PLAYERONE;
    // props.gameDataProps.secondPlayer = PLAYERTWO;
    
    const [grid, setGrid] = useState(Array(9).fill(INITVALUE));
    const [player, setPlayer] = useState(false);
    const [isEndGame, setIsEndGame] = useState(false);
    const [draw, setDraw] = useState(false)
    const [win, setWin] = useState('')
    const [results, setResults] = useState({
    winnerX: 0,
    winnerO: 0,
    draw: 0
  });
 
    const restart = () => {
        setGrid(Array(9).fill(INITVALUE))
        setIsEndGame(false);
        setDraw(false)
   }
    
    const isGameOver = () => {
        if (!isEndGame) {
            for (let i = 0; i < 8; i++){
                if (
                    grid[winnerTest[i][0]] === PLAYERONE && 
                    grid[winnerTest[i][1]] === PLAYERONE && 
                    grid[winnerTest[i][2]] === PLAYERONE 
                ) {
                    setIsEndGame(true); 
                    setResults({ ...results, winnerX: ++results.winnerX })
                    setWin(props.gameData.firstPlayer)
                    setDataOfGames([...dataOfGames, {...props.gameData, winner: props.gameData.firstPlayer}])
                    return;
                }
            }

             for (let i = 0; i < 8; i++){
                if (
                    grid[winnerTest[i][0]] === PLAYERTWO && 
                    grid[winnerTest[i][1]] === PLAYERTWO && 
                    grid[winnerTest[i][2]] === PLAYERTWO 
                ) {
                    setIsEndGame(true);
                    setResults({ ...results, winnerO: ++results.winnerO });
                    setWin(props.gameData.secondPlayer)
                    setDataOfGames([...dataOfGames, {...props.gameData, winner: props.gameData.secondPlayer}])
                    return;
                }
            }    
            
            if (!grid.includes(INITVALUE)) { 
                setDraw(true);
                setResults({...results, draw: ++results.draw})
                setIsEndGame(true);
                setWin('')
                setDataOfGames([...dataOfGames, {...props.gameData, winner: "draw"}])
                return
            } 
        } 
    }
isGameOver()

    const clickSelectHandler = (id) => {
        
        setGrid(
            grid.map((box, index) => {
                if (index === id) {
                    if (player) {
                        return PLAYERONE;
                    } else {
                        return PLAYERTWO;
                    }
                } else {
                    return box;
                }
                
            })
        );
        setPlayer(!player)

    }

useEffect(() => {
  // storing data in localStorage
    localStorage.setItem("gameData", JSON.stringify(dataOfGames));
}, [dataOfGames]);

    console.log(dataOfGames);
    console.log(props.gameData);


    return (
        <div>
            <Navbar
                results={results}
                gameData={props.gameData}
                 />
            {isEndGame ? <Endgame win={win} restartGame={restart} dataOfGames={[dataOfGames]}/>: <Board
                onClick
                squerePart={grid}
                clickHandler={clickSelectHandler}

            />}
            
        </div>
    );
};

export default Game;