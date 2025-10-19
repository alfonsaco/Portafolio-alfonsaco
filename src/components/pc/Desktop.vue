<script setup lang="ts">
import Icono from './Icono.vue';

const iconos = [
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' },
    { texto: 'Proyecto' }
]
</script>


<template>
    <div class="escritorio">
        <div class="div-iconos">
            <Icono v-for="(icono, i) in iconos" :key="i" :texto="icono.texto" />
        </div>
    </div>
</template>


<style> 
    .escritorio {
        height: calc(100% - 50px);
        padding: 40px;
    }

    .div-iconos {
        display: grid;
        column-gap: 15px;
        grid-template-columns: repeat(2, minmax(50px, 1fr));
        grid-template-rows: repeat(8, minmax(50px, 1fr));
        height: 90vh;
        position: absolute;
        left: 0px;
        top: 0px;
        margin-bottom: 100px;
    }
</style>