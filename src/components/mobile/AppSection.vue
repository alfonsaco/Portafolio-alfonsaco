<script setup lang="ts">
import App from './models/Aplication.vue';

import { usarIconos } from '../../data/UseIcons';
const { iconosDerecha } = usarIconos();

const abrirApp = (app: { texto: string, imagen: string, url?: string }) => {
    if(app.url) {
        window.open(app.url, '_blank');
    } else {

    }
}
</script>


<template>
    <div class="contenedor">
        <!--LISTA DE APLICACIONES-->
        <div class="div-aplicaciones">
            <App v-for="(aplicacion, i) in iconosDerecha" :key="i" :texto="aplicacion.texto" :imagen="aplicacion.imagen" @click="abrirApp(aplicacion)" />
        </div>
    </div>
</template>


<style>
    .contenedor {
        width: 100%;
        height: calc(100vh - 60px);
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