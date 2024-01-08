<script>
    import TickableBox from '$components/TickableBox.svelte'
</script>

<div>
    <TickableBox />
    <TickableBox />
    <TickableBox />
    <TickableBox />
    <TickableBox />
    <TickableBox />
    <TickableBox />
    <TickableBox />
    <TickableBox />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        width: 100%;
    }
</style>