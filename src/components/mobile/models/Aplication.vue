<script setup lang="ts">

const props = defineProps<{
    texto: string
    imagen: string
}>();

// Acción en la app
const emits = defineEmits<{
    (e: 'click'): void
}>();
const abrirAplicacion = () => {
    emits('click');
}
</script>


<template>
    <div class="div-aplicacion-movil">
        <img :src="imagen" alt="Icono aplicación" class="icono-app" @click="abrirAplicacion" />
        <p class="texto-app" >{{ props.texto }}</p>
    </div>
</template>


<style>
    .div-aplicacion-movil {
        user-select: none;
        font-size: .8em;
        text-align: center;
        cursor: pointer;
    }
    .icono-app {
        width: 55px;
        height: 55px;
    }
    .texto-app {
        margin: 0;
    }
</style>