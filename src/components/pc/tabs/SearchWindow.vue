<script setup lang="ts">
import { usarIconos } from '../../../data/UseIcons';
import Icono from '../models/SearchIcon.vue'
import { computed } from 'vue';

const { iconosSinCarpeta } = usarIconos();

const props = defineProps<{
    buscadorVisible: boolean, textoBuscado: string
}>();

// Abrir las aplicaciones
const emit = defineEmits<{
    (e: 'cerrar-index'): void
    (e: 'mostrar-email'): void
    (e: 'mostrar-sobre-mi'): void
    (e: 'mostrar-terminal'): void
    (e: 'mostrar-flappy'): void
    (e: 'mostrar-codezen'): void
    (e: 'mostrar-crm'): void
}>();

const abrirAplicacionIndex = (aplicacion: {texto: string, imagen: string, url?: string, action?: string }) => {
    if(aplicacion.url) {
        window.open(aplicacion.url, '_blank')
    } else {
        if(aplicacion.action === 'contacto') {
            emit('mostrar-email');
        } else if(aplicacion.action === 'sobremi') {
            emit('mostrar-sobre-mi');
        } else if(aplicacion.action === 'terminal') {
            emit('mostrar-terminal');
        } else if(aplicacion.action === 'flappy') {
            emit('mostrar-flappy');
        } else if(aplicacion.action === 'codezen') {
            emit('mostrar-codezen');
        } else if(aplicacion.action === 'crm') {
            emit('mostrar-crm');
        }
    }

    emit('cerrar-index');
}

// Mostrar la búsqueda
const iconosFiltrados = computed(() => {
  const texto = props.textoBuscado.trim().toLowerCase();
  if (!texto) return iconosSinCarpeta.value;

  return [...iconosSinCarpeta.value]
    .filter((app: any) => app.texto.toLowerCase().includes(texto))
    .sort((a: any, b: any) => {
      const aEmpieza = a.texto.toLowerCase().startsWith(texto);
      const bEmpieza = b.texto.toLowerCase().startsWith(texto);
      
      if (aEmpieza && !bEmpieza) return -1;
      if (!aEmpieza && bEmpieza) return 1;
      return 0;
    });
});

</script>

<template>
    <div class="div-ventana-buscador" :class="props.buscadorVisible ? 'buscador-visible' : 'buscador-hidden'">
        <div class="div-aplicaciones-buscador">
            <Icono v-for="(aplicacion, i) in iconosFiltrados" 
                :key="i" 
                :texto="aplicacion.texto" 
                :imagen="aplicacion.imagen"
                @click="abrirAplicacionIndex(aplicacion)"></Icono>
        </div>
        <div class="div-informacion-buscador">
            <h3>Información del Sistema Operativo</h3>
            <p>AlfonOS es un sistema operativo funcional, que une las principales funcionalidades
                de un sistema operativo común, y muestra información sobre su creador "Alfonso Rincón".
                A lo largo de su exploración podrás encontrar los misterios que este alberga.
            </p>
            <h5>Funcionalidades</h5>
            <ul>
                <li>Menú de escritorio</li>
                <li>Área de selección en el escritorio</li>
                <li>Información de contacto</li>
                <li>Cambiar wallpapper</li>
                <li>Terminal con comandos e Easter Eggs</li>
                <li>Cambio del tamaño de los iconos del escritorio</li>
                <li>Tooltips en iconos</li>
                <li>Búsqueda de aplicaciones</li>
                <li>Hora y fecha en tiempo real</li>
                <li>Porcentaje y estado de la batería</li>
                <li>IA funcional con información de la web</li>
                <li>Ventanas con información personal</li>
                <li>Carpeta con proyectos</li>
                <li>Versión móvil</li>
            </ul>
        </div>
    </div>
</template>


<style>
    /* NOTA PERSONAL: sumar los pixeles de cada icono de la taskbar */
    .div-ventana-buscador {
        width: 600px;
        height: 500px;
        position: absolute;
        background-color: #222;
        bottom: 49px;
        left: 50%;
        transform: translateX(calc(-50% - (3 * 20px))) translateY(110%);
        border: 1px solid #999;
        border-radius: 5px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        overflow: hidden;
        visibility: visible;
        display: flex;
        transition: .5s ease;
        z-index: 350;
    }
    .buscador-visible {
        transform: translateX(calc(-50% - (3 * 20px))) translateY(0%);
    }
    .buscador-hidden {
        transform: translateX(calc(-50% - (3 * 20px))) translateY(110%);
        transition: .4s ease;
    }

    /* SECCIÓN APLICACIONES BUSCADAS */
    .div-aplicaciones-buscador {
        height: 100%;
        width: 40%;
        border-right: 1px solid #999;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }


    /* SECCIÓN DE INFORMACIÓN DEL S.O */
    .div-informacion-buscador {
        height: 100%;
        width: 60%;
        padding: 20px;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        user-select: none;
    }
    .div-informacion-buscador * {
        margin: 0;
        text-align: left;
    }
    .div-informacion-buscador h3 {
        color: #cecece;
        font-variant: small-caps;
        font-weight: 600;
        margin-bottom: 5px;
    }
    .div-informacion-buscador h5 {
        color: #cecece;
        font-variant: small-caps;
        font-size: .95em;
        font-weight: 600;
        margin-bottom: 5px;
        margin-top: 15px;
    }
    .div-informacion-buscador p {
        color: #a8a8a8;
        font-size: .8em;
    }
    .div-informacion-buscador ul {
        color: #a8a8a8;
        font-size: .8em;
        padding-left: 20px;
        list-style: '-';
    }
    .div-informacion-buscador ul li {
        padding-left: 5px;
    }
</style>