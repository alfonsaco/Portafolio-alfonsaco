<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

// Obtener batería
import { Battery, BatteryFull, BatteryCharging, BatteryLow, BatteryMedium, Wifi } from 'lucide-vue-next';

const nivelBateria = ref<number | null>(null);
const cargando = ref(false);

// Gestión de la fecha y hora
dayjs.locale('es');
const horaActual = ref(dayjs().format('HH:mm'));
const fechaActual = ref(dayjs().format('DD/MM/YYYY'));

const fechaTooltip = ref(dayjs().locale('es').format('DD [de] MMMM [de] YYYY'));


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
            <Wifi class="iconos-utilidades" ></Wifi>

            <div class="div-bateria" :data-bateria="textoBateria">
                <component :is="iconoBateria" class="iconos-utilidades" />
            </div>
        </div>

        <!-- Fecha y hora -->
        <div class="fecha-hora" :data-fecha="fechaTooltip" >
            <p>{{ horaActual }}</p>
            <p>{{ fechaActual }}</p>
        </div>
    </div>
</template>


<style>
    .div-utilidades {
        position: absolute;
        right: 10px;
        display: flex;
        gap: 3px;
        align-items: center;
    }
    .div-utilidades p {
        margin: 0;
        font-size: .75em;
    }

    /* FECHA Y HORA */
    .fecha-hora {
        text-align: right;
        border-radius: 5px;
        padding: 0px 8px;
        border: 1px solid transparent;
        transition: .1s ease;
        color: #FFF;
    }
    .fecha-hora:hover {
        background-color: #ffffff11;
        border-color: #ffffff15;
    }
    .fecha-hora::after {
        content: attr(data-fecha);
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
        bottom: 54px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity .3s ease .1s;
        pointer-events: none;
    }
    .fecha-hora:hover::after {
        opacity: 1;
        transition-delay: .5s;
    }
    
    /* BATERÍA */
    .div-bateria-wifi {
        display: flex;
        align-items: center;
        gap: 9px;
        border-radius: 5px;
        width: 100%;
        height: 38px;
        padding: 0px 7px;
        border: 1px solid transparent;
        transition: .1s ease;
    }
    .div-bateria-wifi:hover {
        background-color: #ffffff11;
        border-color: #ffffff15;
    }
    .div-bateria {
        position: relative;
        display: flex;
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
        bottom: 45px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity .3s ease .1s;
        pointer-events: none;
    }
    .div-bateria:hover::after {
        opacity: 1;
        transition-delay: .5s;
    }
    .iconos-utilidades {
        width: 18px;
        height: 18px;
        color: #FFF;
    }
</style>