<script setup lang="ts">
import Icono from './Icono.vue';
import DesktopMenu from './DesktopMenu.vue';
import { ref, onMounted, onUnmounted } from 'vue';

// Imágenes iconos
import OversizeLogo from '../../assets/oversize.png'
import Carpeta from '../../assets/carpeta.png'

// Añadimos los iconos al escritorio
const iconosIzquierda = [
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Oversize', imagen: OversizeLogo, url: 'https://alfonsaco.github.io/Oversize/index.html' },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
]

const iconosDerecha = [
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
]

// Designamos las coordenadas del menú del escritorio al hacer Click Dcho
const menuX = ref(0);
const menuY = ref(0);
const menuVisible = ref(false);

const mostrarMenu = (e: MouseEvent) => {
    // Cambiamos dirección para que no salga de la pantalla
    if(e.clientX > window.innerWidth - 230) {
        menuX.value = e.clientX - 200;
    } else {
        menuX.value = e.clientX;
    }

    if(e.clientY < 305) {
        menuY.value = e.clientY + 5;
    } else {
        menuY.value = e.clientY - 300;
    }
    
    menuVisible.value = true;
}

const ocultarMenu = () => {
    menuVisible.value = false;
}
onMounted(() => {
  window.addEventListener('click', ocultarMenu);
});
onUnmounted(() => {
  window.removeEventListener('click', ocultarMenu);
});

// Tamaño iconos
const tamanoIcono = ref('mediano');

const actualizarTamano  = (nuevoTamano: string) => {
    tamanoIcono.value = nuevoTamano as 'pequeno' | 'mediano' | 'grande';
}

// Función para abrir un icono. Según lo que contenga, te llevará a un enlace o abrirá el proyecto
const abrirIcono = (icono: {texto: string, imagen: string, url?: string }) => {
    if(icono.url) {
        window.open(icono.url, '_blank');

    } else {

    }
}
</script>


<template>
    <DesktopMenu :x="menuX" :y="menuY" v-if="menuVisible" @cambiarTamanoIcono="actualizarTamano"></DesktopMenu>

    <div class="escritorio" @auxclick="mostrarMenu">
        <div class="div-iconos">
            <Icono v-for="(icono, i) in iconosIzquierda" :key="i" :texto="icono.texto" :tamano="tamanoIcono" :imagen="icono.imagen" @dblclick="abrirIcono(icono)"/>
        </div>

        <div class="div-iconos-2" >
            <Icono v-for="(icono, i) in iconosDerecha" :key="i" :texto="icono.texto" :tamano="tamanoIcono" :imagen="icono.imagen" />
        </div>
    </div>
</template>


<style> 
    .escritorio {
        height: calc(100% - 50px);
    }

    .div-iconos {
        display: grid;
        column-gap: 15px;
        grid-template-columns: repeat(2, minmax(50px, 1fr));
        grid-template-rows: repeat(8, minmax(50px, 1fr));
        height: 90vh;
        position: absolute;
        left: 30px;
        top: 30px;
        margin-bottom: 100px;
    }

    .div-iconos-2 {
        display: grid;
        column-gap: 15px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, minmax(50px, 1fr));
        height: 100%;
        position: absolute;
        right: 30px;
        top: 30px;
        margin-bottom: 100px;
    }
</style>