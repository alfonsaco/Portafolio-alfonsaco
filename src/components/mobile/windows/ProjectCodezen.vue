<script setup lang="ts">
import Fondo from '../../../assets/images/auth_fondo.webp';
import Logo from '../../../assets/images/codezen-logo.webp';
import LinksMobile from './items/LinksMobile.vue';

const descarga = "https://github.com/alfonsaco/CodeZen/releases/tag/1.0.1";
const github = "https://github.com/alfonsaco/CodeZen";

// idiomas
import { useI18n } from 'vue-i18n'; 
const { t } = useI18n();
</script>


<template>
    <div class="proyecto-codezen-contenedor">
        <div class="div-codezen">
            <img :src="Fondo" alt="Imagen fondo" class="codezen-fondo codezen-fondo-movil">
            <img :src="Logo" alt="Logo CodeZen" class="codezen-logo codezen-logo-movil">

            <h4>{{ t('descripcion-h4') }}</h4>
            <p><em>CodeZen</em> {{ t('codezen-descripcion') }}</p>

            <h4>{{ t('tecnologias-h4') }}</h4>
            <div class="codezen-div-tecnologias">
                <div>
                    <p class="codezen-tecnologia-p">Android Studio</p>
                    <p class="codezen-tecnologia-p">Java</p>
                    <p class="codezen-tecnologia-p">XLM</p>
                </div>
                <div>
                    <p class="codezen-tecnologia-p">Git</p>
                    <p class="codezen-tecnologia-p">GitHub</p>
                    <p class="codezen-tecnologia-p">Adobe Photoshop</p>
                </div>
                <div>                    
                    <p class="codezen-tecnologia-p">Firebase</p>
                    <p class="codezen-tecnologia-p">Firestore</p>
                    <p class="codezen-tecnologia-p">JSON</p>
                </div>
            </div>

            <h4>{{ t('enlaces-h4') }}</h4>
            <LinksMobile :url-github="github" :url-descarga="descarga"></LinksMobile>
        </div>
    </div>
</template>


<style>
    .codezen-logo-movil {
        max-width: 330px;
        width: calc(100vw - 70px);
        filter: drop-shadow(0px 0px 3px #bfeef1);
    }
    .codezen-fondo-movil {
        top: -390px;
    }
</style>