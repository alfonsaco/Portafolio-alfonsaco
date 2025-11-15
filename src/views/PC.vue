<script setup lang="ts">
import TaskBar from '../components/pc/TaskBarPC.vue';
import Desktop from '../components/pc/Desktop.vue';

import { ref, onMounted } from 'vue';

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

const comunicarDesktopCodezen = () => {
  if (desktopRef.value) {
        desktopRef.value.mostrarCodezen();
    } else {
        console.log('ERROR al mostrar CodeZen')
    }
}

const comunicarDesktopCRM = () => {
  if (desktopRef.value) {
        desktopRef.value.mostrarCRM();
    } else {
        console.log('ERROR al mostrar CRM')
    }
}

// idiomas
import { useI18n } from 'vue-i18n'; 
const { locale } = useI18n();

onMounted(() => {
    locale.value = 'es';
})

</script>


<template>
    <Desktop ref="desktopRef"></Desktop>

    <TaskBar 
        @mostrar-email="comunicacionDesktopEmail"
        @mostrar-sobre-mi="comunicacionDesktopSobreMi"
        @mostrar-terminal="comunicarDesktopTerminal"
        @mostrar-flappy="comunicarDesktopFlappy"
        @mostrar-codezen="comunicarDesktopCodezen"
        @mostrar-crm="comunicarDesktopCRM"
        ></TaskBar>
</template>


<style> 

</style>