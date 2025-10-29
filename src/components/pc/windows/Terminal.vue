<script setup lang="ts">
/**      ORIGEN DE LA FUENTE
 https://github.com/svofski/glasstty  
*/

import { ref } from 'vue';

const textoInput = ref('');
const ordenes = ref<string[]>([]);

// Datos
const info = [
    { tag: "Nombre del host:", valor: "DESKTOP-6578" },
    { tag: "Nombre del Sistema Operativo:", valor: "AlfonOS 1.4 Pro" },
    { tag: "Versión del Sistema Operativo:", valor: "1.0.0" },
    { tag: "Fabricante del Sistema Operativo: ", valor: "Alfonso Rincón" },
    { tag: "Propiedad de:", valor: "Usuario" },
    { tag: "Id del producto:", valor: "0110-0909-4567-A454" },
    { tag: "Fecha de instalación::", valor: "20/10/2025, 19:01" },
    { tag: "Fabricante del sistema:", valor: "Alfonsaco Inc." },
    { tag: "Modelo de sistema:", valor: "M520M H" },
    { tag: "Tipo de sistema:", valor: "x64-based PC" },
    { tag: "Procesadores:", valor: "AlfonChip X8 3.6GHz (8 núcleos)" },
    { tag: "Memoria física (RAM):", valor: "16,384 MB" },
    { tag: "Memoria virtual total:", valor: "32,768 MB" },
    { tag: "Dispositivo de arranque:", valor: "\\Device\\HarddiskVolume1" },
    { tag: "Monitor principal:", valor: "AlfonDisplay 27''" },
    { tag: "Versión de BIOS:", valor: "Alfonsaco v2.03, 01/09/2025" },
    { tag: "Usuario actual: ", valor: "Usuario" },
    { tag: "Tema actual:", valor: "Oscuro" },
    { tag: "Modo de energía:", valor: "Alto rendimiento" },
]
const ancho = Math.max(...info.map(d => d.tag.length)) + 5;

const proyectos = ['Oversize', '100DayCSS', 'CRM', 'CodeZen', 'Flappy Parfums', 'AlfonOS'];

const emit = defineEmits(['cerrarVentana']);

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
            ordenes.value.push('_');

        } else if(textoFormateado == 'about' || textoFormateado == 'sobremi') {
            ordenes.value.push('Full Stack Developer | Multiplatform Developer');
            ordenes.value.push('_');
          
        } else if(textoFormateado == 'systeminfo') {    
            info.forEach(i => {
                ordenes.value.push(i.tag.padEnd(ancho, ' ') + i.valor);
            });
            ordenes.value.push('_');
        
        } else if(textoFormateado == 'exit') {  
            emit('cerrarVentana');
        
        } else if(textoFormateado == 'proyectos' || textoFormateado == 'projects') {  
            for (let i = 0; i < proyectos.length; i++) {
                ordenes.value.push(`\t - ${proyectos[i]}`);
            }
            ordenes.value.push('_');
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