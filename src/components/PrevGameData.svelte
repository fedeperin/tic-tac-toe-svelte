<script>
    import { players } from '$utils/consts.js'
    export let player

    const actualPlayer = players[player]
    const { score } = actualPlayer
</script>

<div style="background: { actualPlayer.background };">
    <p>{ actualPlayer.name }</p>
    <span>{ $score }</span>
</div>

<style>
    div {
        border-radius: 5px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    div p {
        font-weight: 600;
    }

    div span {
        font-size: 30px;
        font-weight: 700;
    }
</style>