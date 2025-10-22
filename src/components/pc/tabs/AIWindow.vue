<script setup lang="ts">

const props = defineProps<{
    activo : boolean
}>();

</script>


<template>
    <div class="div-ventana" :class="activo ? 'div-ventana-activa' : 'div-ventana-inactiva' ">
        HOLA MUNDO
    </div>
</template>


<style>
    .div-ventana{  
        background-color: #222222;
        width: 350px;
        height: 400px;
        position: absolute;
        bottom: 60px;
        left: -350px;
        border: 1px solid #999999;
        border-radius: 7px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: 0px;
        z-index: 90;
        transition: .7s ease;
    }
    .div-ventana-activa {
        left: 0px;
    }
    .div-ventana-inactiva {
        left: -350px;
    }
</style>