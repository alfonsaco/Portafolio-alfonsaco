<script setup lang="ts">
import Icono from './models/Icon.vue';
import DesktopMenu from '../pc/tabs/DesktopMenu.vue';
import WallpapperChange from './tabs/WallpapperChange.vue';
import SelectArea from './utils/SelectArea.vue';
import EmailView from './tabs/EmailView.vue';
import Window from '../pc/windows/Window.vue';
import Terminal from './windows/Terminal.vue'
import About from './windows/About.vue';
import Flappy from './windows/ProjectFlappy.vue';
import CRM from './windows/ProjectCRM.vue';
import Carpeta from './windows/Folder.vue';

import { ref, onMounted, onUnmounted, computed, markRaw } from 'vue';

// Obtenemos los iconos del JSON
import { usarIconos } from '../../data/UseIcons'
const { iconosDerecha, iconosIzquierda } = usarIconos();


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
};
const estilosGridIconos = computed(() => {
    if(tamanoIcono.value === 'pequeno') return { columnGap: '15px', rowGap: '5px' };
    if(tamanoIcono.value === 'mediano') return { columnGap: '25px', rowGap: '10px' };
    return { columnGap: '35px', rowGap: '15px' };
});

// Función para abrir un icono. Según lo que contenga, te llevará a un enlace o abrirá el proyecto
const abrirIcono = (icono: {texto: string, imagen: string, url?: string, action?: string }) => {
    if(icono.url) {
        window.open(icono.url, '_blank');

    } else {
        if(icono.action === 'contacto') {   
            manejarMostrarEmail();
        } else if(icono.action === 'sobremi') {
            mostrarSobreMi();
        } else if(icono.action === 'flappy') {
            mostrarFlappy();
        } else if(icono.action === 'crm') {
            mostrarCRM();
        } else if(icono.action === 'carpeta') {
            mostrarCarpeta();
        }
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

    document.addEventListener('mousemove', duranteSeleccion);
    document.addEventListener('mouseup', terminarSeccion);
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

    document.removeEventListener('mousemove', duranteSeleccion);
    document.removeEventListener('mouseup', terminarSeccion);

    // Lo ocultamos tras un poco
    setTimeout(() => {
        ratonApretado.value = false;
    }, 100);
}

const escritorioRef = ref<HTMLElement>();

onMounted(() => {
    if(escritorioRef.value) {
        escritorioRef.value.addEventListener('mousedown', empezarSeleccion);
    }
});
onUnmounted(() => {
     if(escritorioRef.value) {
        escritorioRef.value.removeEventListener('mousedown', empezarSeleccion);
    }
    document.removeEventListener('mousemove', duranteSeleccion);
    document.removeEventListener('mouseup', terminarSeccion);
});


// Mostrar email al pulsar en la opción
const mostrarEmail = ref(false);

const manejarMostrarEmail = () => {
    mostrarEmail.value = true;
}

const cerrarEmail = () => {
    mostrarEmail.value = false;
}


// ---------------- Gestión de ventanas ----------------
interface Ventana {
    id: string;
    titulo: string;
    componente: any;
    visible: boolean;
}

const ventanasAbiertas = ref<Ventana[]>([]);

const abrirVentana = (titulo: string, componente: any) => {
    const id = Date.now().toString();

    // Agrego ventana al array
    ventanasAbiertas.value.push({
        id,
        titulo,
        componente: markRaw(componente),
        visible: true
    });
}

const cerrarVentana = (id: string) => {
    const indice = ventanasAbiertas.value.findIndex(v => v.id === id);
    ventanasAbiertas.value.splice(indice, 1);
}

// Terminal
const mostrarTerminal = () => {
    abrirVentana('Terminal', Terminal);
}

// Sobre mi
const mostrarSobreMi = () => {
    abrirVentana('Sobre Mi', About);
}

// Proyecto flappy
const mostrarFlappy = () => {
    abrirVentana('Flappy Parfums', Flappy);
}

// Proyecto CRM
const mostrarCRM = () => {
    abrirVentana('CRM', CRM);
}

// Carpetas
const mostrarCarpeta = () => {
    abrirVentana('Carpeta', Carpeta);
}

const cambiarFondo = () => { }

// Para usar los métodos en TaskBar
defineExpose({
    manejarMostrarEmail,
    mostrarSobreMi,
    mostrarTerminal,
    mostrarFlappy
});
</script> 


<template>
    <DesktopMenu :x="menuX" :y="menuY" v-if="menuVisible" 
        @cambiarTamanoIcono="actualizarTamano" 
        @abrirWallpapper="abrirWallpapper"
        @mostrarEmail="manejarMostrarEmail"
        @mostrarTerminal="mostrarTerminal"
        @mostrarSobreMi="mostrarSobreMi"></DesktopMenu>

    <Window v-for="ventana in ventanasAbiertas" :key="ventana.id"
        :texto="ventana.titulo" 
        :componente="ventana.componente"
        :visible="ventana.visible"
        @cerrarVentana="cerrarVentana(ventana.id)"></Window>

    <WallpapperChange v-if="mostrarWallpapper" 
        @cerrar="cerrarWallpapper" 
        @cambiarFondoPantalla="cambiarFondo"></WallpapperChange>

    <SelectArea :x="ratonX" :y="ratonY" 
        :width="anchura" :height="altura" 
        :visible="ratonApretado"></SelectArea>

    <EmailView :mostrarEmail="mostrarEmail" @cerrar="cerrarEmail"></EmailView>

    <div class="escritorio" @auxclick="mostrarMenu" ref="escritorioRef">
        <div class="div-iconos" :style="estilosGridIconos">
            <Icono v-for="(icono, i) in iconosIzquierda" :key="i" :texto="icono.texto" :tamano="tamanoIcono" :imagen="icono.imagen" @dblclick="abrirIcono(icono)"/>
        </div>

        <div class="div-iconos-2" :style="estilosGridIconos" >
            <Icono v-for="(icono, i) in iconosDerecha" :key="i" :texto="icono.texto" :tamano="tamanoIcono" :imagen="icono.imagen" @dblclick="abrirIcono(icono)" />
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
        grid-template-rows: repeat(3, minmax(50px, 1fr));
        height: auto;
        position: absolute;
        left: 30px;
        top: 30px;
        align-items: start;
    }

    .div-iconos-2 {
        display: grid;
        column-gap: 15px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, minmax(50px, 1fr));
        height: auto;
        position: absolute;
        right: 30px;
        top: 30px;
        align-items: start;
        direction: rtl;
    }
</style>