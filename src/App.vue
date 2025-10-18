<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

import PC from './views/PC.vue';
import Mobile from './views/Mobile.vue';

// Dimensión para dispositivos móviles
const esMovil = ref(window.innerWidth < 768) ;

const manejarCambioResolucion = () => {
  esMovil.value = window.innerWidth < 768;
}

onMounted(() => {
  manejarCambioResolucion();
  window.addEventListener('resize', manejarCambioResolucion);
});
onUnmounted(() => {
  manejarCambioResolucion();
  window.removeEventListener('resize', manejarCambioResolucion);
});

const fondoPantalla = computed(() => (esMovil.value ? 'fondo-movil' : 'fondo-pc'));
</script>

<template>
  <!--Dimensiones PC y móvil-->
  <div :class="fondoPantalla" class="contenedor">
    <component :is="esMovil ? Mobile : PC"></component>
  </div>
</template>

<style scoped>
  .contenedor {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  .fondo-movil {
    background-image: url('/movil_fondo.jpg');
  }
  .fondo-pc {
    background-image: url('/pc_fondo.jpg');
  }
</style>
