<script setup lang="ts">
import { usarIconos } from '../../../data/UseIcons';
import Icono from '../models/SearchIcon.vue'

const { todosLosIconos } = usarIconos();
</script>

<template>
    <div class="div-ventana-buscador">
        <div class="div-aplicaciones-buscador">
            <Icono v-for="(aplicacion, i) in todosLosIconos" 
            :key="i" :texto="aplicacion.texto" :imagen="aplicacion.imagen"></Icono>
        </div>
        <div></div>
    </div>
</template>


<style>
    /* NOTA PERSONAL: sumar los pixeles de cada icono de la taskbar */
    .div-ventana-buscador {
        width: 600px;
        height: 500px;
        position: absolute;
        background-color: #222;
        bottom: 49px;
        left: 50%;
        transform: translateX(calc(-50% - (3 * 20px)));
        border: 1px solid #999;
        border-radius: 5px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        overflow: hidden;
        visibility: visible;
    }

    /* SECCIÓN APLICACIONES BUSCADAS */
    .div-aplicaciones-buscador {
        height: 100%;
        width: 40%;
        border-right: 1px solid #999;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }


    .div-ventana-buscador > div:last-child {
        height: 100%;
        width: 60%;
    }
</style>