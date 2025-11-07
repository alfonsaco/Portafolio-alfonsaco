<script setup lang="ts">
import { Image } from 'lucide-vue-next';
import { ref, inject } from 'vue';
import { onClickOutside } from '@vueuse/core';

import Fondo1 from '/fondo_movil.webp';
import Fondo2 from '/saul.webp';
import Fondo3 from '/twin.webp';
import Fondo4 from '/band.webp';

// Función para mostrar o no el menú
const ventanaVisible = ref(false);

const mostrarWallpaper = () => {
    ventanaVisible.value = !ventanaVisible.value;
}

const ventanaRef = ref(null);
// Para que no afecte al botón
const botonRef = ref(null);

onClickOutside(ventanaRef ,() => {
    ventanaVisible.value = false;
}, {
    ignore: [botonRef],
});

// Funcion para cambiar la imagen
const cambiarFondo = inject('cambiarFondo') as (fondo: string) => void;

const cambiarFondoPantalla = (ruta: string) => {
    if (cambiarFondo) {
        cambiarFondo(ruta);
    }
}
</script>


<template>
    <div class="div-boton-wallpapper" ref="botonRef"
    @click="mostrarWallpaper">
        <Image style="width: 23px; height: 23px; color: #ccc;"></Image>
    </div>

    <div class="div-cambio-wallpapper" 
    :class="ventanaVisible ? 'ventana-visible-wallpaper' : ''"
    ref="ventanaRef">
        <div>
            <img :src="Fondo1" alt="Fondo predeterminado" @click="cambiarFondoPantalla('/fondo_movil.webp')">
            <img :src="Fondo2" alt="Fondo Better Call Saul" @click="cambiarFondoPantalla('/saul.webp')">
            <img :src="Fondo3" alt="Fondo Twin Peaks" @click="cambiarFondoPantalla('/twin.webp')">
            <img :src="Fondo4" alt="Fondo Band of Brothers" @click="cambiarFondoPantalla('/band.webp')">
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
        transform: translateX(-50%) translateY(550px);
        bottom: 310px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s ease;
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
        border-radius: 4px;
        border: 1px solid #999;
        user-select: none;
        cursor: pointer;
    }

    /* OCULTAR Y MOSTRAR */
    .ventana-visible-wallpaper {
        transform: translateX(-50%) translateY(0px);
        transition: .6s ease;
    }
</style>