<script setup lang="ts">
import { List, Grid2X2, Home, Download, Images, File, Monitor, Music, Film, Folder } from 'lucide-vue-next';

const props = defineProps<{
    cantidad : string
}>();
</script>


<template>
    <div class="div-carpeta">
        <div class="ventana-carpeta-header">
            <div>
                <List class="carpeta-iconos"></List>
            </div>
            <div>
                <Grid2X2 class="carpeta-iconos"></Grid2X2>
            </div>
        </div>
        <div class="ventana-carpeta-contenido">
            <div>
                <div>
                    <Home class="icono-seccion-izquierda" style="color: brown;"></Home>
                    <p>Inicio</p>
                </div>
                <div>
                    <Images class="icono-seccion-izquierda" style="color: #191f91;"></Images>
                    <p>Galería</p>
                </div>
                <hr>
                <div>
                    <Monitor class="icono-seccion-izquierda" style="color: #222;"></Monitor>
                    <p>Escritorio</p>
                </div>
                <div>
                    <File class="icono-seccion-izquierda" style="color: #737373;"></File>
                    <p>Documentos</p>
                </div>
                <div>
                    <Download class="icono-seccion-izquierda" style="color: green;"></Download>
                    <p>Descargas</p>
                </div>
                <div>
                    <Music class="icono-seccion-izquierda" style="color: #2b4fb3;"></Music>
                    <p>Música</p>
                </div>
                <div>
                    <Film class="icono-seccion-izquierda" style="color: #773cd6;"></Film>
                    <p>Videos</p>
                </div>
                <div>
                    <Folder class="icono-seccion-izquierda" style="color: #e0a52f;"></Folder>
                    <p>Proyectos</p>
                </div>
            </div>
            <div></div>
        </div>
        <div class="carpeta-elementos">{{ props.cantidad }} elementos</div>
    </div>
</template>


<style>
    .div-carpeta {
        width: 100%;
        height: 100%;
        background-color: lightcoral;
    }
    
    /* PARTE SUPERIOR DE LA CARPETA */
    .ventana-carpeta-header {
        background-color: #FFF;
        display: flex;
        border-bottom: 1px solid #999;
    }
        .carpeta-iconos {
        color: #222;
    }


    /* SECCIÓN PROYECTOS Y VISUAL */
    .ventana-carpeta-contenido {
        width: 100%;
        height: calc(100% - 50px);
        background-color: #FFF;
        display: flex;
        color: #222;
        
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    /* SECCIÓN IZQUIERDA */
    .ventana-carpeta-contenido > div:first-child {
        width: 150px;
        height: 100%;
        border-right: 1px solid #999;
        font-size: .82em;
        padding: 4px;
        padding-top: 10px;
    }
    .ventana-carpeta-contenido > div:first-child div {
        cursor: pointer;
        text-align: left;
        padding: 5px;
        border-radius: 3px;
        padding-left: 10px;
        display: flex;
        gap: 4px;
    }
    .ventana-carpeta-contenido > div:first-child hr {
        margin-left: 5px;
        margin-right: 5px;
        border: none;
        border-top: 1px solid #999;
    }
    .ventana-carpeta-contenido > div:first-child div:hover {
        background-color: #9ab2ff41;
    }
    .ventana-carpeta-contenido > div:first-child div p {
        margin: 0;
    }
    .icono-seccion-izquierda {
        width: 19px;
        height: 19px;
    }

    /* SECCIÓN DERECHA */
    .ventana-carpeta-contenido > div:last-child {
        width: 100%;
        height: 100%;
    }


    /* PARTE BAJA DE LA VENTANA */
    .carpeta-elementos {
        width: 100%;
        background-color: #FFF;
        border-top: 1px solid #999;
        color: #222;
        text-align: left;
    }



</style>