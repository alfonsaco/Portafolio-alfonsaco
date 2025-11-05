<script setup lang="ts">
import TaskBar from '../components/mobile/TaskBarMobile.vue';
import AppSection from '../components/mobile/AppSection.vue';
</script>


<template>
    <div class="mantenimiento">
        SECCIÓN MÓVIL EN PROCESO
    </div>
    <AppSection></AppSection>
    <TaskBar></TaskBar>
</template>


<style>
    .mantenimiento {
        width: 100%;
        height: 100%;
        background-color: #000;
        position: absolute;
        z-index: 1000;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3em;
        font-weight: bold;
        padding: 50px;
    }
</style>