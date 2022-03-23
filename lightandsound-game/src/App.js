import { useState } from "react";
import Game from "./components/Game";

const App = () => {
    
    const [gameState, setGameState] = useState(false)


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
            <Game gameState={gameState}/>
        </div>
    );
}

export default App;