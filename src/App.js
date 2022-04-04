import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './components/Game';
import Login from './components/Login';
// import Endgame from './components/Endgame';


const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "  " + today.getHours() + ':' + today.getMinutes();  

function App() {

 
  
  
  

  const [gameData, setGameData] = useState({
    firstPlayer: '',
    secondPlayer: '',
    timeOfGame: '',
    uniqueId:0,
  });

   const [validForm, setValidForm] = useState(false);

 
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setGameData({ ...gameData, [e.target.name]: value })
   
  };

  // const onChangeHandlerPlayerTwo = (e) => {
  //   e.preventDefault();
  //   setPlayerTwo(e.target.value)
  // };



  const startGamaHandler = (e) => {
    e.preventDefault();
    setGameData({ ...gameData, timeOfGame: date, uniqueId: ++gameData.uniqueId })
    setValidForm(true)
    // setGameData({
    //   ...gameData, firstPlayer: '', secondPlayer: ''
    // })
  };
// useEffect(() => {
//   // storing data in localStorage
//     localStorage.setItem("gameData", JSON.stringify(gameData));
// }, [gameData]);

  return (
    <div className="App">
       {validForm ? <Game
        gameData={gameData} 
      /> :
        <Login
        onChange={onChangeHandler}
        onSubmit={startGamaHandler}
        value={gameData}
        disabled={!gameData.firstPlayer || !gameData.secondPlayer}
      /> }
      
    </div>
  );
}

export default App;
