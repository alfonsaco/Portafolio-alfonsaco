<script setup lang="ts">
import ParfumsLogo from '../../../assets/images/parfums_logo.png'
import Strong from '../../../assets/images/stronger.webm'
import Azzaro from '../../../assets/images/azzaro.webm'
import Phatnom from '../../../assets/images/phantom.webm'
import LinksMobile from './items/LinksMobile.vue'

// idiomas
import { useI18n } from 'vue-i18n'; 
const { t } = useI18n();

const github = "https://github.com/alfonsaco/Flappy-Parfums";
const descarga = "https://github.com/alfonsaco/Flappy-Parfums/releases/tag/1.0.0";
</script>


<template>
    <div class="proyecto-flappy-contenedor">
        <div class="proyecto-flappy-div-principal">
            <img :src="ParfumsLogo" alt="Logo Flappy Parfums" class="logo-flappy logo-flappy-movil">
            <div class="flappy-juego flappy-juego-movil">
                <div v-html="t('flappy-descripcion')"></div>
            </div>

            <h4>skins</h4>
            <div class="flappy-div-colonias">
                <video :src="Phatnom" autoplay loop muted playsinline />
                <video :src="Azzaro" autoplay loop muted playsinline />
                <video :src="Strong" autoplay loop muted playsinline />
            </div>

            <h4>{{ t('tecnologias-h4').toLowerCase() }}</h4>
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

            <h4>{{ t('enlaces-h4').toLowerCase() }}</h4>
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