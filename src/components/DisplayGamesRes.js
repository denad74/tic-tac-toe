const DisplayGamesRes = (props) => {
    console.log(props);
    return (
        props.dataOfGames.map((data) => {
            return data.map((item, index) => {
                console.log(item);
                return <div key={Math.random() * index}>{item.timeOfGame} {item.firstPlayer}vs{item.secondPlayer} {item.winner} won </div>
            })
            
             })
    )
        
}
     
export default DisplayGamesRes;