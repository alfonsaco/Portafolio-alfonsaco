<script lang="ts" setup>
import AIWindow from './tabs/AIWindow.vue'
import IndexMenu from './tabs/IndexMenu.vue'

import iconoGitHub from '../../assets/github.png'
import iconoLinkedIn from '../../assets/linkedin.png'
import iconoAlfonOS from '../../assets/alfonOS.png'
import logoIA from '../../assets/ai.png'
import iconoCodepen from '../../assets/codepen.png'

import UtilidadesTaskBar from './UtilidadesTaskBar.vue';

import { Search } from 'lucide-vue-next';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

// Si está inactiva, se activa y viceversa
const IAactiva = ref(false);
const mostrarOcultarIA = () => {
    IAactiva.value = !IAactiva.value;
}

// Menú de index
const indexActivo = ref(false);
const menuIndexRef = ref(null);

const alternarVisibilidadIndex = () => {
    indexActivo.value = !indexActivo.value;
}

onClickOutside(menuIndexRef, () => {
    indexActivo.value = false;
});
</script>


<template>
    <AIWindow :activo="IAactiva"></AIWindow>
    <IndexMenu :visible="indexActivo" @cerrar-index="indexActivo = false"></IndexMenu>


    <div class="barra-de-tareas">
        <!-- IA -->
        <div class="logo-ia-container" @click="mostrarOcultarIA">
            <img :src="logoIA" alt="Logo IA" class="logo-ia" />
        </div>
        
        <div class="div-central-taskbar">
            <div class="div-logo-alfonOS" @click="alternarVisibilidadIndex" ref="menuIndexRef">
                <img :src="iconoAlfonOS" alt="Logo SO" class="logo-alfonOS"/>       
            </div>

            <div class="div-buscador">
                <input type="text" class="buscador" placeholder="Búsqueda"></input>
                <Search class="icono-buscar"/>
            </div>

            <!-- Programas de la barra de tareas -->
            <div class="div-programas-taskbar">
                <a href="https://www.github.com/alfonsaco" target="_blank" data-programa="Perfil de GitHub">
                    <img :src="iconoGitHub" alt="Icono GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/alfonso-rinc%C3%B3n-cuerva-02a0a42b6/" target="_blank" data-programa="Perfil de LinkedIn">
                    <img :src="iconoLinkedIn" alt="Icono inkedIn" />
                </a>
                <a href="https://codepen.io/alfonsaco" target="_blank" data-programa="Perfil de CodePen">
                    <img :src="iconoCodepen" alt="Icono CodePen" />
                </a>
            </div>
        </div>

        <!-- Fecha, reloj, batería... -->
        <UtilidadesTaskBar></UtilidadesTaskBar>
    </div>
</template>


<style>
    .barra-de-tareas {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        background-color: #222222;
        border-top: 1px solid #999;
        padding: 8px 10px;
        user-select: none;
        position: relative;
        z-index: 500;
    }
    .div-central-taskbar {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
    }

    /* LOGO SO */
    .div-logo-alfonOS {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 38px;
        width: 38px;
        left: calc(-10px - 35px);
        border: 1px solid transparent;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: .1s ease;
        cursor: pointer;
    }
    .logo-alfonOS {
        width: 27px;
        height: 27px;
    }
    .div-logo-alfonOS:hover {
        background-color: #ffffff11;
        border-color: #ffffff15;
    }
    .div-logo-alfonOS::after {
        content: 'Inicio';
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
        bottom: 52px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity .3s ease .1s;
        pointer-events: none;
    }
    .div-logo-alfonOS:hover::after {
        opacity: 1;
        transition-delay: .6s;
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
    .buscador:focus {
        outline: 0px;
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
        scale: 1.3;
        filter: drop-shadow(0px 4px 4px #000000d5);
        transform: translateY(-7px);
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
        left: 10px;
        height: 38px;
        width: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: .15s ease;
        cursor: pointer;
    }
    .logo-ia-container:hover {
        background-color: #bb3ce211;
        box-shadow: 0px 0px 8px #bb3ce256;
        border-color: #ffffff15;
    }

    /* LOGO IA */
    .logo-ia {
        width: 27px;
        height: 27px;
        transition: .3s ease;
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
        bottom: 52px;
        left: 83%;
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