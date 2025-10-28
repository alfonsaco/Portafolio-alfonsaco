<script setup lang="ts">
/**      ORIGEN DE LA FUENTE
 https://github.com/svofski/glasstty  
*/

import { ref } from 'vue';

const textoInput = ref('');
const ordenes = ref<string[]>([]);

// Texto por defecto
ordenes.value.push('AlfonOS [Version 1.0.0]');
ordenes.value.push('©AlfonOS Corporation. Todos los derechos reservados.');
ordenes.value.push('_');

const nuevaOrden = (e: KeyboardEvent) => {
    if(e.key === 'Enter' && textoInput.value.trim() !== '') {
        ordenes.value.push(`C:\\Usuarios\\Usuario> ${textoInput.value}`);
        const textoFormateado = textoInput.value.toLowerCase();
        
        // ------------------------- Ordenes predefinidas -------------------------
        // Limpiar terminal
        if(textoFormateado === 'cls' || textoFormateado === 'clear') {
            ordenes.value.length = 0;

        // Imprimir texto
        } else if(textoFormateado.split(' ')[0]?.trim() === 'echo') {
            ordenes.value.push(textoFormateado.split(' ').slice(1).join(' '));
            ordenes.value.push('_');

        // Comandos de ayuda
        } else if(textoFormateado == 'help') {
            ordenes.value.push('help | contact | about | echo | systeminfo | projects | exit');
            ordenes.value.push('_');

        } else if(textoFormateado == 'contact' || textoFormateado == 'contacto') {
            ordenes.value.push('\t - Email: alfonso.rincondev@gmail.com');
            ordenes.value.push('\t - Github: alfonsaco');
            ordenes.value.push('\t - LinkedIn: alfonsaco');
            ordenes.value.push('_');

        } else if(textoFormateado == 'about' || textoFormateado == 'sobremi') {
          
        } else if(textoFormateado == 'systeminfo') {    
        
        } else if(textoFormateado == 'exit') {  
        
        } else if(textoFormateado == 'proyectos' || textoFormateado == 'projects') {  

        } else {
            ordenes.value.push(`'${textoInput.value}' no se reconoce como un comando interno o externo. Escribe 'help' para ver todos los comandos disponibles.`);
            ordenes.value.push('_');
        }

        // Espacio en blanco para dejar margen
        textoInput.value = '';
    }
}
</script>


<template>
    <div class="div-ventana-terminal">
        <!-- Ordenes agregadas automaticamente -->
        <div class="div-ordenes-anteriores">
            <p v-for="(orden, i) in ordenes" :key="i" :class="{ 'salto-linea': orden === '_' }">{{ orden }}</p>
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
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        user-select: none;
    }
    .div-ventana-terminal * {
        margin: 0;
        font-size: 1.02em;
        font-family: 'Terminal';
    }

    /* INPUT DONDE SE ESCRIBE */
    .div-linea-input {
        display: flex;
        justify-content: left;
        align-items: center;
        position: relative;
        transform: translateY(3px);
    }
    .div-linea-input > p {
       padding-right: 10px;
       position: absolute;
    }
    .terminal-input {
        color: #25D318;
        width: 100%;
        background-color: transparent;
        border: 0;
        font-family: 'Terminal';
        padding-left: 175px;
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
        white-space: pre-wrap;
    }
    .div-ordenes-anteriores p {
        width: 100%;
    }
    .div-ordenes-anteriores p::selection {
        color: #000;
        background-color: #25D318;
    }

    .salto-linea {
        color: transparent !important;
    }
</style>