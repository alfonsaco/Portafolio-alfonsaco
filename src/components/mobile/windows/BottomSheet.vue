<script setup lang="ts">
import { X } from 'lucide-vue-next';

const props = defineProps<{
    componente?: any
}>();
</script>


<template>
    <div class="bottomsheet-contenedor">
        <X class="bottomsheet-icono"></X>

        <component 
        :is="props.componente"
        v-if="props.componente"></component>
    </div>
</template>


<style>
    .bottomsheet-contenedor {
        background-color: #222;
        width: 100%;
        position: absolute;
        height: 100%;
        z-index: 500;
        padding-top: 40px;


        display: block;
    }

    .bottomsheet-icono {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #999;
        cursor: pointer;
    }
</style>