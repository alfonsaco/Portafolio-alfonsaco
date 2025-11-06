<script setup lang="ts">
import ParfumsLogo from '../../../assets/images/parfums_logo.png'
import GIFJuego from '../../../assets/images/gif juego.gif'
import Strong from '../../../assets/images/gif_strong.gif'
import Azzaro from '../../../assets/images/git_azzaro.gif'
import Phatnom from '../../../assets/images/gif_phantom.gif'
import Java from '../../../assets/images/java.png'
import XML from '../../../assets/images/xml.png'
import AndroidStudio from '../../../assets/images/android_Studio.png'
import Mano from '../../../assets/images/mano.png'
</script>


<template>
    <div class="proyecto-flappy-contenedor">
        <div class="proyecto-flappy-div-principal">
            <img :src="ParfumsLogo" alt="Logo Flappy Parfums" class="logo-flappy">
            <div class="flappy-juego">
                <img :src="GIFJuego" alt="Gameplay de Flappy Parfums">
                <div>
                    <p><strong>Flappy Parfums</strong> es un juego para Android inspirado en el clásico Flappy Bird, 
                    donde los personajes tradicionales son reemplazados por perfumes icónicos. 
                    Fue desarrollado en equipo utilizando <strong>Android Studio</strong> con <strong>Java</strong>.</p>

                    <p>El jugador debe pulsar la pantalla para mantener en el aire a su perfume y esquivar obstáculos 
                    en forma de tuberías. A medida que aumenta la puntuación, se pueden desbloquear nuevos personajes 
                    como <strong>Phantom</strong>, <strong>Azzaro</strong> o <strong>Stronger</strong>, cada uno con su propia animación.</p>
                </div>
            </div>

            <h4>skins</h4>
            <div class="flappy-div-colonias">
                <img :src="Phatnom" alt="Colonia Phantom">
                <img :src="Azzaro" alt="Colonia Azzaro">
                <img :src="Strong" alt="Colonia Stronger">
            </div>

            <h4>tecnologías utilizadas</h4>
            <div class="flappy-div-tecnologias">
                <img :src="AndroidStudio" alt="Logo de Android Studio">
                <img :src="Java" alt="Logo de Java">
                <img :src="XML" alt="Logo de XML">
            </div>

            <h4>enlace a github</h4>
            <div class="flappy-div-link-github">                
                <img :src="Mano" alt="Imagen de mano" class="flappy-mano">
                <a href="https://github.com/alfonsaco/Flappy-Parfums" target="_blank">
                    <div>
                        <img src="/github.webp" alt="Logo GitHub">
                        Portafolio en GitHub
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>


<style>
    @font-face {
        font-family: 'Flappy';
        src: url('../../../assets/fonts/flappy.woff2') format('woff2'),
             url('../../../assets/fonts/flappy.woff') format('woff');
        font-display: swap;
    }

    /* CONTENEDOR GENERAL */
    .proyecto-flappy-contenedor {
        width: 100%;
        height: 100%;
        background-color: #3d3d3d;
        display: flex;
        justify-content: center;
    }
    .proyecto-flappy-contenedor * {
        margin: 0;
    }
    .proyecto-flappy-contenedor h4 {
        color: #C5562F;
        margin: 40px 0px 10px 0px;
        font-family: 'Flappy' !important;
    }

    .proyecto-flappy-div-principal {
        height: 100%;
        width: 700px;
        background-color: #eeeeee;
        padding: 25px 10px 55px 10px;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    /* LOGO GRANDE */
    .logo-flappy {
        width: 450px;
        filter: drop-shadow(0px 10px 0px #3f2721);
        margin-bottom: 20px;
    }

    /* SECCIÓN DEL TUTORIAL Y JEUGO EN SÍ */
    .flappy-juego {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }
    .flappy-juego img {
        width: 180px;
        border-radius: 5px;
    }
    .flappy-juego > div {
        width: 300px;
        height: auto;
        background-color: #FFF;
        border: 4px solid #674842;
        filter: drop-shadow(10px 10px 0px #3f2721);
        padding: 15px;
    }
    .flappy-juego p, .flappy-juego p strong {
        color: #494949;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 8px;
        font-size: .9em;
    }

    /* DIV DE SKINS */  
    .flappy-div-colonias img {
        width: 100px;
        animation: volar .7s ease-in-out infinite alternate-reverse;
    }
    .flappy-div-colonias img:nth-child(2) {
        animation-delay: -.2s;
    }
    .flappy-div-colonias img:last-child {
        animation-delay: -.4s;
    }
    @keyframes volar {
        from {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(7px);
        }
        to {
            transform: translateY(0px);
        }
    }

    /* DIV DE TECNOLOGÍAS */
    .flappy-div-tecnologias {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
    .flappy-div-tecnologias img {
        width: 50px;
        filter: drop-shadow(0px 2px 0px #000000f8);
    }

    /* SECCIÓN DE LINK GITHUB */
    .flappy-div-link-github {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .flappy-div-link-github div {
        width: 300px;
        height: auto;
        padding: 10px 20px;
        border: 4px solid #4e4e4e;
        box-shadow: 0px 10px 0px #222222;
        background-color: #e4e4e4;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #222222;
        font-size: 1.2em;
        gap: 10px;
        font-variant: small-caps;
    }
    .flappy-div-link-github div:active {
        box-shadow: none;
        transform: translateY(10px);
    }
    .flappy-mano {
        width: 90px !important;
        position: absolute;
        left: 75px;
        animation: moverMano .5s ease infinite alternate-reverse;
    }
    @keyframes moverMano {
        from {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(10px);
        }
        to {
            transform: translateX(0px);
        }
    }
    .flappy-div-link-github img {
        width: 45px;
        height: 45px;
    }
</style>