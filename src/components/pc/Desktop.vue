<script setup lang="ts">
import Icono from './Icono.vue';

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
</script>


<template>
    <div class="escritorio">
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