<script setup lang="ts">
import App from './App.vue';

const apps = [
    { texto: 'Instagram' },
    { texto: 'Instagram 2'},
    { texto: 'Instagram 25'},
    { texto: 'Instagram 7'},
    { texto: 'Instagram 6'},
    { texto: 'Instagram 62'},
    { texto: 'Instagram 2'}
]
</script>


<template>
    <div class="contenedor">
        <!--LISTA DE APLICACIONES-->
        <div class="div-aplicaciones">
            <App v-for="(aplicacion, i) in apps" :key="i" :texto="aplicacion.texto"/>
        </div>
    </div>
</template>


<style>
    .contenedor {
        width: 100%;
        height: calc(100% - 105px);
    }

    /* LISTA DE APLICACIONES */ 
    .div-aplicaciones {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        row-gap: 35px;
        column-gap: 50px;
        width: 100%;
        padding: 40px;
    }
</style>