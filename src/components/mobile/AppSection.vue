<script setup lang="ts">
import App from './models/Aplication.vue';
import Carpeta from './tabs/AppFolder.vue';
import WidgetHora from './tabs/WidgetTime.vue';
import WallpapperButton from './tabs/WallpapperButton.vue';
import About from './windows/About.vue';

import { usarIconos } from '../../data/UseIcons';
const { iconosDerecha } = usarIconos();

const emit = defineEmits(['abrir-ventana']);

const abrirApp = (app: { texto: string, imagen: string, url?: string, email?: string, action?: string }) => {
    if(app.url) {
        window.open(app.url, '_blank');
    } else if(app.email) {
        window.location.href = app.email;
    } else {
        if(app.action === 'sobremi') {
            emit('abrir-ventana', About);
        }
    }
}
</script>


<template>
    <WidgetHora></WidgetHora>

    <div class="movil-contenedor-aplicaciones" 
        @dblclick="" @touchstart="" @touchend="">

        <!--LISTA DE APLICACIONES-->
        <div class="div-aplicaciones">
            <App v-for="(aplicacion, i) in iconosDerecha" :key="i" 
            :texto="aplicacion.texto" 
            :imagen="aplicacion.imagen" 
            @click="abrirApp(aplicacion)" />

            <Carpeta></Carpeta>
        </div>
    </div>

    <WallpapperButton></WallpapperButton>
</template>


<style>
    .movil-contenedor-aplicaciones {
        width: 100%;
        height: calc(100vh - 60px);
    }

    /* LISTA DE APLICACIONES */ 
    .div-aplicaciones {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        align-items: start;
        row-gap: 35px;
        column-gap: 30px;
        width: 100%;
        padding: 40px;
        position: absolute;
        bottom: 100px;
    }
</style>