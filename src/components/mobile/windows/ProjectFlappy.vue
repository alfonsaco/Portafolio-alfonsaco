<script setup lang="ts">
import ParfumsLogo from '../../../assets/images/parfums_logo.png'
import GIFJuego from '../../../assets/images/gif juego.gif'
import Strong from '../../../assets/images/gif_strong.gif'
import Azzaro from '../../../assets/images/git_azzaro.gif'
import Phatnom from '../../../assets/images/gif_phantom.gif'
import LinksMobile from './items/LinksMobile.vue'

const github = "https://github.com/alfonsaco/Flappy-Parfums";
const descarga = "https://github.com/alfonsaco/Flappy-Parfums/releases/tag/1.0.0";
</script>


<template>
    <div class="proyecto-flappy-contenedor">
        <div class="proyecto-flappy-div-principal">
            <img :src="ParfumsLogo" alt="Logo Flappy Parfums" class="logo-flappy logo-flappy-movil">
            <div class="flappy-juego flappy-juego-movil">
                <div>
                    <p><strong>Flappy Parfums</strong> es un juego para Android inspirado en el clásico Flappy Bird, 
                    donde los personajes tradicionales son reemplazados por perfumes icónicos. 
                    Fue desarrollado en equipo utilizando <strong>Android Studio</strong> con <strong>Java</strong>.</p>

                    <p>El jugador debe pulsar la pantalla para mantener en el aire a su perfume y esquivar obstáculos 
                    en forma de tuberías. A medida que aumenta la puntuación, se pueden desbloquear nuevos personajes 
                    como <strong>Phantom</strong>, <strong>Azzaro</strong> o <strong>Stronger</strong>, cada uno con su propia animación.</p>
                </div>
            </div>

            <h4>skins</h4>
            <div class="flappy-div-colonias">
                <img :src="Phatnom" alt="Colonia Phantom">
                <img :src="Azzaro" alt="Colonia Azzaro">
                <img :src="Strong" alt="Colonia Stronger">
            </div>

            <h4>tecnologías utilizadas</h4>
            <div class="flappy-div-tecnologias">
                <div>
                    <p class="flappy-tecnologia-p">Android Studio</p>
                    <p class="flappy-tecnologia-p">Java</p>
                </div>
                <div>
                    <p class="flappy-tecnologia-p">XLM</p>
                    <p class="flappy-tecnologia-p">Git</p>
                </div>
                <div>
                    <p class="flappy-tecnologia-p">GitHub</p>
                    <p class="flappy-tecnologia-p">Adobe Photoshop</p>
                </div>
            </div>

            <h4>enlaces</h4>
            <LinksMobile :url-descarga="descarga" :url-github="github"></LinksMobile>
        </div>
    </div>
</template>


<style>
    .logo-flappy-movil {
        max-width: 350px;
        width: calc(100vw - 50px);
    }
    .flappy-juego-movil > div {
        max-width: 400px;
        width: calc(100vw - 70px);
    }
</style>