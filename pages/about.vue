<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, totam quis optio aut recusandae a iure modi voluptatum consequatur asperiores?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, totam quis optio aut recusandae a iure modi voluptatum consequatur asperiores?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/tim?name=gray')
    // const { data } = await useFetch('/api/tim?name=gray', {
    //     method: 'post',
    //     body: { age: 4 }
    // })
    // const { data } = await useFetch('/api/tim')
    const { data } = await useFetch('/api/currency/PHP')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>