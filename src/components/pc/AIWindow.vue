<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    activo : Boolean
}>();
const activo = props.activo;
</script>


<template>
    <div class="div-ventana" :class="activo ? 'div-ventana-activa' : 'div-ventana-inactiva' ">
        HOLA MUNDO
    </div>
</template>


<style>
    .div-ventana{  
        background-color: #222222;
        width: 300px;
        height: 350px;
        position: absolute;
        bottom: 60px;
        left: -300px;
        border: 1px solid #999999;
        border-radius: 7px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: 0px;
        z-index: 100;
        transition: .7s ease;
    }
    .div-ventana-activa {
        left: 0px;
    }
    .div-ventana-inactiva {
        left: -300px;
    }
</style>