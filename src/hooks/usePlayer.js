
import { useState } from 'react';

import { randomTetromino } from '../tetrominos.js';

export const usePlayer = () => {
    //const playerState = useState();
    //const player = playerState[0]
    //const setPlayer = playerState[1]

    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
    });

    return [player];
    
    

}




