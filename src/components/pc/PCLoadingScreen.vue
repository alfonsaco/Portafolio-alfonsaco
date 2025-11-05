<script setup lang="ts">
import Logo from '../../assets/alfonOS.png';
import { ref } from 'vue';

const ocultarPantalla = ref(false);
const displayNone = ref(false);

setTimeout(() => {
    ocultarPantalla.value = true;
}, 3000);
setTimeout(() => {
    displayNone.value = true;
}, 4000);
</script>


<template>
    <div class="pc-loading-screen"
    :class="[ocultarPantalla ? 'ocultar-loading' : '', 
    displayNone ? 'display-loading' : '']">
        <div>
            <img :src="Logo" alt="Logo AlfonOS">
            <h2>AlfonOS</h2>
            <p>Bienvenido al portafolio de Alfonso Rincón. Pulsa F11 para una mejor experiencia<br>
                con pantalla completa.</p>
            <div class="barra-de-carga"></div>
        </div>
    </div>
</template>


<style>
    .pc-loading-screen {
        width: 100%;
        height: 100%;
        background-color: #000;
        position: fixed;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    .pc-loading-screen * {
        margin: 0;
    }

    /* DIV DE CONTENIDO */
    .pc-loading-screen > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
    }
    .pc-loading-screen img {
        width: 70px;
        height: 70px;
    }
    .pc-loading-screen h2 {
        font-size: 2em;
        color: #e0e0e0;
    }
    .pc-loading-screen p {
        color: #c2c2c2;
        font-size: 1.05em;
    }


    .barra-de-carga {
        border: 5px solid #FFF;
        width: 50px;
        height: 50px;
        margin-top: 20px;
        border-radius: 100%;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: transparent;
        animation: barraCarga 1s infinite ease;
    }
    @keyframes barraCarga {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }

    /* CLASES PARA OCULTAR EL LOADING */
    .ocultar-loading {
        opacity: 0;
        pointer-events: none;
        transition: opacity .8s ease;
    }
    .display-loading {
        display: none;
    }
</style>