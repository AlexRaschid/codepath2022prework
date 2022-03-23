import { useState } from "react";

const Game = (props) => {
    
    const [pattern, setPattern] = useState([2, 2, 4, 3, 2, 1, 2, 4]);
    const [progress, setProgress] = useState(0);

    return (
        <div>
            <table>
               <tr>
                    <th class="buttonCol">
                        <button class="gameButton"></button>
                    </th>
                    <th class="buttonCol">
                        <button class="gameButton"></button>
                    </th>
                    <th class="buttonCol">
                        <button class="gameButton"></button>
                    </th>
                    <th class="buttonCol">
                        <button class="gameButton"></button>
                    </th>
                </tr> 
            </table>
        </div>
    )
}

export default Game;