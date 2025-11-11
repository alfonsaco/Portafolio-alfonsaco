<script setup lang="ts">
import TaskBar from '../components/mobile/TaskBarMobile.vue';
import AppSection from '../components/mobile/AppSection.vue';
import { ref } from 'vue';
import ToolBarMobile from '../components/mobile/ToolBarMobile.vue';
import BottomSheet from '../components/mobile/windows/BottomSheet.vue';

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
    <BottomSheet 
        :componente="componenteActual"
        @cerrar="cerrarVentana"
        :visible="ventanaVisible"></BottomSheet>

    <ToolBarMobile></ToolBarMobile>
    <AppSection @abrir-ventana="abrirVentana"></AppSection>
    <TaskBar></TaskBar>
</template>


<style>

</style>