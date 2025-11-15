<script setup lang="ts">
// idiomas
import { useI18n } from 'vue-i18n'; 
const { t } = useI18n();
</script>


<template>
    <div class="ventana-sobre-mi pc">
        <h1>{{ t('sobremi') }}</h1>
        <p class="texto-about">{{ t('descripcion-sobremi') }}</p>
        <hr>

        <h4>{{ t('conocimientos') }}</h4>
        <h5>{{ t('lenguajes') }}</h5>
        <p>Java • HTML • CSS • JavaScript • TypeScript • SQL • NoSQL</p>
        <h5>{{ t('frameworks') }}</h5>
        <p>Vue • React Native • JavaFX • NodeJS</p>
        <h5>{{ t('entornos') }}</h5>
        <p>Visual Studio • Android Studio • IntelliJ IDEA • GitHub • Firebase</p>

        <h4>{{ t('idiomas') }}</h4>
        <p>{{ t('idioma-1') }} <span>({{ t('idioma-1-1') }})</span> — {{ t('idioma-2') }} <span>(B1)</span></p>

        <hr>

        <h4>{{ t('proyectos-sobremi') }}</h4>
        <p>{{ t('proyectos-p') }}</p>
        <h4>{{ t('experiencia') }}</h4>
        <p>{{ t('experiencia-1') }}</p>
        <p class="ventana-p-borrador">{{ t('experiencia-1-1') }}</p>

        <hr>

        <h4>{{ t('contacto') }}</h4>
        <p class="ventana-corchete">&#123;</p>
        <ul>
            <li><span class="ventana-tag">"GitHub"</span> : <span class="ventana-valor"><a href="https://www.github.com/alfonsaco" target="_blank">"alfonsaco"</a></span>,</li>
            <li><span class="ventana-tag">"LinkedIn"</span> : <span class="ventana-valor"><a href="https://www.linkedin.com/in/alfonsorinconc/" target="_blank">"www.linkedin.com/in/alfonsorinconc/"</a></span>,</li>
            <li><span class="ventana-tag">"Email"</span> : <span class="ventana-valor"><a href="mailto:alfonso.rincondev@gmail.com" target="_blank">"alfonso.rincondev@gmail.com"</a></span>,</li>
        </ul>
        <p class="ventana-corchete">&#125;</p>
    </div>
</template>


<style>
    @font-face {
        font-family: 'Cascadia';
        src: url('../../../assets/fonts/cascadia.woff2') format('woff2'),
             url('../../../assets/fonts/cascadia.woff') format('woff');
        font-display: swap;
    }

    .ventana-sobre-mi {
        padding: 15px 20px;
        width: 100%;
        height: 100%;
        background-color: #282C34;
        text-align: left;
        user-select: text;
        color: #d1d0d0;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
        padding-bottom: 25px;
    }
    .ventana-sobre-mi::-webkit-scrollbar {
        width: 5px;
    }
    .ventana-sobre-mi::-webkit-scrollbar-track {
        background: transparent; 
    }
    .ventana-sobre-mi::-webkit-scrollbar-thumb {
        background-color: #3e5074; 
        border-radius: 0px;  
        cursor: pointer; 
    }
    .ventana-sobre-mi * {
        margin: 0;
        font-family: 'Cascadia', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .ventana-sobre-mi *::selection {
        background-color: #9fb2bf7e;
        color: #F0DC55;
    }

    .ventana-sobre-mi hr {
        margin: 30px 15px 20px 15px;
        border-color: #f0db554f;
    }

    /* TEXTOS */
    .ventana-sobre-mi h1 {
        text-align: center;
        color: #9FB2BF;
        font-size: 2.4em;
        margin-bottom: 6px;
    }
    .texto-about {
        text-align: center;
    }
    .ventana-sobre-mi h4 {
        color: #D18D4E;
        margin-top: 30px;
    }
    .ventana-sobre-mi h5 {
        color: #f0cc55;
        margin-top: 8px;
        font-size: .95em;
    }
    .ventana-sobre-mi span {
        color: #69bbab;
    }
    .ventana-p-borrador {
        color: #a1a1a1;
    }
    .ventana-sobre-mi ul {
        list-style: none;
    }
    .ventana-sobre-mi ul a, .ventana-valor {
        color: #73b758;
    }
    .ventana-tag {
        color: #DE6B74;
    }
    .ventana-corchete {
        color: #B870D6;
    }
</style>