import { useState, useEffect, useRef } from "react";
import Game from "./components/Game";

const App = () => {
    
    const [sounds, setSounds] = useState([
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart1.mp3?alt=media&token=851a7e22-8008-4e11-b99c-38863b43a79c"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart2.mp3?alt=media&token=96b3b758-45ba-4620-9deb-0e68271d6bd2"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart3.mp3?alt=media&token=67cb6320-3a90-4c84-850b-da92af235ef6"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart4.mp3?alt=media&token=544dca10-0686-43a4-9c8a-45dee31ab22f")
       ]);
    const [gameState, setGameState] = useState(false)
    const [pattern, setPattern] = useState([2, 2, 4, 3, 2, 1, 2, 4]);
    //const [progress, setProgress] = useState(1); //increases to eventually match pattern.length == you win
    

    const [playerInput, setPlayerInput] = useState(false); 
    const [playerTurn, setPlayerTurn] = useState(true);//default true bc user needs to click to start
    const progress = useRef(1);
    const [progressPattern, setProgressPattern] = useState([...pattern].slice(0, progress.current));
    const [start, setStart] = useState(false);
    const index = useRef(0);



    useEffect(async () => {
        if(playerTurn && start){
            console.log("progressPattern: ", progressPattern);
            for(let i = 0; i < progressPattern.length; i++){
                    let btn = progressPattern[i];
                    console.log(btn);

                    await sleep(200);
                    lightButton(btn);

                    await sleep(1600);
                    clearButton(btn);
                    
                
            }

            setPlayerTurn(false);
        }
        
        if(playerInput == progressPattern[index.current]){
            index.current = index.current + 1;
            console.log(index);
            setPlayerInput(false);
        }

        if(index.current == progressPattern.length){
            console.log("pattern matched");
            progress.current = progress.current + 1;
            setProgressPattern([...pattern].slice(0, progress.current));
            index.current = 0;
            setPlayerTurn(true);

        }
        
    }, [start, playerTurn, playerInput]);


    let sleep = (time) => {
        return new Promise(resolve => setTimeout(resolve,time));
    }


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
                        onClick={() => { //onstart we set the game conditions
                            setGameState(!gameState); 
                            setPlayerInput(false);
                            start ? setStart(false): setStart(true);
                            //setProgressPattern();
                            
                        }}>
                        {gameState ? "Stop" : "Start"}
                </button>
            </div>
            <Game gameState={gameState} sounds={sounds} playSound={playSound} setPlayerInput={setPlayerInput}/>
        </div>
    );
}

export default App;