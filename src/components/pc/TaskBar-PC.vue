<script lang="ts" setup>
import iconoGitHub from '../../assets/github.png'
import iconoLinkedIn from '../../assets/linkedin.png'
import iconoAlfonOS from '../../assets/alfonOS.png'

import { Search } from 'lucide-vue-next';

</script>


<template>
    <div class="barra-de-tareas">
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
        background-color: #222222;
        border-top: 1px solid #999;
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 8px 20px;
        user-select: none;
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
        width: 200px;
        border-radius: 50px;
        color: black;
        border: 1px solid #5e5e5e;
        padding-left: 30px;
    }
    .icono-buscar {
        color: rgb(51, 51, 51);
        position: absolute;
        left: 5px;
        width: 20px;
        height: 20px;
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
        scale: 0.9;
        filter: drop-shadow(0px 0px 4px #FFFFFF50);
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
    }
    .div-programas-taskbar a:hover::after {
        opacity: 1;
        transition-delay: .6s;
    }
</style>