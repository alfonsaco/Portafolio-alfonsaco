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
    <!-- Fondo para dar enfoque al email. Pongo la transición aquí para que el visibility
    no se cargue el efecto de transición del opacity -->
    <div class="fondo-contacto-email" 
    @click="cerrarEmail" 
    :style="{ opacity: mostrarEmail ? 1 : 0, visibility: mostrarEmail ? 'visible' : 'hidden', 
    transition: mostrarEmail ? 'opacity .5s ease, visibility 0s ease' : 'opacity .5s ease, visibility 0s ease .5s',
    pointerEvents: mostrarEmail ? '' : 'none' }">
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
        z-index: 550;
        backdrop-filter: blur(5px);
        visibility: visible;
    }
    .div-email-contacto {
        color: #FFF;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 600;
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
        background-color: rgb(231, 231, 231);
        border-radius: 100%;
        filter: drop-shadow(0px 0px 1px #ffffff) drop-shadow(0px 0px 3px #ffffff) drop-shadow(0px 0px 6px #ffffff) drop-shadow(0px 0px 10px #ffffff)drop-shadow(0px 0px 20px #ffffff);
    }

</style>