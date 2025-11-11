<script setup lang="ts">
import App from '../models/Aplication.vue';
import ProjectCRM from '../windows/ProjectCRM.vue';
import ProjectCodezen from '../windows/ProjectCodezen.vue';
import ProjectFlappy from '../windows/ProjectFlappy.vue';

import { usarIconos } from '../../../data/UseIcons';
const { iconosProyectos } = usarIconos();
import { ref } from 'vue';

const emit = defineEmits(['abrir-ventana']);
const abierta = ref(false);

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

    abierta.value = false;
}

const abrirCarpeta = () => {
    abierta.value = true;
}
const cerrarCarpeta = () => {
    abierta.value = false;
}
</script>


<template>
    <!-- Icono visible en el escritorio -->
    <div class="icono-carpeta-movil" @click="abrirCarpeta">
        <img src="../../../assets/images/carpeta.png" alt="Carpeta" />
        <p>Proyectos</p>
    </div>

    <!-- Fondo oscuro fijo -->
    <div v-if="abierta" class="overlay-movil" @click.self="cerrarCarpeta">

        <!-- Aplica fade SOLO a la carpeta -->
        <transition name="fade">
            <div v-show="abierta" class="carpeta-movil-contenedor">
                <div class="div-aplicaciones-movil">
                <App
                    v-for="(aplicacion, i) in iconosProyectos"
                    :key="i"
                    :texto="aplicacion.texto"
                    :imagen="aplicacion.imagen"
                    @click="abrirApp(aplicacion)"
                />
                </div>
            </div>
        </transition>
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
        transform-origin: center center;
        animation: mostrarCarpeta .2s ease;
        outline: none;
        -webkit-tap-highlight-color: transparent;
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


    /* INACTIVA */
    .icono-carpeta-movil {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        user-select: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
    .icono-carpeta-movil img {
        width: 55px;
        height: 55px;
    }
    .icono-carpeta-movil p {
        font-size: .8em;
        margin-top: 5px;
        color: #fff;
        font-family: Arial, sans-serif;
    }

    /* ACTIVA */
    .overlay-movil {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 500;
    }

    /* ANIMACIONES */
    @keyframes mostrarCarpeta {
        from {
            transform: scale(0.1) translate(-100%, 100%);
            opacity: 0;
        }
        to {
            transform: scale(1) translate(-50%, -50%);
            opacity: 1;
        }
    }
</style>