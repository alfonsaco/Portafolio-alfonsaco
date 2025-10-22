<script setup lang="ts">

const props = defineProps<{
  texto: string
  imagen: string
}>();

const emit = defineEmits<{
    (e: 'click'): void
}>();
const manejarClickIndex = () => {
    emit('click');
}
</script>

<template>
    <div class="div-icono-menu-index" @click="manejarClickIndex">
        <img :src="props.imagen" alt="Imagen de menú del indice">
        <p>{{ props.texto }}</p>
    </div>
</template>


<style>
    .div-icono-menu-index {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 8px;
        padding: 8px 13px;
        cursor: pointer;
        border-bottom: 1px solid #999;
        background-color: #222;
        animation: animacion .6s ease;
    }
    .div-icono-menu-index:hover {
        background-color: #474747;
    }
    .div-icono-menu-index img {
        width: 20px;
        height: 20px;
    }
    .div-icono-menu-index p {
        color: #FFF;
        font-size: .8em;
        white-space: nowrap;
        margin: 0;
    }

    @keyframes animacion {
        from {
            transform: translateY(100px);
            scale: .5;
            border-color: transparent;
        }
        80% {
            transform: translateY(0px);
            scale: .8;
            border-color: transparent;
        }
        to {
            scale: 1;
            border-color: #999;
        }
    }
</style>