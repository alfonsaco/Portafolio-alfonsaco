<script setup lang="ts">
import { X, Maximize } from 'lucide-vue-next';
import { ref } from 'vue';

// Manejar pantalla completa y normal
const pantallaCompleta = ref(false);

const cambairAPantallaCompleta = () => {
    pantallaCompleta.value = !pantallaCompleta.value;
}
</script>


<template>
    <div class="div-ventana-principal" :class="pantallaCompleta ? 'ventana-pantalla-completa' : ''">
        <div class="div-ventana-acciones">
            <div>
                <div @click="cambairAPantallaCompleta">
                    <Maximize class="div-ventana-icono"></Maximize>
                </div>
                <div>
                    <X class="div-ventana-icono"></X>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
    .div-ventana-principal {
        width: 700px;
        height: 500px;
        background-color: rgb(0, 0, 0);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 400;
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid #999;
    }

    /* SECCIÓN DE CERRAR, MAXIMIZAR */
    .div-ventana-acciones {
        position: relative;
        width: 100%;
        background-color: #222;
        height: 37px;
    }
    .div-ventana-acciones > div {
        display: flex;
        gap: 5px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .div-ventana-acciones > div > div {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 100%;
        transition: .2s ease;
    }
    .div-ventana-icono {
        width: 15px;
        height: 15px;
    }
    .div-ventana-acciones > div > div:first-child {
        background-color: rgb(87, 184, 87);
    }
    .div-ventana-acciones > div > div:first-child:hover {
        background-color: rgb(36, 158, 36);
    }
    .div-ventana-acciones > div > div:last-child {
        background-color: rgb(177, 62, 62);
    }
    .div-ventana-acciones > div > div:last-child:hover {
        background-color: rgb(143, 31, 31);
    }

    /* ESTILOS SEGÚN LA ACCIÓN */
    .ventana-pantalla-completa {
        width: 100%;
        height: calc(100% - 50px);
        border-radius: 0px;
    }
</style>