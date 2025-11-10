<script setup lang="ts">
import TaskBar from '../components/mobile/TaskBarMobile.vue';
import AppSection from '../components/mobile/AppSection.vue';
import { ref } from 'vue';
import ToolBarMobile from '../components/mobile/ToolBarMobile.vue';
import BottomSheet from '../components/mobile/windows/BottomSheet.vue';

const mantenimientoActivo = ref(true);
const cerrar = () => {
    mantenimientoActivo.value = false;
}

// Componente
const componenteActual = ref(null);

// Cerrar al pulsar X
const ventanaVisible = ref(false);

const abrirVentana = (componente: any) => {
    componenteActual.value = componente;
    ventanaVisible.value = true;
}   

const cerrarVentana = () => {
    ventanaVisible.value = false;
}
</script>

<template>
    <div class="mantenimiento" v-if="mantenimientoActivo">
        ⚠️ Esta versión móvil aún se encuentra en desarrollo.
        Algunas funciones podrían no estar disponibles por el momento.
        <div class="cerrar-mantenimiento" @click="cerrar">CERRAR</div>
    </div>

    <BottomSheet 
        :componente="componenteActual"
        @cerrar="cerrarVentana"
        :visible="ventanaVisible"></BottomSheet>

    <ToolBarMobile></ToolBarMobile>
    <AppSection @abrir-ventana="abrirVentana"></AppSection>
    <TaskBar></TaskBar>
</template>


<style>
    .mantenimiento {
        width: 350px;
        height: auto;
        background-color: #e0e0e0;
        border: 1px solid #222;
        color: #222;
        border-radius: 10px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 900;
        font-family: Arial, Helvetica, sans-serif;
        padding: 15px;
    }
    .cerrar-mantenimiento {
        transition: .2s ease;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        color: brown;
        border: 1px solid transparent;
        margin-top: 5px;
    }
    .cerrar-mantenimiento:hover {
        background-color: #ff63632d;
        border: 1px solid rgba(165, 42, 42, 0.322);
    }
</style>