import { useState, useEffect, useRef } from "react";
import Game from "./components/Game";

const App = () => {
    
    const [gameState, setGameState] = useState(false)
    const [pattern, setPattern] = useState([2, 2, 4, 3, 2, 1, 2, 4]);
    const progress = useRef(0);
    const [sounds, setSounds] = useState([
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart1.mp3?alt=media&token=851a7e22-8008-4e11-b99c-38863b43a79c"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart2.mp3?alt=media&token=96b3b758-45ba-4620-9deb-0e68271d6bd2"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart3.mp3?alt=media&token=67cb6320-3a90-4c84-850b-da92af235ef6"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart4.mp3?alt=media&token=544dca10-0686-43a4-9c8a-45dee31ab22f")
                                        ]);

    useEffect(() => {
        if(gameState){
            lightButton(pattern[progress.current] );
            playSound(pattern[progress.current]);
            
        }
    }, [gameState, progress]);

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
                        onClick={() => {setGameState(!gameState)}}>
                        {gameState ? "Stop" : "Start"}
                </button>
            </div>
            <Game gameState={gameState} sounds={sounds} playSound={playSound}/>
        </div>
    );
}

export default App;