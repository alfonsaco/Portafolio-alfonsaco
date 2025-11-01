<script setup lang="ts">
import ParfumsLogo from '../../../assets/images/parfums_logo.png'
import GIFJuego from '../../../assets/images/gif juego.gif'
import Strong from '../../../assets/images/gif_strong.gif'
import Azzaro from '../../../assets/images/git_azzaro.gif'
import Phatnom from '../../../assets/images/gif_phantom.gif'
</script>


<template>
    <div class="proyecto-flappy-contenedor">
        <div class="proyecto-flappy-div-principal">
            <img :src="ParfumsLogo" alt="Logo Flappy Parfums" class="logo-flappy">
            <div class="flappy-juego">
                <img :src="GIFJuego" alt="Gameplay de Flappy Parfums">
                <div>
                    <p>Juego tipo Flappy Bird con personajes inspirados en perfumes icónicos. 
                    Desarrollado en equipo utilizando Android Studio con Java.</p>

                </div>
            </div>

            <h4>SKINS</h4>
            <div class="flappy-div-colonias">
                <img :src="Phatnom" alt="Colonia Phantom">
                <img :src="Azzaro" alt="Colonia Azzaro">
                <img :src="Strong" alt="Colonia Stronger">
            </div>

            <h4>TECNOLOGÍAS UTILIZADAS</h4>
            <div>

            </div>

            <div class="flappy-div-link-github">
                <h4>ENLACE A GITHUB</h4>
                <a href="https://github.com/alfonsaco/Flappy-Parfums" target="_blank">
                    <div>
                        <img src="/github.png" alt="Logo GitHub">
                        Portafolio en GitHub
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>


<style>
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
        color: #674842;
        margin: 25px 0px 10px 0px;
    }

    .proyecto-flappy-div-principal {
        height: 100%;
        width: 700px;
        background-color: #eeeeee;
        padding: 20px 10px;
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
        box-shadow: 0px 7px 8px #000;
    }
    .flappy-juego > div {
        width: 300px;
        height: 350px;
        background-color: #FFF;
        border: 4px solid #674842;
        filter: drop-shadow(0px 10px 0px #3f2721);
        padding: 15px;
    }
    .flappy-juego p {
        color: #3f2721;
        text-align: left;
    }

    /* DIV DE SKINS */  
    .flappy-div-colonias {

    }
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


    /* SECCIÓN DE LINK GITHUB */
    .flappy-div-link-github {
        
    }
    .flappy-div-link-github div {
        width: auto;
        height: auto;
        padding: 10px 20px;
        border: 4px solid #674842;
        box-shadow: 0px 10px 0px #3f2721;
        background-color: #dad6d5;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        gap: 10px;
        font-variant: small-caps;
    }
    .flappy-div-link-github div:active {
        box-shadow: none;
        transform: translateY(10px);
    }
    .flappy-link-github {

    }
    .flappy-div-link-github img {
        width: 45px;
        height: 45px;
    }
</style>