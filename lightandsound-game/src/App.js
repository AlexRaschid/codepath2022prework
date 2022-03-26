import { useState, useEffect, useRef } from "react";
import Game from "./components/Game";

let randomPattern = () => {
    return Array.from({length: 8}, () => Math.floor(Math.random() * 4) + 1);
}

const App = () => {
    
    const [sounds, setSounds] = useState([
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart1.mp3?alt=media&token=851a7e22-8008-4e11-b99c-38863b43a79c"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart2.mp3?alt=media&token=96b3b758-45ba-4620-9deb-0e68271d6bd2"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart3.mp3?alt=media&token=67cb6320-3a90-4c84-850b-da92af235ef6"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart4.mp3?alt=media&token=544dca10-0686-43a4-9c8a-45dee31ab22f")
       ]);
    const [pattern, setPattern] = useState(randomPattern()); //[2, 2, 4, 3, 2, 1, 2, 4]
    
    
    const gameState = useRef(-1)
    const progress = useRef(0);
    const index = useRef(-1);
    const disable = useRef(false);
    const [progressPattern, setProgressPattern] = useState([...pattern].slice(0, progress.current));
    const [start, setStart] = useState(false);
    const [playerInput, setPlayerInput] = useState(false); 
    const [playerTurn, setPlayerTurn] = useState(-1);



    useEffect(async () => {

        if(progress.current > pattern.length){
            window.alert("Winner - play again? (Page Reloading)");
            window.location.reload(true)
        }
        
        if(playerTurn && start &&
            isNaN(playerInput)){
            console.log("progressPattern: ", progressPattern);
            for(let i = 0; i < progressPattern.length; i++){
                    let btn = progressPattern[i];

                    await sleep(800);
                    playSound(btn -1 );
                    lightButton(btn);

                    await sleep(1000);
                    clearButton(btn);
                     
            }


        }

        
        if(start && playerInput && playerInput != progressPattern[index.current]){
            setPattern(randomPattern());
            window.alert("Game Over - Try Again (Page Reloading)");
            window.location.reload(true)
        }

        if(playerInput == progressPattern[index.current]){
            index.current = index.current + 1;
            setPlayerInput(false);
        }

        if(index.current == progressPattern.length){
            progress.current = progress.current + 1;
            setProgressPattern([...pattern].slice(0, progress.current));
            index.current = 0;
            setPlayerInput(NaN);
            setStart(true);
        }

    }, [start, playerTurn, playerInput, gameState]);

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
        <div className="container fluid">
            <div className="row text-center">
                <h1 id="title" >Memorize the Fart</h1>
                <p id="description">repeat the pattern back to win the game!</p>
                <button id="gameStateBtn" 
                        onClick={() => { //onstart we set the game conditions
                            if(gameState.current == -1){gameState.current = true}else{gameState.current = !gameState.current}
                            if(playerTurn == -1){
                                setPlayerTurn(false);
                                setPlayerInput(NaN);
                            }else{
                                setPlayerTurn(!playerTurn);
                            }
                            setStart(!start);
                            if(!gameState.current || gameState.current == -1){
                                disable.current = !disable.current
                            } else {
                                disable.current = false;
                            }
                            if(playerTurn == -1){setPlayerTurn(true);}
                            if(index.current == -1){index.current = 0;}
                            if(progress.current == 0){progress.current = 1; setProgressPattern([...pattern].slice(0, progress.current));}
                            
                        }}>
                        {gameState.current === -1 ? "Start" : gameState.current ? "Stop" : 'Start'}
                </button>
            </div>
            <Game gameState={gameState} sounds={sounds} playSound={playSound} setPlayerInput={setPlayerInput} disable={disable} />
        </div>
    );
}

export default App;