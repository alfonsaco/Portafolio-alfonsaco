<script setup lang="ts">
import Logo from '../../assets/alfonOS.webp';
import { ref } from 'vue';

const ocultarPantalla = ref(false);
const displayNone = ref(false);

setTimeout(() => {
    ocultarPantalla.value = true;
}, 3000);
setTimeout(() => {
    displayNone.value = true;
}, 4000);


// Rotación y delay para la animacion
const divs = Array.from({ length: 12 }, (_, i) => ({
  transform: `rotate(${i * 30}deg) translateY(25px)`,
  animationDelay: `${i * (-60)}ms`
}));
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

            <div class="animacion-carga">
                <div v-for="(div, i) in divs" :key="i"
                :style="div" 
                class="bolas-animacion"></div>
            </div>
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


    /* CLASES PARA OCULTAR EL LOADING */
    .ocultar-loading {
        opacity: 0;
        pointer-events: none;
        transition: opacity .8s ease;
    }
    .display-loading {
        display: none;
    }
    
    /* ANIMACIÓN DE CARGA */
    .animacion-carga {
        position: relative;
        margin-top: 40px;
        transform: scaleX(-1);
    }
    .bolas-animacion {
        width: 7px;
        height: 7px;
        background-color: #fff;
        border-radius: 100%;
        position: absolute;
        transform: translateY(25px);
        animation: animacionOpacidad .8s ease infinite;
    }
    @keyframes animacionOpacidad {
        from {
            opacity: 1;
        }
        70%, to {
            opacity: 0;
        }
    }
</style>