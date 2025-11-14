import { ref, computed } from 'vue'

interface modeloGroq {
  id: string
  name: string
}

export function usarGroq() {
  const estado = ref('Esperando...')
  const respuesta = ref('')
  const cargando = ref(false)
  const error = ref('')
  const mensajeUsuario = ref('')
  const modeloSeleccionado = ref('llama-3.1-8b-instant')


  // Modelos disponibles
  const modelosDisponibles = ref<modeloGroq[]>([
    { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B Instant' },
  ])

  const formattedResponse = computed(() => {
    if (!respuesta.value) return ''
    try {
      const data = JSON.parse(respuesta.value)
      return data.choices?.[0]?.message?.content || 'No hay contenido'
    } catch {
      return respuesta.value
    }
  })


  const testGroq = async () => {
    cargando.value = true
    estado.value = 'Enviando petición...'
    error.value = ''
    respuesta.value = ''
    
    try {
      if (!mensajeUsuario.value.trim()) {
        throw new Error('El mensaje no puede estar vacío')
      }

      const requestBody = {
        mensaje: mensajeUsuario.value
      }    
      
      const fetchResponse = await fetch('api/groq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      })
      
      console.log('📥 Response status:', fetchResponse.status)
      
      const responseText = await fetchResponse.text()
      
      if (!fetchResponse.ok) {
        let errorMessage = `HTTP ${fetchResponse.status}`
        try {
          const errorData = JSON.parse(responseText)
          errorMessage = errorData.error?.message || responseText
        } catch {
          errorMessage = responseText
        }
        throw new Error(errorMessage)
      }
      
      const data = JSON.parse(responseText)
      
      estado.value = `Éxito! - Modelo: ${modeloSeleccionado.value}`
      respuesta.value = JSON.stringify(data, null, 2)
      
    } catch (err: any) {
      console.error('💥 Error completo:', err)
      estado.value = 'Error'
      error.value = `Error: ${err.message}`
      
      // Errores comunes
      if (err.message.includes('401')) {
        error.value += ' - API Key inválida o expirada'
      } else if (err.message.includes('429')) {
        error.value += ' - Límite de tasa excedido'
      } else if (err.message.includes('Network Error')) {
        error.value += ' - Error de red o CORS'
      } else if (err.message.includes('decommissioned')) {
        error.value += ' - El modelo está obsoleto, usa otro modelo'
      }
    } finally {
      cargando.value = false
      // Vacíamos input
      mensajeUsuario.value = "";
    }
  }


  return {
    estado,
    respuesta,
    cargando,
    error,
    mensajeUsuario,
    modeloSeleccionado,
    modelosDisponibles,
    formattedResponse,
    testGroq
  }
}