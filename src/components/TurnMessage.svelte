<script>
    import { turn, won, winner } from '$utils/stores.js'
    import { players } from '$utils/consts.js'

    let player
    $: player = Object.values(players).find(pl => pl.letter == $turn)
</script>

<div>
    <span style="color: { player.background };">{ $turn }</span>
    TURN
</div>

<style>
    div {
        position: fixed;
        top: 0;
        background: #2B0040;
        padding: 25px;
        font-size: 20px;
        color: #fff;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 150px;
        text-align: center;
    }
</style>