<script setup lang="ts">
import Es from '../../assets/images/es.webp';
import En from '../../assets/images/en.webp';
import { ref } from 'vue';

// Selección de idioma
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const idiomaSeleccionado = ref('es');

const cambiarIdioma = (idioma: string) => {
    idiomaSeleccionado.value = idioma;
    locale.value = idioma;
}
</script>


<template>
    <div class="div-idiomas-movil">
        <img :src="Es" alt="Idioma español" 
            :class="idiomaSeleccionado === 'es' ? 'idioma-seleccionado-pc' : ''" @click="cambiarIdioma('es')">
        <img :src="En" alt="Idioma inglés" 
            :class="idiomaSeleccionado === 'en' ? 'idioma-seleccionado-pc' : ''" @click="cambiarIdioma('en')">
    </div>
</template>


<style>
    .div-idiomas-movil {
        background-color: #ffffff38;
        border: 1px solid #999;
        padding: 7px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 90px;
        margin: 0 auto;
    }
    .div-idiomas-movil > img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 2px solid #d6d6d6;
        cursor: pointer;
    }
</style>