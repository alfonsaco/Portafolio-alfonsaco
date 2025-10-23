<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, provide } from 'vue'

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

  // Cambiar menú de Click Derecho, evitamos el de por defecto
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
});

onUnmounted(() => {
  manejarCambioResolucion();
  window.removeEventListener('resize', manejarCambioResolucion);
});

// Fondo personalizado
const fondoActual = ref('/pc_fondo.jpg');

const cambiarFondo = (nuevoFondo: string) => {
  fondoActual.value = nuevoFondo;
}

provide('cambiarFondo', cambiarFondo);

const fondoPantalla = computed(() => {
  if (esMovil.value) {
    return { backgroundImage: 'url(/movil_fondo.jpg)' };
  } else {
    return { backgroundImage: `url(${fondoActual.value})` };
  }
});

</script>

<template>
  <!--Dimensiones PC y móvil-->
  <div class="contenedor" :style="fondoPantalla">
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
    background-repeat: no-repeat;
    cursor: url('./assets/flatwedge.cur'), auto;
  }
</style>
