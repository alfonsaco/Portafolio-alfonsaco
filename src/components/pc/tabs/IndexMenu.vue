<script setup lang="ts">
import IndexMenuIcon from '../utils/IndexMenuIcon.vue';

// Imágenes
import Oversize from '../../../assets/oversize.png'
import _100DayCSS from '../../../assets/100DayCSS.png'
import GitHub from '../../../assets/github.png'
import CodePen from '../../../assets/codepen.png'
import LinkedIn from '../../../assets/linkedin.png'

const aplicaciones = [
    { texto: '100DayCSS', imagen: _100DayCSS, url: 'https://100dayscss.com/progress/alfonsaco/' },
    { texto: 'CodePen', imagen: CodePen, estilo: 'animation-delay: 0ms'  },
    { texto: 'GitHub', imagen: GitHub, estilo: 'animation-delay: 30ms'  },
    { texto: 'LinkedIn', imagen: LinkedIn, estilo: 'animation-delay: 60ms'  },
    { texto: 'Oversize Studio', imagen: Oversize, estilo: 'animation-delay: 90ms'  },
    { texto: 'Oversize Studio', imagen: Oversize, estilo: 'animation-delay: 120ms' },
];

const abrirAplicacionIndex = (aplicacion: {texto: string, imagen: string, url?: string }) => {
    if(aplicacion.url) {
        window.open(aplicacion.url, '_blank')
    } else {

    }
}
</script>

<template>
    <div class="div-menu-index">
        <IndexMenuIcon v-for="(aplicacion, i) in aplicaciones" :key="i" :texto="aplicacion.texto" :imagen="aplicacion.imagen" :style="aplicacion.estilo" @click="abrirAplicacionIndex(aplicacion)"></IndexMenuIcon>
    </div>
</template>


<style>
    .div-menu-index {
        position: absolute;
        width: 200px;
        height: auto;
        background-color: #222;
        bottom: 40px;
        border: 1px solid #999;
        z-index: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        overflow: hidden;
    }
</style>