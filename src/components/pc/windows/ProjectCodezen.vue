<script setup lang="ts">
import Links from './items/ProjectLinks.vue';
import Fondo from '../../../assets/images/auth_fondo.webp';
import Logo from '../../../assets/images/codezen-logo.webp';

const descarga = "https://github.com/alfonsaco/CodeZen/releases/tag/1.0.1";
const github = "https://github.com/alfonsaco/CodeZen";
</script>


<template>
    <div class="proyecto-codezen-contenedor">
        <div class="div-codezen">
            <img :src="Fondo" alt="Imagen fondo" class="codezen-fondo">
            <img :src="Logo" alt="Logo CodeZen" class="codezen-logo">

            <h4>DESCRIPCIÓN</h4>
            <p><em>CodeZen</em> es una aplicación móvil diseñada para programadores que busca mejorar su 
            productividad, bienestar y hábitos diarios. Integra herramientas de seguimiento
            de hábitos, gestión de proyectos, meditación y un sistema de logros que motiva 
            el crecimiento personal y profesional de los desarrolladores.</p>

            <h4>TECNOLOGÍAS UTILIZADAS</h4>
            <div class="codezen-div-tecnologias">
                <div>
                    <p class="codezen-tecnologia-p">Android Studio</p>
                    <p class="codezen-tecnologia-p">Java</p>
                    <p class="codezen-tecnologia-p">XLM</p>
                    <p class="codezen-tecnologia-p">Git</p>
                    <p class="codezen-tecnologia-p">GitHub</p>
                </div>
                <div>
                    <p class="codezen-tecnologia-p">Adobe Photoshop</p>
                    <p class="codezen-tecnologia-p">Firebase</p>
                    <p class="codezen-tecnologia-p">Firestore</p>
                    <p class="codezen-tecnologia-p">JSON</p>
                </div>
            </div>

            <h4>ENLACES</h4>
            <Links :url-descarga="descarga" :url-github="github"/>
        </div>
    </div>
</template>


<style>
    .proyecto-codezen-contenedor {
        width: 100%;
        height: 100%;
        background-color: #3d3d3d;
        display: flex;
        justify-content: center;
    }
    .div-codezen {
        height: 100%;
        width: 700px;
        background-color: #eeeeee;
        padding: 150px 30px 55px 30px;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
    }
    .div-codezen::-webkit-scrollbar {
        width: 5px;
    }
    .div-codezen::-webkit-scrollbar-track {
        background: transparent; 
    }
    .div-codezen::-webkit-scrollbar-thumb {
        background-color: #acacac; 
        border-radius: 0px;  
        cursor: pointer; 
    }
    

    /* ESTILOS GENERALES */
    .proyecto-codezen-contenedor * {
        margin: 0;
        font-family: 'Poppins';
        color: #005b63;
    }
    .proyecto-codezen-contenedor p {
        text-align: justify;
        color: #2b9ea8;
    }
    .proyecto-codezen-contenedor em {
        font-family: 'Poppins Bold';
    }
    .proyecto-codezen-contenedor h4 {
        margin: 40px 0px 10px 0px;
        font-family: 'Poppins Bold';
        font-size: 1.2em;
    }


    /* PARTE SUPERIOR */
    .codezen-fondo {
        width: 700px;
        transform: scaleY(-1);
        position: absolute;
        left: 0;
        top: -350px;
    }
    .codezen-logo {
        position: absolute;
        width: 400px;
        top: 100px;
        transform: translateX(-50%);
    }

     /* DIV DE TECNOLOGÍAS */
    .codezen-div-tecnologias {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
    }
    .codezen-div-tecnologias > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
    .codezen-tecnologia-p {
        color: #ffffff !important;
        padding: 4px 18px;
        font-weight: 500;
        border-radius: 50px;
        background-color: #005b6381;
        border: 1px solid #005A63;
        cursor: pointer;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: .2s ease;
    }
    .codezen-tecnologia-p:hover {
        background-color: #063a3fa2;
    }
</style>