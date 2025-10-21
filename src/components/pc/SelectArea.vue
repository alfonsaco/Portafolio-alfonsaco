<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    x: number
    y: number
    width: number
    height: number
    visible: boolean
}>();

const estiloArea = ref({
    left: props.x + 'px',
    top: props.y + 'px',
    width: props.width + 'px',
    height: props.height + 'px',
    display: props.visible ? 'block' : 'none'
})
</script>

<template>
    <div class="area-de-seleccion" :style="{
            left: x + 'px',
            top: y + 'px',
            width: width + 'px', 
            height: height + 'px', 
            display: visible ? 'block' : 'none'
            }"
    </div>
</template>


<style>
    .area-de-seleccion {
        position: fixed;
        background-color: rgba(0, 71, 202, 0.37);
        border: 1px solid rgba(0, 81, 202, 0.932);
        z-index: 50;
        pointer-events: none;
    }
</style>