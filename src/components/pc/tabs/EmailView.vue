<script setup>

</script>


<template>
    <!-- Fondo para dar enfoque al email -->
    <div class="fondo-contacto-email">
        <div class="div-email-contacto">
            <a href="mailto:alfonso.rincondev@gmail.com">
                alfonso.rincondev@gmail.com
            </a>
        </div>
    </div>
</template>

<style>
    .fondo-contacto-email {
        background-color: rgba(0, 0, 0, 0.315);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 350;
        backdrop-filter: blur(5px);
        visibility: hidden;
        opacity: 0;
    }
    .div-email-contacto {
        background-color: rgba(128, 128, 128, 0.068);
        border-radius: 100%;
        filter: drop-shadow(0px 0px 10px #fffffffd) drop-shadow(0px 0px 10px #fffffffd);
        color: #FFF;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 400;
    }
    .div-email-contacto a {
        color: #FFF;
        text-shadow: 0px 1px 0px #000, 0px 2px 0px #000, 0px 3px 0px #000;
        font-size: 1.5em;
        font-family: 'Courier New', Courier, monospace;
    }
</style>