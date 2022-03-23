import { useState } from "react";

const Game = (props) => {
    
    const [pattern, setPattern] = useState([2, 2, 4, 3, 2, 1, 2, 4]);
    const [progress, setProgress] = useState(0);
    const [sounds, setSounds] = useState([
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart1.mp3?alt=media&token=851a7e22-8008-4e11-b99c-38863b43a79c"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart2.mp3?alt=media&token=96b3b758-45ba-4620-9deb-0e68271d6bd2"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart3.mp3?alt=media&token=67cb6320-3a90-4c84-850b-da92af235ef6"),
                                         new Audio("https://firebasestorage.googleapis.com/v0/b/codepath2022prework.appspot.com/o/audio%2Ffart4.mp3?alt=media&token=544dca10-0686-43a4-9c8a-45dee31ab22f")

                                        ])
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th className="buttonCol">
                            <button onClick={() => {sounds[0].play();}} className="gameButton" />       
                        </th>
                        <th className="buttonCol">
                            <button onClick={() => {sounds[1].play();}} className="gameButton"></button>
                        </th>
                        <th className="buttonCol">
                            <button onClick={() => {sounds[2].play();}} className="gameButton"></button>
                        </th>
                        <th className="buttonCol">
                            <button onClick={() => {sounds[3].play();}} className="gameButton"></button>
                        </th>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
}

export default Game;