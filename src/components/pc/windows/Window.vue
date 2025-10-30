<script setup lang="ts">
import { X, Maximize } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    texto: string
    componente?: any
}>();

const ventanaAbierta = ref(false);

// Manejar pantalla completa y normal
const pantallaCompleta = ref(false);

const cambairAPantallaCompleta = () => {
    pantallaCompleta.value = !pantallaCompleta.value;
}

// Mover la ventana a lo largo de la pantalla
const ratonApretado = ref(false);
const inicialX = ref(0);
const inicialY = ref(0);
const posicionX = ref(0);
const posicionY = ref(0);

onMounted(() => {
    // Posición inicial en el centro
    posicionX.value = (window.innerWidth - 700) / 2;
    posicionY.value = (window.innerHeight - 500) / 2;

    setTimeout(() => {
        ventanaAbierta.value = true;
    }, 50);
});

const apretarRaton = (e: MouseEvent) => {
    ratonApretado.value = true;
    inicialX.value = e.clientX;
    inicialY.value = e.clientY;

    // Agregar event listeners al documento
    document.addEventListener('mousemove', moverVentana);
    document.addEventListener('mouseup', soltarRaton);
}

const moverVentana = (e: MouseEvent) => {
    if(!ratonApretado.value || pantallaCompleta.value) return;

    const difX = e.clientX - inicialX.value;
    const difY = e.clientY - inicialY.value;
    
    posicionX.value += difX;
    posicionY.value += difY;
    
    inicialX.value = e.clientX;
    inicialY.value = e.clientY;
}

const soltarRaton = () => {
    ratonApretado.value = false;
    
    // Quitamos los listeners
    document.removeEventListener('mousemove', moverVentana);
    document.removeEventListener('mouseup', soltarRaton);
}

// Limpiar event listeners al desmontar el componente
onUnmounted(() => {
    document.removeEventListener('mousemove', moverVentana);
    document.removeEventListener('mouseup', soltarRaton);
});

// Cerrar la ventana
const emit = defineEmits(['cerrarVentana']);

const cerrarVentana = () => {
    ventanaAbierta.value = false;

    emit('cerrarVentana');
}
</script>


<template>
    <div class="div-ventana-principal" 
    :class="{'ventana-pantalla-completa': pantallaCompleta,
             'ventana-abierta': ventanaAbierta }"
    :style="pantallaCompleta ? {} : { left: posicionX + 'px', top: posicionY + 'px'}">

        <div class="div-ventana-acciones" 
        @mousedown="apretarRaton">
            <!-- Nombre de la ventana -->
            {{ props.texto }}
            <div>
                <div @click="cambairAPantallaCompleta">
                    <Maximize class="div-ventana-icono"></Maximize>
                </div>
                <div @click="cerrarVentana">
                    <X class="div-ventana-icono"></X>
                </div>
            
            </div>
        </div>

        <component :is="props.componente" v-if="props.componente" 
            @cerrarVentana="cerrarVentana"></component>
    </div>
</template>


<style>
    .div-ventana-principal {
        width: 700px;
        height: 500px;
        background-color: rgb(0, 0, 0);
        position: absolute;
        z-index: 400;
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid #999;
        user-select: none;
        padding-top: 37px;
        pointer-events: none;
        transition: scale .2s ease;
        scale: 0;
    }

    /* SECCIÓN DE CERRAR, MAXIMIZAR */
    .div-ventana-acciones {
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #222;
        height: 37px;
        text-align: left;
        display: flex;
        align-items: center;
        padding-left: 10px;
        font-size: .9em;
        color: #FFF;
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
        padding: 6px;
        border-radius: 100%;
        transition: .2s ease;
    }
    .div-ventana-icono {
        width: 13px;
        height: 13px;
        color: #222;
        transition: .1s ease;
    }
    .div-ventana-acciones > div > div:hover .div-ventana-icono {
        color: #e6e6e6;
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
        left: 0 !important;
        top: 0 !important;
        transform: none !important;
    }

    .ventana-abierta {
        scale: 1;
        pointer-events: all;
    }
</style>