<script setup lang="ts">
import LogoIA from '../../../assets/ai.webp'
import { usarGroq } from '../utils/groqAI'

import { X } from 'lucide-vue-next';

defineProps<{activo: boolean}>()

// Cerrar ventana al pulsar la X
const emit = defineEmits(['cerrar']);

const {
  estado, cargando, error,
  mensajeUsuario,
  formattedResponse, testGroq
} = usarGroq()

// Función para enviar con Enter
const enviarConEnter = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !cargando.value) {
    testGroq()
  }
}
</script>


<template>
    <div class="div-ventana-IA" :class="activo ? 'div-ventana-activa' : 'div-ventana-inactiva' ">
        
        <X class="icono-cerrar-IA" @click="emit('cerrar')"></X>

        <div class="div-respuestas-IA">
            <div class="div-ventana-ia-logo">
                <img :src="LogoIA" alt="Logo IA">
                <h2>AI-Fon</h2>
            </div>
            
            <p>Hola, soy AI-fon, y estoy aquí para resolver tus problemas. No hago
                nada en especial, pero como ahora a todo le metéis IA, 
                pues le meto una IA que te da información sobre mí.
            </p>

            <!-- Estado y respuestas -->
            <div class="estado-container">
                <p class="estado">Estado: {{ estado }}</p>
                <div v-if="error" class="error">{{ error }}</div>
                
                <div v-if="formattedResponse" class="response-container">
                    <h3>Respuesta:</h3>
                    <div class="respuesta-texto">{{ formattedResponse }}</div>
                </div>
            </div>
        </div>

        <!-- Input único para mensaje -->
        <div class="div-IA-input">
            <input 
                v-model="mensajeUsuario" 
                type="text" 
                placeholder="Pregúntame algo"
                :disabled="cargando"
                @keypress="enviarConEnter" >
            <button 
                @click="testGroq" 
                :disabled="cargando || !mensajeUsuario.trim()" 
                class="btn-enviar-IA" >
                {{ cargando ? '...' : '➤' }}
            </button>
        </div>
    </div>
</template>


<style>
    .div-ventana-IA {  
        background-color: #222222;
        width: 450px;
        height: 500px;
        position: absolute;
        bottom: 60px;
        border: 1px solid #999999;
        border-radius: 7px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: 0px;
        z-index: 300;
        transition: .7s ease;
        padding: 20px 15px 9px 15px;
        left: -500px;
    }


    /* ANIMACIONES */
    .div-ventana-activa {
        left: 0px;
    }
    .div-ventana-inactiva {
        left: -500px;
    }

    .div-respuestas-IA {
        height: 90%;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        padding-bottom: 12px;
        margin-top: 0px;
    }


    /* TEXTOS */
    .div-respuestas-IA > p {
        text-align: justify;
        font-size: .85em;
        color: #b3b3b3;
        line-height: 18px;
        margin: 0;
        user-select: none;
    }
    .div-ventana-ia-logo h2 {
        margin: 0;
        margin-top: -15px;
        user-select: none;
        color: #fff;
    }
    .div-ventana-ia-logo img {
        width: 25px;
        height: 25px;
        user-select: none;
    }


    /* INPUT */
    .div-IA-input {
        position: relative;
        margin-top: 10px;
    }
    .div-IA-input > input {
        width: 100%;
        background-color: #444;
        height: 35px;
        border-radius: 50px;
        border: 1px solid #999;
        color: #f0f0f0;
        padding: 0 45px 0 15px;
        font-size: 0.9em;
    }
    .div-IA-input > input::placeholder {
        color: #888;
    }
    .div-IA-input > input:focus {
        outline: 0;
    }
    .btn-enviar-IA {
        position: absolute;
        width: 35px;
        height: 27px;
        right: 5px;
        top: 51%;
        transform: translateY(-50%);
        border: 1px solid #222222;
        background: #8743e0;
        color: white;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: .8em;
    }
    .btn-enviar-IA:disabled {
        background: #666;
        cursor: not-allowed;
    }
    .btn-enviar-IA:hover:not(:disabled) {
        background: #925fd4;
    }


    /* ESTADO Y RESPUESTAS */
    .estado-container {
        margin-top: 10px;
    }
    .estado {
        font-size: 0.8em;
        color: #888;
        margin: 5px 0;
    }
    .error {
        color: #ff6b6b;
        font-size: 0.9em;
        margin: 10px 0;
        padding: 8px;
        background: rgba(255, 107, 107, 0.1);
        border-radius: 4px;
    }
    .response-container {
        margin-top: 15px;
    }
    .response-container h3 {
        color: #f0f0f0;
        font-size: 1em;
        margin-bottom: 8px;
    }
    .respuesta-texto {
        background: #333;
        padding: 12px;
        border-radius: 8px;
        color: #e0e0e0;
        font-size: 0.9em;
        line-height: 1.4;
        border: 1px solid #444;
        text-align: left;
    }

    .icono-cerrar-IA {
        position: absolute;
        right: 7px;
        top: 7px;
        cursor: pointer;
        color: #999;
        width: 22px;
        height: 22px;
        background-color: #222;
        border-radius: 100%;
        padding: 3px;
    }
</style>