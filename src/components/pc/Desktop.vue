<script setup lang="ts">
import Icono from './Icono.vue';
import DesktopMenu from './DesktopMenu.vue';
import { ref, onMounted, onUnmounted } from 'vue';

// Añadimos los iconos al escritorio
const iconosIzquierda = [
    { texto: 'Proyecto' },
    { texto: 'Proasdasdasdasdasdasdasdasdsadsadsayecto' },
    { texto: 'Proydasdsa d sad sa das das das decto' },
    { texto: 'Proyecto6' },
    { texto: 'Proyecto' },
    { texto: 'Hola' },
    { texto: 'Proyecto4' },
    { texto: 'Proyecto' },
    { texto: 'Proydsae sadacto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto2956654645' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto6' },
    { texto: 'Proyfsdfsdfsdfsdfsdfsdfsddsfsdfdsecto' },
    { texto: 'Proyecto' }
]

const iconosDerecha = [
    { texto: 'Proyecto' },
    { texto: 'Proyecto6' },
    { texto: 'Proyecto6' },
    { texto: 'Proyfsdfsdfsdfsdfsdfsdfsddsfsdfdsecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyfsdfsdfsdfsdfsdfs' }
]

// Designamos las coordenadas del menú del escritorio al hacer Click Dcho
const menuX = ref(0);
const menuY = ref(0);
const menuVisible = ref(false);

const mostrarMenu = (e: MouseEvent) => {
    // Cambiamos dirección para que no salga de la pantalla
    if(e.clientX > window.innerWidth - 230) {
        menuX.value = e.clientX - 200;
    } else {
        menuX.value = e.clientX;
    }

    if(e.clientY < 305) {
        menuY.value = e.clientY + 5;
    } else {
        menuY.value = e.clientY - 300;
    }
    
    menuVisible.value = true;
}

const ocultarMenu = () => {
    menuVisible.value = false;
}
onMounted(() => {
  window.addEventListener('click', ocultarMenu);
});
onUnmounted(() => {
  window.removeEventListener('click', ocultarMenu);
});

</script>


<template>
    <DesktopMenu :x="menuX" :y="menuY" v-if="menuVisible"></DesktopMenu>

    <div class="escritorio" @auxclick="mostrarMenu">
        <div class="div-iconos">
            <Icono v-for="(icono, i) in iconosIzquierda" :key="i" :texto="icono.texto" />
        </div>

        <div class="div-iconos-2" >
            <Icono v-for="(icono, i) in iconosDerecha" :key="i" :texto="icono.texto" />
        </div>
    </div>
</template>


<style> 
    .escritorio {
        height: calc(100% - 50px);
    }

    .div-iconos {
        display: grid;
        column-gap: 15px;
        grid-template-columns: repeat(2, minmax(50px, 1fr));
        grid-template-rows: repeat(8, minmax(50px, 1fr));
        height: 90vh;
        position: absolute;
        left: 30px;
        top: 30px;
        margin-bottom: 100px;
    }

    .div-iconos-2 {
        display: grid;
        column-gap: 15px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, minmax(50px, 1fr));
        height: 100%;
        position: absolute;
        right: 30px;
        top: 30px;
        margin-bottom: 100px;
    }
</style>