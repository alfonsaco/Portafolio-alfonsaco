<script lang="ts" setup>
import AIWindow from './AIWindow.vue'
import iconoGitHub from '../../assets/github.png'
import iconoLinkedIn from '../../assets/linkedin.png'
import iconoAlfonOS from '../../assets/alfonOS.png'
import logoIA from '../../assets/ai.png'
import UtilidadesTaskBar from './UtilidadesTaskBar.vue';

import { Search } from 'lucide-vue-next';
import { ref } from 'vue';

// Si está inactiva, se activa y viceversa
const IAactiva = ref(false);
const mostrarOcultarIA = () => {
    IAactiva.value = !IAactiva.value;
}
</script>


<template>
    <AIWindow :activo="IAactiva"></AIWindow>

    <div class="barra-de-tareas">
        <!-- IA -->
        <div class="logo-ia-container" @click="mostrarOcultarIA">
            <img :src="logoIA" alt="Logo IA" class="logo-ia" />
        </div>
        
        <img :src="iconoAlfonOS" alt="Logo SO" class="logo-alfonOS"/>

        <div class="div-buscador">
            <input type="text" class="buscador" placeholder="Búsqueda"></input>
            <Search class="icono-buscar"/>
        </div>

        <!-- Programas de la barra de tareas -->
        <div class="div-programas-taskbar">
            <a href="https://www.github.com" target="_blank" data-programa="Perfil de GitHub">
                <img :src="iconoGitHub" alt="Icono GitHub" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" data-programa="Perfil de LinkedIn">
                <img :src="iconoLinkedIn" alt="Icono inkedIn" />
            </a>
        </div>

        <UtilidadesTaskBar></UtilidadesTaskBar>
    </div>
</template>


<style>
    .barra-de-tareas {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: center;
        width: 100%;
        height: 50px;
        background-color: #222222;
        border-top: 1px solid #999;
        padding: 8px 20px;
        user-select: none;
        position: relative;
    }

    /* LOGO SO */
    .logo-alfonOS{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    /* BUSCADOR */
    .div-buscador {
        display: flex;
        align-items: center;
        position: relative;
        height: 30px;
    }
    .buscador {
        background-color: white;
        height: 100%;
        width: 250px;
        border-radius: 50px;
        color: black;
        border: 0px solid #5e5e5e;
        padding-left: 30px;
        transition: .2s ease;
    }
    .icono-buscar {
        color: rgb(51, 51, 51);
        position: absolute;
        left: 8px;
        width: 17px;
        height: 17px;
        transition: .2s ease;
    }
    .div-buscador:hover .buscador {
        background-color: rgb(226, 226, 226);
    }
    .div-buscador:hover .icono-buscar {
        color: #2161c2;
    }

    /* PROGRAMAS */
    .div-programas-taskbar {
        display: flex;
        gap: 6px;
    }
    .div-programas-taskbar a {
        position: relative;
        display: flex;
    }
    .div-programas-taskbar a > img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: .3s ease;
    }
    .div-programas-taskbar a > img:hover {
        scale: 0.85;
    }

    .div-programas-taskbar a::after {
        content: attr(data-programa);
        color: #FFF;
        font-size: .75em;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
        width: auto;
        height: auto;
        background-color: #313131;
        border-radius: 5px;
        border: 1px solid #1a1a1a;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity .3s ease .1s;
        pointer-events: none;
    }
    .div-programas-taskbar a:hover::after {
        opacity: 1;
        transition-delay: .6s;
    }

     /* CONTENEDOR LOGO IA */
    .logo-ia-container {
        position: absolute;
        left: 20px;
        display: flex;
        align-items: center;
    }

    /* LOGO IA */
    .logo-ia {
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: .3s ease;
    }
    .logo-ia:hover {
        scale: 0.85;
    }
    .logo-ia-container::after {
        content: 'AIfonOS';
        color: #FFF;
        font-size: .75em;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
        width: auto;
        height: auto;
        background-color: #313131;
        border-radius: 5px;
        border: 1px solid #1a1a1a;
        bottom: 50px;
        left: 100%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity .3s ease .1s;
        pointer-events: none;
    }
    .logo-ia-container:hover::after {
        opacity: 1;
        transition-delay: .6s;
    }
</style>