<script setup>
import iconoGitHub from '/github.webp'
import iconoLinkedIn from '/linkedin.webp'
import iconoCodepen from '/codepen.webp'

</script>


<template>
    <div class="div-taskbar">
        <a href="https://www.github.com/alfonsaco" target="_blank">
            <img :src="iconoGitHub" alt="Icono GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/alfonso-rinc%C3%B3n-cuerva-02a0a42b6/" target="_blank">
            <img :src="iconoLinkedIn" alt="Icono inkedIn" />
        </a>
        <a href="https://codepen.io/alfonsaco" target="_blank">
            <img :src="iconoCodepen" alt="Icono CodePen" />
        </a>
    </div>
</template>


<style>
    .div-taskbar {
        width: 100%;
        padding: 15px 0px;
        display: flex;
        gap: 22px;
        justify-content: center;
        position: absolute;
        bottom: 0;
    }
    .div-taskbar img {
        height: 55px;
        width: 55px;
        border-radius: 20px;
    }
</style>