<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import dayjs from 'dayjs';

// Obtener batería
import { Battery, BatteryFull, BatteryCharging, BatteryLow, BatteryMedium, Wifi } from 'lucide-vue-next';

const nivelBateria = ref<number | null>(null);
const cargando = ref(false);

// Gestión de la fecha y hora
const horaActual = ref(dayjs().format('HH:mm'));
const fechaActual = ref(dayjs().format('DD/MM/YYYY'));

const actualizarFechaHora = () => {
    horaActual.value = dayjs().format('HH:mm');
    fechaActual.value = dayjs().format('DD/MM/YYYY');
};

onMounted(async() => {
    // Actualizar tiempo
    setInterval(() => {
        actualizarFechaHora();    
    }, 1000);

    // Obtener batería
    if('getBattery' in navigator) {
        const bateria = await(navigator as any).getBattery();

        nivelBateria.value = bateria.level * 100;
        cargando.value = bateria.charging;

        // Listener para los cambios
        bateria.addEventListener('levelchange', () => {
            nivelBateria.value = bateria.level * 100;
        });
        bateria.addEventListener('charginchange', () => {
            cargando.value = bateria.charging;
        });

    } else {
        console.warn('API para obtener batería no soportada en este navegador');
    }
});

// Establecer icono
const iconoBateria = computed(() => {
    if(cargando.value) return BatteryCharging;
    if(nivelBateria.value === null) return Battery;
    if(nivelBateria.value < 30) return BatteryLow;
    if(nivelBateria.value < 70) return BatteryMedium;
    else return BatteryFull;
});

// Establecer texto batería
const textoBateria = computed(() => {
    if(cargando.value) return "Cargando, "+nivelBateria.value+'%';
    else return nivelBateria+'%';
});

</script>


<template>
    
    <!-- Sección hora, wifi... -->
    <div class="div-utilidades">
        
        <!-- Seción WiFi y batería -->
        <div class="div-bateria-wifi">
            <Wifi class="iconos" ></Wifi>

            <div class="div-bateria" :data-bateria="textoBateria">
                <component :is="iconoBateria" class="iconos" />
            </div>
        </div>

        <!-- Fecha y hora -->
        <div class="fecha-hora">
            <p>{{ horaActual }}</p>
            <p>{{ fechaActual }}</p>
        </div>
    </div>
</template>


<style>
    .div-utilidades {
        position: absolute;
        right: 20px;
        display: flex;
        gap: 15px;
        align-items: center;
    }
    .div-utilidades p {
        margin: 0;
        font-size: .75em;
    }

    /* FECHA Y HORA */
    .fecha-hora {
        text-align: right;
    }

    .div-bateria-wifi {
        display: flex;
        gap: 10px;
    }
    /* BATERÍA */
    .div-bateria {
        position: relative;
    }
    .div-bateria::after {
        content: attr(data-bateria);
        color: #FFF;
        font-size: .75em;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
        width: auto;
        height: auto;
        background-color: #313131;
        border-radius: 5px;
        border: 1px solid #1a1a1a;
        bottom: 53px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity .3s ease .1s;
        pointer-events: none;
    }
    .div-bateria:hover::after {
        opacity: 1;
        transition-delay: .6s;
    }
    .iconos {
        width: 20px;
        height: 20px;
    }
</style>