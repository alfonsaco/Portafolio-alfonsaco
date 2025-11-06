<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { onMounted, ref, computed } from 'vue';

// Hora
dayjs.locale('es');
const hora = ref(dayjs().format('HH:mm'));

// Obtener batería
import { Battery, BatteryFull, BatteryCharging, BatteryLow, BatteryMedium, Wifi } from 'lucide-vue-next';

const nivelBateria = ref<number | null>(null);
const cargando = ref(false);

onMounted(async () => {
    setInterval(() => {
        hora.value = dayjs().format('HH:mm');
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
    return nivelBateria.value+'%';
});

</script>


<template>
    <div class="toolbar-movil">
        <div>{{ hora }}</div>

        <div class="toolbar-div-bateria">
            <Wifi class="icono-toolbar"></Wifi>
            <div>                
                <component :is="iconoBateria" class="icono-toolbar" />
                <p>{{ textoBateria }}</p>
            </div>
        </div>
    </div>
</template>


<style>
    .toolbar-movil {
        width: 100%;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.055);
        backdrop-filter: blur(3px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        font-size: .9em;
    }

    /* PARTE BATERÍA Y WIFI */
    .toolbar-div-bateria {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    .toolbar-div-bateria > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
        font-size: .85em;
    }
    .toolbar-div-bateria p {
        margin: 0;
    }
    .icono-toolbar {
        width: 20px;
        height: 20px;
    }
</style>