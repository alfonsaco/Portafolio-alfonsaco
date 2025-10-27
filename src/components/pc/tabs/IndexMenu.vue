<script setup lang="ts">
import IndexMenuIcon from '../models/IndexMenuIcon.vue';

// Importamos los iconos desde el JSON
import { usarIconos } from '../../../data/UseIcons';
const { todosLosIconos } = usarIconos();
import { computed } from 'vue';

// Para poner el delay a la animación
const delayBase = 60;
const delaySuma = 20;

const aplicacionesDelay = computed(() => 
    todosLosIconos.value.map((app, i) => ({
        ...app,
        estilo: `animation-delay: ${delayBase + i * delaySuma}ms`
    }))
);
const abrirAplicacionIndex = (aplicacion: {texto: string, imagen: string, url?: string, action?: string }) => {
    if(aplicacion.url) {
        window.open(aplicacion.url, '_blank')
    } else {
        if(aplicacion.action === 'contacto') {
            emit('mostrar-email');
        }
    }

    emit('cerrar-index');
}

const props = defineProps<{
    visible: boolean
}>();

const emit = defineEmits<{
    (e: 'cerrar-index'): void
    (e: 'mostrar-email'): void
}>();
</script>

<template>
    <div class="div-menu-index" :class="visible ? 'menu-visible' : 'menu-hidden'">
        <IndexMenuIcon v-for="(aplicacion, i) in aplicacionesDelay" 
            :key="i" 
            :texto="aplicacion.texto" 
            :imagen="aplicacion.imagen" 
            :style="aplicacion.estilo" 
            :activar-animacion="visible"
            @click="abrirAplicacionIndex(aplicacion)"></IndexMenuIcon>
    </div>
</template>


<style>
    .div-menu-index {
        position: absolute;
        width: 200px;
        height: auto;
        background-color: #222;
        bottom: 45px;
        right: 55%;
        border: 1px solid #999;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        overflow: hidden;
        transition: .7s ease;
        transform: translateY(110%); 
        z-index: 100;
        user-select: none;
    }

    .menu-visible {
        transform: translateY(0%);
    }
    .menu-hidden {
        transform: translateY(110%);   
        transition: .4s ease;
    }
</style>