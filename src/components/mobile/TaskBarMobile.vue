<script setup>
import iconoGitHub from '/github.webp'
import iconoLinkedIn from '/linkedin.webp'
import iconoCodepen from '/codepen.webp'

</script>


<template>
    <div class="div-taskbar">
        <div class="taskbar-decoracion-superior">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="taskbar-apps">
            <a href="https://www.github.com/alfonsaco" target="_blank">
                <img :src="iconoGitHub" alt="Icono GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/alfonsorinconc/" target="_blank">
                <img :src="iconoLinkedIn" alt="Icono inkedIn" />
            </a>
            <a href="https://codepen.io/alfonsaco" target="_blank">
                <img :src="iconoCodepen" alt="Icono CodePen" />
            </a>
        </div>
    </div>
</template>


<style>
    .div-taskbar {
        width: 100%;
        padding: 15px 0px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        position: absolute;
        bottom: 0;
    }
    .div-taskbar img {
        height: 55px;
        width: 55px;
        border-radius: 20px;
        transition: .1s ease;
        user-select: none;
    }
    .div-taskbar a {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
    .div-taskbar img:active {
        scale: 1.1;
    }
    .taskbar-apps {
        display: flex;
        gap: 22px;
        justify-content: center;
    }

    /* PUNTOS DECORATIVOS DEL TASKBAR */
    .taskbar-decoracion-superior {
        background-color: #222222c4;
        backdrop-filter: blur(4px);
        padding: 8px 12px;
        gap: 8px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .taskbar-decoracion-superior > div {
        width: 7px;
        height: 7px;
        border-radius: 100%;
        background-color: #FFF;
    }
    .taskbar-decoracion-superior > div:last-child, .taskbar-decoracion-superior > div:first-child {
        background-color: #818181;
    }
</style>