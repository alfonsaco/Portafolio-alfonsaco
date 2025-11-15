<script setup lang="ts">
import { Table, ChevronRight, Wallpaper, RefreshCcw, Terminal, User, Contact } from 'lucide-vue-next';
import { ref } from 'vue';

// Idiomas
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps<{
    x: number
    y: number
}>();

// Cambiar tamaño de los iconos del escritorio
const emit = defineEmits(['cambiarTamanoIcono', 'abrirWallpapper', 'mostrarEmail', 'mostrarTerminal', 'mostrarSobreMi']);

const cambiarTamanoIcono = (tam: string) => {
    emit('cambiarTamanoIcono', tam);
}

const abrirWallpapper = () => {
    emit('abrirWallpapper');
}

const actualizarWeb = ()  => {
    window.location.reload();
}

const mostrarEmail = () => {
    emit('mostrarEmail');
}

// Funciones para mostrar la terminal
const mostrarTerminal = () => {
    emit('mostrarTerminal');
}

// Mostrar sobre mi
const mostrarSobreMi = () => {
    emit('mostrarSobreMi');
}

// Mostrar opciones pequeñas
const mostrarOpciones = ref(false);

const opcionesVisible = () => {
    mostrarOpciones.value = true;
}
const opcionesInvisible = () => {
    mostrarOpciones.value = false;
}
</script>

<template>
    <div class="contenedor-general-menu" :style="{top: props.y + 'px', left: props.x + 'px'}">
        <div class="contenedor-menu"  >
            <div class="div-ver" 
            @mouseenter="opcionesVisible" 
            @mouseleave="opcionesInvisible"
            :class="mostrarOpciones ? 'clase-opciones-borde-izquierdo' : ''">
                <Table class="iconos-menu"></Table>
                {{ t('ver') }}
                <ChevronRight class="iconos-menu flechas-menu"></ChevronRight>
            </div>
            <!-- Actualizar web -->
            <div @click="actualizarWeb">
                <RefreshCcw class="iconos-menu"></RefreshCcw>
                {{ t('actualizar') }}
            </div>
            <!-- Terminal -->
            <div @click="mostrarTerminal">
                <Terminal class="iconos-menu"></Terminal>
                Terminal
            </div>
            <!-- Sobre mi -->
            <div @click="mostrarSobreMi">
                <User class="iconos-menu"></User>
                {{ t('menu-sobremi') }}
            </div>
            <!-- Contacto -->
            <div @click="mostrarEmail">
                <Contact class="iconos-menu"></Contact>
                {{ t('menu-contacto') }}
            </div>
            <!-- Cambiar Wallpapper -->
            <div @click="abrirWallpapper" >
                <Wallpaper class="iconos-menu" ></Wallpaper>
                {{ t('personalizar') }}
            </div>
        </div>

        <!-- Sección del tamaño de los iconos -->
        <div class="menu-vista" 
        :class="mostrarOpciones ? 'clase-mostrar-opciones-ver' : ''"
        @mouseenter="opcionesVisible"
        @mouseleave="opcionesInvisible"> 
            <div @click="cambiarTamanoIcono('pequeno')">{{ t('i-pequeno') }}</div>
            <div @click="cambiarTamanoIcono('mediano')">{{ t('i-medio') }}</div>
            <div @click="cambiarTamanoIcono('grande')">{{ t('i-grande') }}</div>
        </div>
    </div>
</template>

<style>
    .contenedor-general-menu {
        position: absolute;
        left: 400px;
        top: 200px;
        opacity: 1;
        user-select: none;
        z-index: 400;
    }
    .contenedor-menu {
        width: 200px;
        background-color: transparent;
        position: absolute;
        border-radius: 5px;
        border: 1px solid #999;
    }

    .contenedor-menu > div {
        background-color: #222222c5;
        backdrop-filter: blur(8px);
        border-bottom: 1px solid #999;
        color: #ffffff;
        font-size: .85em;
        width: 100%;
        height: 35px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 10px;
        gap: 10px;
        position: relative;
    }
    .contenedor-menu > div:last-child {
        border-bottom: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .contenedor-menu > div:hover {
        background-color: #474747a1;
    }

    /* MENÚ DE VISTA */
    .div-ver {
        position: relative;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .menu-vista {
        width: 160px;
        height: auto;
        background-color: transparent;
        border: 1px solid #999;
        position: absolute;
        left: 199px;
        top: 0px;
        visibility: hidden;
        border-top-right-radius: 5px;
        overflow: hidden;
        border-bottom-right-radius: 5px;
        font-size: .85em;
    }
    .menu-vista > div {
        background-color: #222222c5;
        backdrop-filter: blur(8px);
        border-bottom: 1px solid #999;
        text-align: left;
        height: 35px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        cursor: pointer;
    }
    .menu-vista > div:last-child {
        border-bottom: 0;
    }
    .menu-vista > div:hover {
        background-color: #474747a1;
    }

    /* CLASES RARAR PARA QUE POR FIN SALGA EL BACKDROP FILTER EN EL .MENU-VISTA */
    .clase-mostrar-opciones-ver {
        visibility: visible;
    }
    .clase-opciones-borde-izquierdo {
        border-top-right-radius: 0px;
        outline: 1px solid #999;
    }

    /* ICONOS DEL MENÚ */
    .iconos-menu {
        color: #ffffff;
        width: 17px;
    }
    .flechas-menu {
        position: absolute;
        right: 10px;
    }
</style>
