<script setup lang="ts">
import { List, Grid2X2, Home, Download, Images, File, Monitor, Music, Film, Folder } from 'lucide-vue-next';
import { usarIconos } from '../../../data/UseIcons';
import { computed } from 'vue';
import Archivo from '../../pc/models/FolderFile1.vue';

const props = defineProps<{
    tipoArchivo: string
    onMostrarFlappy?: () => void
    onMostrarCRM?: () => void
    onMostrarCodezen?: () => void
}>();

const iconos = usarIconos();

const archivos = computed(() => {
    if (props.tipoArchivo === 'proyectos') {
        return iconos.iconosProyectos.value;
    }
  
    return [];
});

// Función para abrir un icono. Según lo que contenga, te llevará a un enlace o abrirá el proyecto
const abrirIcono = (icono: {texto: string, imagen: string, url?: string, action?: string }) => {
    if(icono.url) {
        window.open(icono.url, '_blank');

    } else {
        if(icono.action === 'flappy' && props.onMostrarFlappy) {
            props.onMostrarFlappy();
        } else if(icono.action === 'crm' && props.onMostrarCRM) {
            props.onMostrarCRM();
        } else if(icono.action === 'codezen' && props.onMostrarCodezen) {
            props.onMostrarCodezen();
        }
    }
}
</script>


<template>
    <div class="div-carpeta">
        <div class="ventana-carpeta-header">
            <div>
                <List class="disposicion-iconos"></List>
            </div>
            <div>
                <Grid2X2 class="disposicion-iconos"></Grid2X2>
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
            <div>
                <div class="carpeta-grid">
                    <Archivo v-for="(archivo, i) in archivos" :key="i" 
                    :imagen="archivo.imagen" 
                    :texto="archivo.texto"
                    @dblclick="abrirIcono(archivo)"/>
                </div>
            </div>
        </div>
        <div class="ventana-carpeta-elementos">{{ archivos.length }} elementos</div>
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
        width: 100%;
        display: flex;
        gap: 3px;
        border-bottom: 1px solid #999;
        justify-content: right;
        padding: 4px;
        padding-right: 8px;
    }
    .ventana-carpeta-header > div {
        background-color: transparent;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        cursor: pointer;
        border: 1px solid transparent;
    }
    .ventana-carpeta-header > div:hover {
        background-color: #9ab2ff41;
        border-color: #9ab2ff5e;
    }
    .disposicion-iconos {
        color: #5f5f5f;
        width: 20px;
        height: 20px;
    }


    /* SECCIÓN PROYECTOS Y CONTENIDO */
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
        padding: 10px;
    }
    .carpeta-grid {
        width: auto;
        display: grid;
        grid-template-columns: repeat(6, 90px);
        align-items: start;
        justify-content: start;
    }


    /* PARTE BAJA DE LA VENTANA */
    .ventana-carpeta-elementos {
        width: 100%;
        background-color: #FFF;
        border-top: 1px solid #999;
        color: #444;
        text-align: left;
        position: absolute;
        bottom: 0px;
        padding: 2px;
        padding-left: 8px;
        font-size: .9em;
    }
</style>