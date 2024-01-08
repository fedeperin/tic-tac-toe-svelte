import { draws, playerXgames, playerOgames, gameData, won, winner } from '$utils/stores.js'
import { get } from 'svelte/store'

export const players = {
    0: {
        name: 'Draw',
        background: '#BCDBF9',
        score: draws,
        letter: ''
    },
    1: {
        name: 'Player X',
        background: '#48D2FE',
        score: playerXgames,
        letter: 'X'
    },
    2: {
        name: 'Player O',
        background: '#E2BE00',
        score: playerOgames,
        letter: 'O'
    }
}

export const detectWin = () => {
    // Detect if a player won as crossed
    if((get(gameData)[0] &&
    get(gameData)[0] == get(gameData)[4] &&
    get(gameData)[4] == get(gameData)[8]) ||
    (get(gameData)[2] &&
    get(gameData)[2] == get(gameData)[4] &&
    get(gameData)[4] == get(gameData)[6])) {
        winner.set(get(gameData)[4])
        won.set(true)
    }

    // Function to detect if an element is single in any array inside an array, also detect if the element is not empty
    const handleSubarrays = subarray => {
        const noRepeatArr = Array.from(new Set(subarray))
        if(noRepeatArr.length == 1 && noRepeatArr[0] != '') {
            winner.set(noRepeatArr[0])
            won.set(true)
        }
    }

    // Detect if a player won as horizontal
    const subarraysHorizontal = [
        get(gameData).slice(0, 3),
        get(gameData).slice(3, 6),
        get(gameData).slice(6, 9)
    ]

    subarraysHorizontal.forEach(handleSubarrays)

    // Detect if a player won as vertical
    const subarraysVertical = [
        [
            subarraysHorizontal[0][0],
            subarraysHorizontal[1][0],
            subarraysHorizontal[2][0]
        ],
        [
            subarraysHorizontal[0][1],
            subarraysHorizontal[1][1],
            subarraysHorizontal[2][1]
        ],
        [
            subarraysHorizontal[0][2],
            subarraysHorizontal[1][2],
            subarraysHorizontal[2][2]
        ]
    ]

    subarraysVertical.forEach(handleSubarrays)

    if(get(gameData).filter(el => el != '').length == 9) {
        winner.set('Draw')
        won.set(true)
    }
}