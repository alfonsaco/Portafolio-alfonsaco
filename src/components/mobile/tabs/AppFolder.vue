<script setup lang="ts">
import App from '../models/Aplication.vue';
import ProjectCRM from '../windows/ProjectCRM.vue';
import ProjectCodezen from '../windows/ProjectCodezen.vue';
import ProjectFlappy from '../windows/ProjectFlappy.vue';

import { usarIconos } from '../../../data/UseIcons';
const { iconosProyectos } = usarIconos();

const emit = defineEmits(['abrir-ventana']);

const abrirApp = (app: { texto: string, imagen: string, url?: string, action?: string }) => {
    if(app.url) {
        window.open(app.url, '_blank');
    } else {
        if(app.action === 'flappy') {
            emit('abrir-ventana', ProjectFlappy)
        } else if(app.action === 'crm') {
            emit('abrir-ventana', ProjectCRM)
        } else if(app.action === 'codezen') {
            emit('abrir-ventana', ProjectCodezen)
        }
    }
}
</script>


<template>
    <div class="carpeta-movil-contenedor">
        <h4>Proyectos</h4>
        <!--LISTA DE APLICACIONES-->
        <div class="div-aplicaciones-movil">
            <App v-for="(aplicacion, i) in iconosProyectos" :key="i" 
                :texto="aplicacion.texto" 
                :imagen="aplicacion.imagen" 
                @click="abrirApp(aplicacion)" />
        </div>
    </div>
</template>


<style>
    .carpeta-movil-contenedor {
        width: calc(100vw - 45px);
        height: auto;
        aspect-ratio: 1/1;
        position: fixed;
        background-color: rgba(128, 128, 128, 0.329);
        backdrop-filter: blur(6px);
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
        user-select: none;
    }

    /* LISTA DE APLICACIONES */ 
    .div-aplicaciones-movil {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        row-gap: 35px;
        column-gap: 30px;
        width: 100%;
        padding: 25px;
    }
</style>