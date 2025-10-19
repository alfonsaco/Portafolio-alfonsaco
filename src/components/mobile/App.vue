<script setup lang="ts">
import Icono from '../../assets/instagram.png'

const props = defineProps<{
    texto: string
}>();
</script>


<template>
    <div>
        <img :src="Icono" alt="Icono aplicación" class="icono-app" />
        <p class="texto-app" >{{ props.texto }}</p>
    </div>
</template>


<style>
    .icono-app {
        width: 70px;
        height: 70px;
    }
    .texto-app {
        margin: 0;
    }
</style>