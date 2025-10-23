<script setup lang="ts">
import Icono from './utils/Icon.vue';
import DesktopMenu from '../pc/tabs/DesktopMenu.vue';
import WallpapperChange from './tabs/WallpapperChange.vue';
import SelectArea from './utils/SelectArea.vue';
import EmailView from './tabs/EmailView.vue';

import { ref, onMounted, onUnmounted } from 'vue';

// Imágenes iconos
import OversizeLogo from '../../assets/oversize.png'
import Carpeta from '../../assets/carpeta.png'
import _100DayCSS from '../../assets/100DayCSS.png'
import Contacto from '../../assets/contacto.png'
import SobreMi from '../../assets/about.png'
import Certificados from '../../assets/certificados.png'


// Añadimos los iconos al escritorio
const iconosIzquierda = [
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Oversize Studios', imagen: OversizeLogo, url: 'https://alfonsaco.github.io/Oversize/index.html' },
    { texto: '100DayCSS', imagen: _100DayCSS, url: 'https://100dayscss.com/progress/alfonsaco/' },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta },
    { texto: 'Proyecto', imagen: Carpeta }
]

const iconosDerecha = [
    { texto: 'Contacto', imagen: Contacto },
    { texto: 'Sobre mí', imagen: SobreMi },
    { texto: 'Certificaciones', imagen: Certificados },
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
        menuY.value = e.clientY - 212;
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

// Menú de Wallpapper
const mostrarWallpapper = ref(false);

const abrirWallpapper = () => {
    mostrarWallpapper.value = true;
}
const cerrarWallpapper = () => {
    mostrarWallpapper.value = false;
}

// Area de selección
const ratonApretado = ref(false)
const ratonX = ref(0)
const ratonY = ref(0)
const anchura = ref(0)
const altura = ref(0)
const arrastrando = ref(false)
const inicioX = ref(0)
const inicioY = ref(0)

const empezarSeleccion = (e: MouseEvent) => {
    if(e.button !== 0 || menuVisible.value) return;

    arrastrando.value = true;
    ratonApretado.value = true;

    inicioX.value = e.clientX;
    inicioY.value = e.clientY;

    ratonX.value = e.clientX;
    ratonY.value = e.clientY;
    altura.value = 0;
    anchura.value = 0;
}

const duranteSeleccion = (e: MouseEvent) => {
    if (!arrastrando.value) return;

    anchura.value = e.clientX - inicioX.value;
    altura.value = e.clientY - inicioY.value;

    if(anchura.value < 0) {
        ratonX.value = e.clientX;
        anchura.value = Math.abs(anchura.value);

    } else {
        ratonX.value = inicioX.value;
    }

    if(altura.value < 0) {
        ratonY.value = e.clientY;
        altura.value = Math.abs(altura.value);

    } else {
        ratonY.value = inicioY.value;
    }
}

const terminarSeccion = () => {
    if (!arrastrando.value) return;

    arrastrando.value = false;

    // Lo ocultamos tras un poco
    setTimeout(() => {
        ratonApretado.value = false;
    }, 100);
}

onMounted(() => {
    document.addEventListener('mousedown', empezarSeleccion);
    document.addEventListener('mousemove', duranteSeleccion);
    document.addEventListener('mouseup', terminarSeccion);
});
onUnmounted(() => {
    document.removeEventListener('mousedown', empezarSeleccion);
    document.removeEventListener('mousemove', duranteSeleccion);
    document.removeEventListener('mouseup', terminarSeccion);
});
</script>


<template>
    <DesktopMenu :x="menuX" :y="menuY" v-if="menuVisible" @cambiarTamanoIcono="actualizarTamano" @abrirWallpapper="abrirWallpapper"></DesktopMenu>

    <WallpapperChange v-if="mostrarWallpapper" @cerrar="cerrarWallpapper" @cambiarFondoPantalla="cambiarFondo" ></WallpapperChange>

    <SelectArea :x="ratonX" :y="ratonY" :width="anchura" :height="altura" :visible="ratonApretado"></SelectArea>

    <EmailView></EmailView>

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
        position: relative;
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
        align-items: start;
    }

    .div-iconos-2 {
        display: grid;
        column-gap: 15px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(8, minmax(50px, 1fr));
        height: 90vh;
        position: absolute;
        right: 30px;
        top: 30px;
        margin-bottom: 100px;
        align-items: start;
        direction: rtl;
    }
</style>