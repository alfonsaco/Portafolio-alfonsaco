<script setup lang="ts">
import IndexMenuIcon from '../utils/IndexMenuIcon.vue';

// Imágenes
import Oversize from '../../../assets/oversize.png'
import _100DayCSS from '../../../assets/100DayCSS.png'
import GitHub from '../../../assets/github.png'
import CodePen from '../../../assets/codepen.png'
import LinkedIn from '../../../assets/linkedin.png'

const datosBase = [
  { texto: '100DayCSS', imagen: _100DayCSS, url: 'https://100dayscss.com/progress/alfonsaco/' },
  { texto: 'CodePen', imagen: CodePen },
  { texto: 'GitHub', imagen: GitHub },
  { texto: 'LinkedIn', imagen: LinkedIn },
  { texto: 'Contacto', imagen: Oversize },
  { texto: 'Oversize Studio', imagen: Oversize },
  { texto: 'GitHub', imagen: GitHub },
  { texto: 'LinkedIn', imagen: LinkedIn },
  { texto: 'Oversize Studio', imagen: Oversize },
  { texto: 'GitHub', imagen: GitHub },
  { texto: 'LinkedIn', imagen: LinkedIn },
  { texto: 'Oversize Studio', imagen: Oversize },
];
// Para poner el delay a la animación
const delayBase = 60;
const delaySuma = 20;

const aplicacionesDelay = datosBase.map((app, i) => ({
    ...app,
    estilo: `animation-delay: ${delayBase + i * delaySuma}ms`
}));

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
    <div class="div-menu-index" :class="visible ? 'menu-visible' : 'menu-hidden'">
        <IndexMenuIcon v-for="(aplicacion, i) in aplicacionesDelay" 
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
        z-index: 100;
    }

    .menu-visible {
        transform: translateY(0%);
    }
    .menu-hidden {
        transform: translateY(110%);   
        transition: .4s ease;
    }
</style>