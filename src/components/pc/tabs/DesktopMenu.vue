<script setup lang="ts">
import { Table, ChevronRight, Wallpaper, RefreshCcw, Terminal, User, Contact } from 'lucide-vue-next';
import { defineEmits } from 'vue';

const props = defineProps<{
    x: number
    y: number
}>();

// Cambiar tamaño de los iconos del escritorio
const emit = defineEmits(['cambiarTamanoIcono', 'abrirWallpapper', 'mostrarEmail']);

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
</script>

<template>
    <div class="contenedor-menu" :style="{top: props.y + 'px', left: props.x + 'px'}" >
        <div class="div-ver">
            <Table class="iconos-menu"></Table>
            Ver
            <ChevronRight class="iconos-menu flechas-menu"></ChevronRight>

            <!-- Sección del tamaño de los iconos -->
            <div class="menu-vista">
                <div @click="cambiarTamanoIcono('pequeno')">Iconos pequeños</div>
                <div @click="cambiarTamanoIcono('mediano')">Iconos medianos</div>
                <div @click="cambiarTamanoIcono('grande')">Iconos grandes</div>
            </div>
        </div>
        <!-- Actualizar web -->
        <div @click="actualizarWeb">
            <RefreshCcw class="iconos-menu"></RefreshCcw>
            Actualizar
        </div>
        <!-- Terminal -->
        <div>
            <Terminal class="iconos-menu"></Terminal>
            Terminal inútil
        </div>
        <!-- Sobre mi -->
        <div>
            <User class="iconos-menu"></User>
            Sobre mí
        </div>
        <!-- Contacto -->
         <div @click="mostrarEmail">
            <Contact class="iconos-menu"></Contact>
            Contacto
         </div>
        <!-- Cambiar Wallpapper -->
        <div @click="abrirWallpapper" >
            <Wallpaper class="iconos-menu" ></Wallpaper>
            Personalizar
        </div>
    </div>
</template>

<style>
    .contenedor-menu {
        width: 200px;
        background-color: transparent;
        position: absolute;
        border-radius: 5px;
        left: 400px;
        top: 200px;
        user-select: none;
        opacity: 1;
        z-index: 100;
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
    .div-ver:hover {
        border-top-right-radius: 0px;
        outline: 1px solid #999;
    }
    .menu-vista {
        width: 160px;
        height: auto;
        background-color: transparent;
        border: 1px solid #999;
        position: absolute;
        right: -160px;
        top: -1px;
        visibility: hidden;
        border-top-right-radius: 5px;
        overflow: hidden;
        border-bottom-right-radius: 5px;
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
    }
    .menu-vista > div:last-child {
        border-bottom: 0;
    }
    .menu-vista > div:hover {
        background-color: #474747a1;
    }
    .div-ver:hover .menu-vista {
        visibility: visible;
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
