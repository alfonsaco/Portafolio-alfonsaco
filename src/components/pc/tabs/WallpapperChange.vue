<script setup lang="ts">
import { inject } from 'vue';

const emit = defineEmits(['cerrar']);
const cambiarFondo = inject('cambiarFondo') as (fondo: string) => void;

const cerrar = () => {
    emit('cerrar');
}

const cambiarFondoPantalla = (ruta: string) => {
    if (cambiarFondo) {
        cambiarFondo(ruta);
    }
    cerrar();
}
</script>


<template>
    <div class="capa-cerrar-wallpapper" @click="cerrar">
        <div class="div-cambio-walpapper"  @click.stop >
            <h4>Cambia el fondo de pantalla</h4>
            <div class="div-walpapper-imagenes">
                <div @click="cambiarFondoPantalla('/pc_fondo.webp')"></div>
                <div @click="cambiarFondoPantalla('/got.webp')"></div>
                <div @click="cambiarFondoPantalla('/brba.webp')"></div>
            </div>

        </div>
    </div>
</template>


<style>
    .capa-cerrar-wallpapper {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: transparent;
        z-index: 490;
    }
    .div-cambio-walpapper {
        background-color: #222222c4;
        backdrop-filter: blur(8px);
        width: 500px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #999;
        border-radius: 5px;
        padding:20px;
        z-index: 500;
        box-shadow: 0px 7px 15px #000000b6;
    }

    /* TEXTO */
    .div-cambio-walpapper > h4 {
        margin: 0;
        font-weight: lighter;
        text-align: left;
        margin-bottom: 10px;
        font-size: 1.1em;
        color: #d1d1d1;
        user-select: none;
    }

    /* IMÁGENES DE FONDO DE PANTALLA */
    .div-walpapper-imagenes {
        display: flex;
        gap: 10px;
    }
    .div-walpapper-imagenes > div {
        background-color: #ffffff5e;
        width: 100%;
        height: 110px;
        border-radius: 5px;
        background-size: cover;
        background-position: center;
        border: 1px solid #222;
        cursor: pointer;
    }
    .div-walpapper-imagenes > div:hover {
        border: 1px solid #999;
    }
    
    /* IMÁGENES */
    .div-walpapper-imagenes > div:first-child {
        background-image: url(/pc_fondo.webp);
    }
    .div-walpapper-imagenes > div:nth-child(2) {
        background-image: url(/got.webp);
    }
    .div-walpapper-imagenes > div:last-child {
        background-image: url(/brba.webp);
    }
</style>