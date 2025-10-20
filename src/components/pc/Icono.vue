<script setup lang="ts">
import { computed } from 'vue';
import ImagenIcono from '../../assets/carpeta.png'

const props = defineProps<{
  texto: string
  tamano: string
}>();

const estilo = computed(() => {
    if(props.tamano === 'grande') return { width: '45px', height: '45px' };
    if(props.tamano === 'pequeno') return { width: '30px', height: '30px'};
    return { width: '37px', height: '37px' };
})
</script>


<template>
    <div class="div-icono">
        <img :src="ImagenIcono" alt="Icono" class="imagen-icono" :style="estilo" />
        <p class="texto-icono">{{ props.texto }}</p>
    </div>
</template>


<style>
    .div-icono {
        cursor: pointer;
        height: 67px;
        width: 70px;
        user-select: none;
        border-radius: 4px;
    }
    .div-icono:hover {
        background-color: #FFFfff20;
    }
    .imagen-icono {
    
    }
    .texto-icono {
        color: #FFF;
        margin: 0;
        font-size: .8em;
        position: relative;
        top: -8px;
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
</style>