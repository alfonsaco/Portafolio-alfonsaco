<script setup lang="ts">
import LogoIA from '../../../assets/ai.png'

const props = defineProps<{
    activo : boolean
}>();

</script>


<template>
    <div class="div-ventana-IA" :class="activo ? 'div-ventana-activa' : 'div-ventana-inactiva' ">
        <div class="div-respuestas-IA">
            <div class="div-ventana-ia-logo">
                <img :src="LogoIA" alt="Logo IA">
                <h2>AI-Fon</h2>
            </div>
            
            <p>Hola, soy AI-fon, y estoy aquí para resolver tus problemas. No hago
                nada en especial, mi dueño simplemente me agregó porque ahora todo lleva
                IA y poner IAs da buena imagen.
            </p>
        </div>

        <div class="div-IA-texto">
            <input type="text" placeholder="Preguntame algo">
        </div>
    </div>
</template>


<style>
    .div-ventana-IA {  
        background-color: #222222;
        width: 350px;
        height: 400px;
        position: absolute;
        bottom: 60px;
        left: -350px;
        border: 1px solid #999999;
        border-radius: 7px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: 0px;
        z-index: 90;
        transition: .7s ease;
        padding: 9px 15px;
    }

    /* ANIMACIONES */
    .div-ventana-activa {
        left: 0px;
    }
    .div-ventana-inactiva {
        left: -350px;
    }

    .div-respuestas-IA {
        height: 90%;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    /* TEXTOS */
    .div-respuestas-IA > p {
        text-align: justify;
        font-size: .9em;
        color: #b3b3b3;
        line-height: 18px;
        margin: 0;
    }
    .div-ventana-ia-logo h2 {
        margin: 0;
        margin-top: -15px;
    }
    .div-ventana-ia-logo img {
        width: 25px;
        height: 25px;
    }

    /* INPUT */
    .div-IA-texto > input {
        width: 100%;
        background-color: #444;
        height: 30PX;
        border-radius: 50px;
        border: 1px solid #999;
        padding-left: 15px;
        color: #f0f0f0;
    }
    .div-IA-texto > input::placeholder {
        color: #888;
    }
    .div-IA-texto > input:focus {
        outline: 0;
    }
</style>