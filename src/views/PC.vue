<script setup lang="ts">
import TaskBar from '../components/pc/TaskBar-PC.vue';
import Icono from '../components/pc/Icono.vue';

</script>


<template>
    <div class="div-iconos">
        <Icono texto="Proyecto"></Icono>
        <Icono texto="Proyecto2"></Icono>
        <Icono texto="Proyecto3"></Icono>
        <Icono texto="Proyecto4"></Icono>
        <Icono texto="Proyecto5"></Icono>
        <Icono texto="Proyecto6"></Icono>
        <Icono texto="Proyecto"></Icono>
        <Icono texto="Proyecto2"></Icono>
        <Icono texto="Proyecto3"></Icono>
        <Icono texto="Proyecto4"></Icono>
        <Icono texto="Proyecto5"></Icono>
        <Icono texto="Proyecto6"></Icono>
    </div>

    <TaskBar></TaskBar>
</template>


<style> 
    .div-iconos {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(2, minmax(50px, 1fr));
        grid-template-rows: repeat(8, minmax(50px, 1fr));
        height: 90vh;
        position: absolute;
        left: 40px;
        top: 40px;
        margin-bottom: 100px;
    }
</style>