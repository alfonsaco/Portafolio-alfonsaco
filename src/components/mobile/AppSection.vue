<script setup lang="ts">
import App from './App.vue';

// Iconos Apps
import OversizeLogo from '../../assets/oversize.png';
import Instagram from '../../assets/instagram.png';
import _100DayCSS from '../../assets/100DayCSS.png'
import { url } from 'inspector';

const apps = [
    { texto: 'Instagram', imagen: Instagram },
    { texto: 'Instagram', imagen: Instagram },
    { texto: 'Instagram', imagen: Instagram },
    { texto: 'Oversize Studios', imagen: OversizeLogo, url: 'https://alfonsaco.github.io/Oversize/index.html' },
    { texto: '100DayCSS', imagen: _100DayCSS, url: 'https://codepen.io/alfonsaco' },
    { texto: 'Instagram', imagen: Instagram },
    { texto: 'Instagram', imagen: Instagram },
]

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
            <App v-for="(aplicacion, i) in apps" :key="i" :texto="aplicacion.texto" :imagen="aplicacion.imagen" @click="abrirApp(aplicacion)" />
        </div>
    </div>
</template>


<style>
    .contenedor {
        width: 100%;
        height: calc(100% - 105px);
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