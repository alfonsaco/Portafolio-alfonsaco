import { ref, computed } from 'vue'
import dataIconos from './apps.json';

export function usarIconos() {
    const todosLosIconos = ref(dataIconos);

    const iconosDerecha = computed(() => 
        todosLosIconos.value.filter(icono => icono.escritorio === 'dcha')
    );

    const iconosIzquierda = computed(() => 
        todosLosIconos.value.filter(icono => icono.escritorio === 'izq')
    );

    const iconosProyectos = computed(() => 
        todosLosIconos.value.filter(icono => icono.escritorio === 'proyectos')
    );

    return {
        todosLosIconos,
        iconosDerecha,
        iconosIzquierda,
        iconosProyectos
    };
}