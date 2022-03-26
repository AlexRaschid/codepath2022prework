import { useEffect, useState } from "react";

const Game = (props) => {
    
    let sounds = props.sounds;
    
    
    console.log("are buttons disabled?", props.disable);

    return (
            <div id="gameContainer">
                <div className="row">
                    <div className="col  text-center">
                        <button id='1' onClick={() => {props.playSound(0); props.setPlayerInput(1)}} className="btn1 gameButton"  disabled={props.disable.current}/>        
                        <button id='2' onClick={() => {props.playSound(1); props.setPlayerInput(2)}} className="btn2 gameButton" disabled={props.disable.current} />
                    </div>
                    <div className="col  text-center">
                        <button id='3' onClick={() => {props.playSound(2); props.setPlayerInput(3)}} className="btn3 gameButton"  disabled={props.disable.current}/> 
                        <button id='4' onClick={() => {props.playSound(3); props.setPlayerInput(4)}} className="btn4 gameButton" disabled={props.disable.current} />       
                    </div>
                </div>
                
                            
            </div>
                        
    )
}

export default Game;