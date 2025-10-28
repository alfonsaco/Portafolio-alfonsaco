<script setup lang="ts">

</script>


<template>
    <div class="div-ventana-terminal">
        <input type="text" class="terminal-input" value="Texto de ejemplo">
    </div>
</template>


<style>
    .div-ventana-terminal {
        width: 100%;
        height: 100%;
        background-color: #000000;
        padding: 8px;
        color: #25D318;
    }

    /* INPUT DONDE SE ESCRIBE */
    .terminal-input {
        color: #25D318;
        width: 100%;
        background-color: transparent;
        border: 0;
    }
    .terminal-input:focus {
        outline: 0;
    }
    .terminal-input::selection {
        color: #000;
        background-color: #25D318;
    }
</style>