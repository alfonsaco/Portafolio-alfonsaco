<script setup lang="ts">

</script>


<template>
    <div class="div-widget-pc">
        <div class="div-widget-texto">
            <h3>Ejemplo</h3>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>
            <p>dadasdasdasdas</p>

        </div>
        <div class="div-widget-difuminado">
            <div class="difuminado"></div>
            Mostrar más...
        </div>
    </div>
</template>


<style>
    .div-widget-pc {
        background-color: #222222;
        backdrop-filter: blur(8px);
        width: 300px;
        height: 300px;
        position: absolute;
        right: 30px;
        bottom: calc(16px + 60px);
        border-radius: 20px;
        border: 1px solid #999;
        cursor: pointer;
        z-index: 100;
        user-select: none;
        overflow: hidden;
    }

    .div-widget-texto > * {
        margin: 0;
        width: 100%;
        height: 85%;
    }

    .div-widget-difuminado {
        color: #6b6b6b;
        width: 100%;
        height: 15%;
    }
    .difuminado {
        background-image: linear-gradient(to top, #222222, transparent 90%);
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 30px;
    }
</style>