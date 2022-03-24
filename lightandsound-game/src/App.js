import { useState, useEffect, useRef } from "react";
import Game from "./components/Game";

const App = () => {
    
    const [gameState, setGameState] = useState(false)
    const [pattern, setPattern] = useState([2, 2, 4, 3, 2, 1, 2, 4]);
    //const [start, setStart] = useState(-1); //-1 off 0 on 1 reset
    const [progress, setProgress] = useState(1); //increases to eventually match pattern.length == you win
    const [playerInput, setPlayerInput] = useState(null);
    const [playerTurn, setPlayerTurn] = useState(null);
    const [progressPattern, setProgressPattern] = useState(null);
    const [index, setIndex] = useState(-1);
    const [sounds, setSounds] = useState([
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart1.mp3?alt=media&token=851a7e22-8008-4e11-b99c-38863b43a79c"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart2.mp3?alt=media&token=96b3b758-45ba-4620-9deb-0e68271d6bd2"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart3.mp3?alt=media&token=67cb6320-3a90-4c84-850b-da92af235ef6"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart4.mp3?alt=media&token=544dca10-0686-43a4-9c8a-45dee31ab22f")
                                        ]);


    useEffect(() => {
        
        if(gameState && !playerInput && !playerTurn){
            
                for(let i = 0; i < progressPattern.length; i++){
                    setTimeout(()=> {
                        let btn = progressPattern[i];
                        console.log("btn= ",i,btn)
                        setTimeout(() => {lightButton(btn)}, 500);
                        setTimeout(() => {clearButton(btn)}, 1600);
                        setTimeout(() => {}, 200);
                    }, 1000);
                }
            

            setPlayerTurn(true);

        } else if(gameState && playerTurn){
            let correctBtn = progressPattern[index];
            
            if(playerInput === correctBtn){
                console.log("found me!");
                let nextIndex = index + 1;
                let nextProgress = progress + 1;
                setProgress(nextProgress);
                setIndex(nextIndex);
                console.log(index);
                if(nextIndex == progressPattern.length){
                    console.log("completed local pattern");
                    console.log([...pattern].slice(0,nextProgress));
                    setProgressPattern([...pattern].slice(0,nextProgress));
                    setProgress(nextProgress);
                    setIndex(0);
                    setPlayerTurn(false);
                    //reset local values
                }
                
                
                setPlayerInput(null);
            }
            
            if(progress == 0){
                console.log("Game over!"); //reset all state idk
            }

        }
    }, [index, playerInput, playerTurn]);

    let playSound = (id) => {
        sounds[id].play();
    };    

    let lightButton = (id) => {
        document.getElementById(id).classList.add("lit")
    }

    let clearButton = (id) => {
        document.getElementById(id).classList.remove("lit")
    }
    

    return (
        <div>
            <div>
                <h1>Light and Sound Memory game</h1>
                <p>repeat the pattern back to win the game!</p>
                <button id="gameStateBtn" 
                        onClick={() => {setGameState(!gameState); setPlayerInput(0); setIndex(0); setProgressPattern([...pattern].slice(0, progress)); }}>
                        {gameState ? "Stop" : "Start"}
                </button>
            </div>
            <Game gameState={gameState} sounds={sounds} playSound={playSound} setPlayerInput={setPlayerInput}/>
        </div>
    );
}

export default App;