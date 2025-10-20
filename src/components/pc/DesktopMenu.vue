<script setup lang="ts">
import { Table, ChevronRight, Wallpaper, RefreshCcw } from 'lucide-vue-next';
import { defineProps } from 'vue';

const props = defineProps<{
    x: number
    y: number
}>();
</script>

<template>
    <div class="contenedor-menu" :style="{top: y + 'px', left: x + 'px'}" >
        <div class="div-ver">
            <Table class="iconos-menu"></Table>
            Ver
            <ChevronRight class="iconos-menu flechas-menu"></ChevronRight>

            <!-- Sección del tamaño de los iconos -->
            <div class="menu-vista">
                <div>Iconos pequeños</div>
                <div>Iconos medianos</div>
                <div>Iconos grandes</div>
            </div>
        </div>
        <div>
            <RefreshCcw class="iconos-menu"></RefreshCcw>
            Actualizar
        </div>
        <div></div>
        <div>
            <Wallpaper></Wallpaper>
            Personalizar
        </div>
    </div>
</template>

<style>
    .contenedor-menu {
        width: 200px;
        height: 300px;
        background-color: rgb(190, 190, 190);
        position: absolute;
        border-radius: 3px;
        left: 400px;
        top: 200px;
        user-select: none;
        opacity: 1;
        z-index: 100;
    }

    .contenedor-menu > div {
        background-color: #FFF;
        border-bottom: 1px solid #292929;
        color: #292929;
        width: 100%;
        height: 35px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 10px;
        gap: 10px;
        position: relative;
    }
    .contenedor-menu > div:hover {
        background-color: #aaaaaa;
    }

    /* ICONOS DEL MENÚ */
    .iconos-menu {
        color: #000;
    }

    .flechas-menu {
        position: absolute;
        right: 10px;
    }

    /* MENÚ DE VISTA */
    .div-ver {
        position: relative;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .menu-vista {
        width: 160px;
        height: auto;
        background-color: #FFF;
        position: absolute;
        right: -160px;
        top: 0;
        opacity: 0;
        border-top-right-radius: 3px;
        overflow: hidden;
        border-bottom-right-radius: 3px;
    }
    .menu-vista > div {
        background-color: #FFF;
        border-bottom: 1px solid #000;
        text-align: left;
        height: 35px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .menu-vista > div:hover {
        background-color: #dbdbdb;
    }
    .div-ver:hover .menu-vista {
        opacity: 1;
    }
</style>
