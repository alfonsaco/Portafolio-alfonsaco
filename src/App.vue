<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, provide } from 'vue'

import PC from './views/PC.vue';
import Mobile from './views/Mobile.vue';
import LoadingScreen from './views/PCLoadingScreen.vue';

// Vercel
import { SpeedInsights } from "@vercel/speed-insights/vue"

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
const fondoPC = ref('/pc_fondo.webp');
const fondoMovil = ref('/fondo_movil.webp');

const cambiarFondoMovil = (nuevoFondo: string) => {
  fondoMovil.value = nuevoFondo;
};
const cambiarFondoPC = (nuevoFondo: string) => {
  fondoPC.value = nuevoFondo;
};


provide('cambiarFondoMovil', cambiarFondoMovil);
provide('cambiarFondoPC', cambiarFondoPC);

const fondoPantalla = computed(() => {
  if (esMovil.value) {
    return { backgroundImage: `url(${fondoMovil.value})` };
  } else {
    return { backgroundImage: `url(${fondoPC.value})` };
  }
});

</script>

<template>
  <!-- Dimensiones PC y móvil -->
  <div class="contenedor" :style="fondoPantalla">
    <!-- Pantalla de carga, tanto para móvil como para PC -->
    <LoadingScreen></LoadingScreen>

    <component :is="esMovil ? Mobile : PC"></component>
  </div>

  <SpeedInsights/>
</template>

<style scoped>
  .contenedor {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: url('./assets/flatwedge.cur'), auto;
  }
</style>
