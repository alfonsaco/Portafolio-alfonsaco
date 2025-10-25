<script setup>
const props = defineProps({
    mostrarEmail: Boolean
});
const emit = defineEmits(['cerrar']);

const cerrarEmail = () => {
    emit('cerrar');
}
</script>


<template>
    <!-- Fondo para dar enfoque al email -->
    <div class="fondo-contacto-email" @click="cerrarEmail">
        <div class="div-email-contacto">
            <a href="mailto:alfonso.rincondev@gmail.com">
                alfonso.rincondev@gmail.com
            </a>
            <div class="underline-email"></div>
        </div>
    </div>
</template>

<style>
    .fondo-contacto-email {
        background-color: rgba(0, 0, 0, 0.315);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1000;
        backdrop-filter: blur(5px);
        visibility: visible;
        transition: 1s ease;
    }
    .div-email-contacto {
        color: #FFF;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 400;
    }
    .div-email-contacto a {
        color: #FFF;
        text-shadow: 0px 1px 0px #000, 0px 2px 0px #000;
        font-size: 1.5em;
        font-family: 'Courier New', Courier, monospace;
    }

    .underline-email {
        width: 100%;
        height: 1px;
        background-color: rgb(184, 184, 184);
        border-radius: 100%;
        filter: drop-shadow(0px 0px 1px #ffffff) drop-shadow(0px 0px 3px #ffffff) drop-shadow(0px 0px 6px #ffffff) drop-shadow(0px 0px 10px #ffffff)drop-shadow(0px 0px 20px #ffffff);
    }
</style>