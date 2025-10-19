<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';

const horaActual = ref(dayjs().format('HH:mm'));
const fechaActual = ref(dayjs().format('DD/MM/YYYY'));

const actualizarFechaHora = () => {
    horaActual.value = dayjs().format('HH:mm');
    fechaActual.value = dayjs().format('DD/MM/YYYY');
};

onMounted(() => {
    setInterval(() => {
        actualizarFechaHora();    
    }, 1000);
});
</script>


<template>
    <!-- Sección hora, wifi... -->
    <div class="div-utilidades">

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
    }
    .div-utilidades p {
        margin: 0;
        font-size: .75em;
    }
    .fecha-hora {
        text-align: right;
    }
</style>