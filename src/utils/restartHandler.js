import {
    won,
    winner,
    playerXgames,
    playerOgames,
    draws,
    gameData
} from '$utils/stores.js'
import { get } from 'svelte/store'
import toast from 'svelte-french-toast'

export default () => {
    won.subscribe(value => {
        if(!value) return

        if(get(winner) != 'Draw') {
            toast(`"${ get(winner) }" won!`, {
                icon: '🎮',
                position: 'bottom-right'
            })
        } else {
            toast(`It was a draw!`, {
                icon: '🎮',
                position: 'bottom-right'
            })
        }

        if(get(winner) == 'X') {
            playerXgames.update(value => value + 1)
        } else if(get(winner) == 'O') {
            playerOgames.update(value => value + 1)
        } else if(get(winner) == 'Draw') {
            draws.update(value => value + 1)
        } 

        gameData.set(['', '', '', '', '', '', '', '', ''])

        won.set(false)
        winner.set('')
    })
}