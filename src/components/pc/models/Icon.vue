<script setup lang="ts">
import { computed, defineEmits } from 'vue';

// idiomas
import { useI18n } from 'vue-i18n'; 
const { t } = useI18n();

const props = defineProps<{
  texto: string
  tamano: string
  imagen: string
}>();

// Función de Click
const emit = defineEmits<{
    (e: 'dblclick'): void
}>();
const manejarClick = () => {
    emit('dblclick');
}

const estilo = computed(() => {
    if(props.tamano === 'grande') return { width: '60px', height: '60px' };
    if(props.tamano === 'pequeno') return { width: '40px', height: '40px' };
    return { width: '50px', height: '50px' };
})
</script>


<template>
    <div class="div-icono" @dblclick="manejarClick">
        <img :src="imagen" alt="Icono" class="imagen-icono" :style="estilo" />
        <p class="texto-icono">{{ t(props.texto) }}</p>
    </div>
</template>


<style>
    .div-icono {
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
    .div-icono:hover {
        background-color: #FFFfff20;
    }
    .texto-icono {
        color: #FFF;
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
</style>