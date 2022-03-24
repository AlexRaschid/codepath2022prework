import { useEffect, useState } from "react";

const Game = (props) => {
    
    let sounds = props.sounds;

         

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th className="buttonCol">
                            <button id='1' onClick={() => {props.playSound(0); props.setPlayerInput(1)}} className="btn1 gameButton" />       
                        </th>
                        <th className="buttonCol">
                            <button id='2' onClick={() => {props.playSound(1); props.setPlayerInput(2)}} className="btn2 gameButton"></button>
                        </th>
                        <th className="buttonCol">
                            <button id='3' onClick={() => {props.playSound(2); props.setPlayerInput(3)}} className="btn3 gameButton"></button>
                        </th>
                        <th className="buttonCol">
                            <button id='4' onClick={() => {props.playSound(3); props.setPlayerInput(4)}} className="btn4 gameButton"></button>
                        </th>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
}

export default Game;