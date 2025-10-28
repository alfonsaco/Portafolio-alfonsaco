<script setup lang="ts">
import { ref } from 'vue';

const textoInput = ref('');
const ordenes = ref<string[]>([]);

// Texto por defecto
ordenes.value.push('AlfonOS [Version 1.0.0]');
ordenes.value.push('©AlfonOS Corporation. Todos los derechos reservados')

const nuevaOrden = (e: KeyboardEvent) => {
    if(e.key === 'Enter' && textoInput.value.trim() !== '') {
        ordenes.value.push(`C:\\Usuarios\\Usuario> ${textoInput.value}`);
        const textoFormateado = textoInput.value.toLowerCase();
        
        // ------------------------- Ordenes predefinidas -------------------------
        // Limpiar terminal
        if(textoFormateado === 'cls' || textoFormateado === 'clear') {
            ordenes.value.length = 0;
        } else {
            ordenes.value.push(`'${textoInput.value}' no se reconoce como un comando interno o externo. Escribe 'help' pra ver todos los comandos disponibles.`);
        }

        // Espacio en blanco para dejar margen
        ordenes.value.push('\u00A0');
        textoInput.value = '';
    }
}
</script>


<template>
    <div class="div-ventana-terminal">
        <!-- Ordenes agregadas automaticamente -->
        <div class="div-ordenes-anteriores">
            <p v-for="(orden, i) in ordenes" :key="i">{{ orden }}</p>
        </div>

        <div class="div-linea-input">
            <p>C:\Usuarios\Usuario&gt;</p>
            <input type="text" class="terminal-input" v-model="textoInput" @keydown="nuevaOrden"></input>
        </div>
    </div>
</template>


<style>
    @font-face {
        font-family: 'Terminal';
        src: url('../../../assets/fonts/terminal.ttf');
    }
   
    .div-ventana-terminal {
        width: 100%;
        height: 100%;
        background-color: #000000;
        padding: 8px 12px 40px 12px;
        color: #25D318;
        font-family: 'Terminal';
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        user-select: text;
    }
    .div-ventana-terminal * {
        margin: 0;
    }
    .div-ventana-terminal p::selection {
        color: #000;
        background-color: #25D318;
    }

    /* INPUT DONDE SE ESCRIBE */
    .div-linea-input {
        display: flex;
        justify-content: left;
        align-items: center;
        position: relative;
    }
    .div-linea-input > p {
       font-size: 1.2em;
       padding-right: 10px;
       position: absolute;
       margin: -10px;
       left: 12px;
    }
    .terminal-input {
        color: #25D318;
        width: 100%;
        background-color: transparent;
        border: 0;
        font-family: 'Terminal';
        font-size: 1.2em;
        padding-left: 162px;
        white-space: nowarp;
    }
    .terminal-input:focus {
        outline: 0;
    }
    .terminal-input::selection {
        color: #000;
        background-color: #25D318;
    }

    /* SECCIÓN DONDE SE ESCRIBEN LOS TEXTOS ANTERIORES */
    .div-ordenes-anteriores {
        width: 100%;
        text-align: left;
        font-size: 1.2em;
    }
    .div-ordenes-anteriores p {
        margin-top: -5px;
    }
    .div-ordenes-anteriores p::selection {
        color: #000;
        background-color: #25D318;
    }
</style>