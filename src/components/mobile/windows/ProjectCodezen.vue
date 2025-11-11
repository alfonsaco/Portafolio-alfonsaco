<script setup lang="ts">
import Fondo from '../../../assets/images/auth_fondo.webp';
import Logo from '../../../assets/images/codezen-logo.webp';
import LinksMobile from './items/LinksMobile.vue';

const descarga = "https://github.com/alfonsaco/CodeZen/releases/tag/1.0.1";
const github = "https://github.com/alfonsaco/CodeZen";
</script>


<template>
    <div class="proyecto-codezen-contenedor">
        <div class="div-codezen">
            <img :src="Fondo" alt="Imagen fondo" class="codezen-fondo codezen-fondo-movil">
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
            <LinksMobile :url-github="github" :url-descarga="descarga"></LinksMobile>
        </div>
    </div>
</template>


<style>
    .codezen-fondo-movil {
        top: -390px;
    }
</style>