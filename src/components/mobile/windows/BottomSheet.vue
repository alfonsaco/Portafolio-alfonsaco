<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, watch } from 'vue';

const props = defineProps<{
    componente?: any
    visible: boolean
}>();


// Para cerrar la ventana
const emit = defineEmits(['cerrar']);
const ventanaAbierta = ref(false);

watch(() => props.visible, (nuevoValor) => {
    ventanaAbierta.value = nuevoValor;
});

const cerrarVentana = () => {
    ventanaAbierta.value = false;
    emit('cerrar');
}
</script>


<template>
    <div class="bottomsheet-contenedor" 
    :class="ventanaAbierta ? 'ventana-movil-visible' : ''">
        <X class="bottomsheet-icono" @click="cerrarVentana"></X>

        <component 
        :is="props.componente"
        v-if="props.componente"></component>
    </div>
</template>


<style>
    .bottomsheet-contenedor {
        background-color: #222;
        width: 100%;
        position: absolute;
        height: 100%;
        z-index: 500;
        padding-top: 40px;
        transform: translateY(100%);
        transition: .4s ease;
        user-select: none;
    }

    .bottomsheet-icono {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #999;
        cursor: pointer;
    }
    .ventana-movil-visible {
        transform: translateY(0%);
    }
</style>