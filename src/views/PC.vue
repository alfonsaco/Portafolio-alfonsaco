<script setup lang="ts">
import TaskBar from '../components/pc/TaskBarPC.vue';
import Desktop from '../components/pc/Desktop.vue';
import AIWindow from '../components/pc/AIWindow.vue';


</script>


<template>
    <AIWindow></AIWindow>
    <Desktop></Desktop>
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