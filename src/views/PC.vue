<script setup lang="ts">
import TaskBar from '../components/pc/TaskBarPC.vue';
import Desktop from '../components/pc/Desktop.vue';

import { ref } from 'vue';

// Para usar las funciones de ventanas en el TaskBar
const desktopRef = ref();

const comunicacionDesktopEmail = () => {
  if (desktopRef.value) {
    desktopRef.value.manejarMostrarEmail();
  } else {
    console.log('ERROR al mostrar Email')
  }
};

const comunicacionDesktopSobreMi = () => {
  if (desktopRef.value) {
    desktopRef.value.mostrarSobreMi();
  } else {
    console.log('ERROR al mostrar Sobre Mi')
  }
};

const comunicarDesktopTerminal = () => {
    if (desktopRef.value) {
        desktopRef.value.mostrarTerminal();
    } else {
        console.log('ERROR al mostrar Terminal')
    }
}

const comunicarDesktopFlappy = () => {
    if (desktopRef.value) {
        desktopRef.value.mostrarFlappy();
    } else {
        console.log('ERROR al mostrar Flappy')
    }
}
</script>


<template>
    <Desktop ref="desktopRef"></Desktop>

    <TaskBar 
        @mostrar-email="comunicacionDesktopEmail"
        @mostrar-sobre-mi="comunicacionDesktopSobreMi"
        @mostrar-terminal="comunicarDesktopTerminal"
        @mostrar-flappy="comunicarDesktopFlappy"
        ></TaskBar>
</template>


<style> 

</style>