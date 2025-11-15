<script setup lang="ts">

// Idiomas
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

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
    <div class="div-icono-search" 
    @click="manejarClickIndex" >
        <img :src="props.imagen" alt="Imagen de menú del búsquedas">
        <p>{{ t(props.texto) }}</p>
    </div>
</template>


<style>
    .div-icono-search {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 8px;
        padding: 8px 13px;
        cursor: pointer;
        border-bottom: 1px solid #999;
        background-color: #222;
        z-index: 10;
        user-select: none;
    }
    .div-icono-search:hover {
        background-color: #474747;
    }
    .div-icono-search img {
        width: 35px;
        height: 35px;
    }
    .div-icono-search p {
        color: #FFF;
        font-size: .8em;
        white-space: nowrap;
        margin: 0;
    }
</style>