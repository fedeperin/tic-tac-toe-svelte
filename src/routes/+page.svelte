<svelte:head>
    <title>Tic Tac Toe</title>
</svelte:head>

<script>
    import GameBoard from '$components/GameBoard.svelte'
    import TurnMessage from '$components/TurnMessage.svelte'
    import restartHandler from '$utils/restartHandler'
    restartHandler()
</script>

<TurnMessage />
<GameBoard />