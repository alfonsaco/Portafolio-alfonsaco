<script setup lang="ts">
import ParfumsLogo from '../../../assets/images/parfums_logo.png'
</script>


<template>
    <div class="proyecto-flappy-contenedor">
        <div class="proyecto-flappy-div-principal">
            <img :src="ParfumsLogo" alt="Logo Flappy Parfums" class="logo-flappy">


            <div class="flappy-link-github">

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
        overflow: hidden;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .proyecto-flappy-div-principal {
        height: 100%;
        width: 700px;
        background-color: #eeeeee;
        padding: 20px 10px;
    }

    .logo-flappy {
        width: 450px;
        
    }

    /* SECCIÓN DE LINK GITHUB */
    .flappy-link-github {
        
    }
</style>