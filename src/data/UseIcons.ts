import { ref, computed } from 'vue'
import dataIconos from './apps.json';

export function usarIconos() {
    const todosLosIconos = ref(dataIconos);

    const iconosDerecha = computed(() => 
        todosLosIconos.value.filter(icono => icono.escritorio === 'dcha')
    );

    const iconosIzquierda = computed(() => 
        todosLosIconos.value.filter(icono => icono.escritorio === 'izq')
    )

    return {
        todosLosIconos,
        iconosDerecha,
        iconosIzquierda
    };
}