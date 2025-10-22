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
    { texto: 'CodePen', imagen: CodePen, estilo: 'animation-delay: 20ms' },
    { texto: 'GitHub', imagen: GitHub, estilo: 'animation-delay: 40ms' },
    { texto: 'LinkedIn', imagen: LinkedIn, estilo: 'animation-delay: 60ms' },
    { texto: 'Oversize Studio', imagen: Oversize, estilo: 'animation-delay: 80ms' },
    { texto: 'Oversize Studio', imagen: Oversize, estilo: 'animation-delay: 100ms' },
    { texto: 'GitHub', imagen: GitHub, estilo: 'animation-delay: 120ms' },
    { texto: 'LinkedIn', imagen: LinkedIn, estilo: 'animation-delay: 140ms' },
    { texto: 'Oversize Studio', imagen: Oversize, estilo: 'animation-delay: 160ms' },
    { texto: 'GitHub', imagen: GitHub, estilo: 'animation-delay: 180ms' },
    { texto: 'LinkedIn', imagen: LinkedIn, estilo: 'animation-delay: 200ms' },
    { texto: 'Oversize Studio', imagen: Oversize, estilo: 'animation-delay: 220ms' },
];

const abrirAplicacionIndex = (aplicacion: {texto: string, imagen: string, url?: string }) => {
    if(aplicacion.url) {
        window.open(aplicacion.url, '_blank')
    } else {

    }

    emit('cerrar-index');
}

const props = defineProps<{
    visible: boolean
}>();

const emit = defineEmits<{
    (e: 'cerrar-index'): void
}>();
</script>

<template>
    <div class="div-menu-index" :class="{'menu-visible': visible, 'menu-hidden': !visible}">
        <IndexMenuIcon v-for="(aplicacion, i) in aplicaciones" 
        :key="i" 
        :texto="aplicacion.texto" 
        :imagen="aplicacion.imagen" 
        :style="aplicacion.estilo" 
        :activar-animacion="visible"
        @click="abrirAplicacionIndex(aplicacion)"></IndexMenuIcon>
    </div>
</template>


<style>
    .div-menu-index {
        position: absolute;
        width: 200px;
        height: auto;
        background-color: #222;
        bottom: 45px;
        right: 55%;
        border: 1px solid #999;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        overflow: hidden;
        transition: .7s ease;
        transform: translateY(110%); 
        z-index: 10;
    }

    .menu-visible {
        transform: translateY(0%);
    }
    .menu-hidden {
        transform: translateY(110%);   
        transition: .4s ease;
    }
</style>