<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { ref, onMounted } from 'vue';

dayjs.locale('es');
const hora = ref(dayjs().format('HH:mm'));
const fechaFinal = ref(dayjs().locale('es').format('ddd DD MMM'));

const actualizarHora = () => {
    hora.value = dayjs().format('HH:mm');

}

onMounted(() => {
    setInterval(() => {
        actualizarHora();    
    }, 1000);
    
});
</script>


<template>
    <div class="contenedor-widget-hora">
        <h1>{{ hora }}</h1>
        <p>{{ fechaFinal }}</p>
    </div>
</template>


<style>
    .contenedor-widget-hora {
        width: 100%;
        padding: 25px 0px;
        user-select: none;
    }
    .contenedor-widget-hora * {
        margin: 0;
    }
    .contenedor-widget-hora h1 {
        font-size: 4.7em;
    }
    .contenedor-widget-hora p {
        font-size: 1em;
    }
</style>