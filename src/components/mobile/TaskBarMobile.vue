<script setup>
import iconoGitHub from '../../assets/github.png'
import iconoLinkedIn from '../../assets/linkedin.png'
import iconoAlfonOS from '../../assets/alfonOS.png'

</script>


<template>
    <div class="div-taskbar">
        <a href="https://www.github.com" target="_blank">
                <img :src="iconoGitHub" alt="Icono GitHub" />
            </a>
        <a href="https://www.linkedin.com" target="_blank">
            <img :src="iconoLinkedIn" alt="Icono inkedIn" />
        </a>
    </div>
</template>


<style>
    .div-taskbar {
        width: 100%;
        padding: 10px 0px;
        display: flex;
        gap: 20px;
        justify-content: center;
    }
    .div-taskbar img {
        height: 70px;
        width: 70px;
        border-radius: 20px;
    }
</style>