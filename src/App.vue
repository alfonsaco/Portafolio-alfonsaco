<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
</script>

<template>

  <!--Dimensiones PC y móvil-->
  <component :is="esMovil ? Mobile : PC">

  </component>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
