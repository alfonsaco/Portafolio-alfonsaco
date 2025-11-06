<script setup lang="ts">
import App from '../models/Aplication.vue';

import { usarIconos } from '../../../data/UseIcons';
const { iconosProyectos } = usarIconos();

const abrirApp = (app: { texto: string, imagen: string, url?: string }) => {
    if(app.url) {
        window.open(app.url, '_blank');
    } else {

    }
}
</script>


<template>
    <div class="contenedor-carpeta-difuminado">
        <div class="carpeta-movil-contenedor">
            <h4>Proyectos</h4>
            <!--LISTA DE APLICACIONES-->
            <div class="div-aplicaciones">
                <App v-for="(aplicacion, i) in iconosProyectos" :key="i" :texto="aplicacion.texto" :imagen="aplicacion.imagen" @click="abrirApp(aplicacion)" />
            </div>
        </div>
    </div>
</template>


<style>
    /* EFECTO DIFUMINADO */
    .contenedor-carpeta-difuminado {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        backdrop-filter: blur(5px);
        z-index: 400;
    }

    .carpeta-movil-contenedor {
        width: calc(100vw - 45px);
        height: auto;
        aspect-ratio: 1/1;
        position: absolute;
        background-color: rgba(128, 128, 128, 0.329);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 500;
        border-radius: 20px;
    }


    .carpeta-movil-contenedor h4 {
        font-size: 1.5em;
        margin: 0;
        font-weight: normal;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -40px;
    }

    /* LISTA DE APLICACIONES */ 
    .div-aplicaciones {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        row-gap: 35px;
        column-gap: 50px;
        width: 100%;
        padding: 40px;
    }
</style>