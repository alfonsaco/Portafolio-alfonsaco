<script setup lang="ts">
import { defineEmits } from 'vue';

const props = defineProps<{
  texto: string
  imagen: string
}>();

// Función de Click
const emit = defineEmits<{
    (e: 'dblclick'): void
}>();
const manejarClick = () => {
    emit('dblclick');
}
</script>


<template>
    <div class="div-icono-archivo" @dblclick="manejarClick">
        <img :src="imagen" alt="Icono" class="imagen-icono-archivo" />
        <p class="texto-icono-archivo">{{ props.texto }}</p>
    </div>
</template>


<style>
    .div-icono-archivo {
        cursor: pointer;
        height: auto;
        width: auto;
        user-select: none;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 6px 4px;
    }
    .div-icono-archivo:hover {
        background-color: #9ab2ff41;
    }
    .texto-icono-archivo {
        color: #222;
        margin: 0;
        font-size: .8em;
        text-align: center;
        max-width: 70px;       
        display: -webkit-box;         
        -webkit-box-orient: vertical;  
        -webkit-line-clamp: 2;    
        line-clamp: 2;    
        overflow: hidden;              
        text-overflow: ellipsis;      
        word-wrap: break-word; 
    }
    .imagen-icono-archivo {
        width: 50px;
        height: 50px;
    }
</style>