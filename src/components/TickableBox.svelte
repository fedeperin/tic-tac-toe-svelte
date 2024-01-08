<script>
    import { turn, gameData, won } from '$utils/stores.js'
    import { players, detectWin } from '$utils/consts.js'

    let player
    let value = ''
    let disabled = false
    let box
    let boxNumber

    $: {
        if(box) {
            boxNumber = [...box.parentElement.children].indexOf(box)
        }
    }
    
    const handleClick = () => {
        value = $turn
        
        let gameDataCopy = [...$gameData]
        gameDataCopy[boxNumber] = $turn
        gameData.set([...gameDataCopy])

        disabled = true

        detectWin()
        turn.set(($turn == 'X') ? 'O' : 'X')
    }

    $: player = Object.values(players).find(pl => pl.letter == value)
    won.subscribe(actualWon => {
        if(actualWon) return
        disabled = false
        value = ''
    })
</script>

<button
class="box"
on:click={ handleClick }
style="color: { player.background };"
{ disabled }
bind:this={ box }>
    { value }
</button>

<style>
    .box {
        width: 100%;
        aspect-ratio: 1/1;
        background: #43115B;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-size: 70px;
        transition: opacity .2s ease;
    }

    .box:disabled {
        cursor: initial;
    }
    
    .box:hover:not(:disabled) {
        opacity: .6;
    }
</style>