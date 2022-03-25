import { useState, useEffect, useRef } from "react";
import Game from "./components/Game";

const App = () => {
    
    const [sounds, setSounds] = useState([
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart1.mp3?alt=media&token=851a7e22-8008-4e11-b99c-38863b43a79c"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart2.mp3?alt=media&token=96b3b758-45ba-4620-9deb-0e68271d6bd2"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart3.mp3?alt=media&token=67cb6320-3a90-4c84-850b-da92af235ef6"),
        new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart4.mp3?alt=media&token=544dca10-0686-43a4-9c8a-45dee31ab22f")
       ]);
    const gameState = useRef(-1)
    const [pattern, setPattern] = useState([2, 2, 4, 3, 2, 1, 2, 4]);
    //const [progress, setProgress] = useState(1); //increases to eventually match pattern.length == you win
    

    const [playerInput, setPlayerInput] = useState(false); 
    const [playerTurn, setPlayerTurn] = useState(-1);//default true bc user needs to click to start
    const progress = useRef(0);
    const [progressPattern, setProgressPattern] = useState([...pattern].slice(0, progress.current));
    const [start, setStart] = useState(false);
    //const started = useRef(-1);
    const index = useRef(-1);
    const disable = useRef(false);



    useEffect(async () => {
        //console.log(playerTurn, start);
        if(playerTurn && start &&
            isNaN(playerInput)){
            console.log("progressPattern: ", progressPattern);
            for(let i = 0; i < progressPattern.length; i++){
                    let btn = progressPattern[i];
                    

                    await sleep(500);
                    lightButton(btn);

                    await sleep(1000);
                    clearButton(btn);
                     
            }

            //setStart(false);

        }

        if(start == false && gameState.current == false && !playerTurn){
            
            console.log("cancel execution");
            

        }
        
        //
        if(playerInput && playerInput != progressPattern[index.current]){
            console.log('game over');
            window.alert("Game Over - Try Again (Page Reloading)");
            window.location.reload(true)
            

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
        <div>
            <div>
                <h1>Light and Sound Memory game</h1>
                <p>repeat the pattern back to win the game!</p>
                <button id="gameStateBtn" 
                        onClick={() => { //onstart we set the game conditions
                            if(gameState.current == -1){gameState.current = true}else{gameState.current = !gameState.current}
                            if(playerTurn == -1){
                                setPlayerTurn(false);
                                setPlayerInput(NaN);
                            }else{
                                setPlayerTurn(!playerTurn);
                            }
                            //setPlayerInput(false);
                            setStart(!start);
                            console.log("tewst-", !start, !gameState.current);
                            if(!gameState.current){
                                console.log("run code here");
                                disable.current = !disable.current
                            } else {
                                disable.current = false;
                            }
                            if(playerTurn == -1){setPlayerTurn(true);}
                            if(index.current == -1){index.current = 0;}
                            if(progress.current == 0){progress.current = 1; setProgressPattern([...pattern].slice(0, progress.current));}
                            
                        }}>
                            {console.log(gameState, index, progress, playerTurn, start)}
                        {gameState.current === -1 ? "-Start" : gameState.current ? "Stop" : 'Start'}
                </button>
            </div>
            <Game gameState={gameState} sounds={sounds} playSound={playSound} setPlayerInput={setPlayerInput} disable={disable} />
        </div>
    );
}

export default App;