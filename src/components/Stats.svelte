<script>
    import PrevGameData from '$components/PrevGameData.svelte'
</script>

<div class="stats">
    <PrevGameData player={ 1 } />
    <PrevGameData player={ 0 } />
    <PrevGameData player={ 2 } />
</div>

<style>
    .stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        margin-bottom: 50px;
    }
</style>