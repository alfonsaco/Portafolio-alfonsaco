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
    <div class="div-aplicacion-movil" @click="abrirAplicacion" >
        <img :src="imagen" alt="Icono aplicación" class="icono-app"/>
        <p class="texto-app" >{{ props.texto }}</p>
    </div>
</template>


<style>
    .div-aplicacion-movil {
        user-select: none;
        font-size: .8em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        color: #FFF;
    }
    .icono-app {
        width: 55px;
        height: 55px;
        transition: .1s ease;
    }
    .texto-app {
        margin: 0;
    }
    .div-aplicacion-movil:active .icono-app {
        scale: 1.2;
    }
</style>