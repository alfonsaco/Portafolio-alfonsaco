<script setup lang="ts">
import { Image } from 'lucide-vue-next';

import Fondo1 from '/fondo_movil.webp';
import Fondo2 from '/saul.webp';
import Fondo3 from '/twin.webp';
import Fondo4 from '/band.webp';
</script>


<template>
    <div class="div-boton-wallpapper">
        <Image style="width: 23px; height: 23px; color: #ccc;"></Image>
    </div>

    <div class="div-cambio-wallpapper">
        <div>
            <img :src="Fondo1" alt="">
            <img :src="Fondo2" alt="">
            <img :src="Fondo3" alt="">
            <img :src="Fondo4" alt="">
        </div>
    </div>
</template>


<style>
    .div-boton-wallpapper {
        width: 70px;
        height: 45px;
        background-color: #222;
        border: 1px solid #999;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 250px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .div-boton-wallpapper:active {
        background-color: #3f3f3f;
    }

    /* SECCIÓN DE IMÁGENES */
    .div-cambio-wallpapper {
        width: min(310px, 90%);
        min-width: 20px;
        height: auto;
        padding: 10px;
        background-color: #222;
        border: 1px solid #999;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 310px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div-cambio-wallpapper > div {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 10px;
        overflow-y: hidden;
        overflow-x: auto;
        scrollbar-width: 3px;
        padding-bottom: 5px;
    }
    .div-cambio-wallpapper > div::-webkit-scrollbar {
        height: 3px;
    }
    .div-cambio-wallpapper > div::-webkit-scrollbar-track {
        background: transparent; 
    }
    .div-cambio-wallpapper > div::-webkit-scrollbar-thumb {
        background-color: #6b6b6b; 
        border-radius: 0px;   
    }
    .div-cambio-wallpapper > div::-webkit-scrollbar-thumb:hover {
    background-color: #aaa; 
    }
    
    .div-cambio-wallpapper div img {
        height: 100px;
        width: 60px;
        border-radius: 3px;
        border: 1px solid #999;
    }
</style>