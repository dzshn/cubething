<template>
    <Cube/>
</template>

<script>
import Cube from './components/Cube.vue'

export default {
    name: 'App',
    components: {
        Cube
    }
}
</script>

<style>
:root, body {
    height: 100%;
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow: hidden;
    color: #2c3e50;
    height: 100%;
}
</style>