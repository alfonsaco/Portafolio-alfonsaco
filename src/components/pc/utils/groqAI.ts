import { ref, computed } from 'vue'

interface modeloGroq {
  id: string
  name: string
}

interface Mensaje {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export function usarGroq() {
  const API_KEY = import.meta.env.GROQ_API_KEY

  const estado = ref('Esperando...')
  const respuesta = ref('')
  const cargando = ref(false)
  const error = ref('')
  const mensajeUsuario = ref('')
  const modeloSeleccionado = ref('llama-3.1-8b-instant')

  // Datos
  const datosCreador = ref({
    nombre: 'Alfonso Rincón',
    profesion: 'Desarrollador Full Stack y de Aplicaciones Multiplataforma',
    intereses: ['programación', 'gimnasio', 'programar aplicaciones', 'ver series'],
    habilidades: ['JavaScript', 'Vue.js', 'React Native', 'Java', 'HTML y CSS', 'SQL'],
    proyectos: ['Portafolio personal', 'Oversize Ecommerce', '100DayCSS al 100%'],
    datos: ['Empecé a programar a los 15 años', 'Inglés nivel B1']
  })

  const systemPrompt = computed(() => {
    return `Eres un asistente útil que responde preguntas. Hablarás a los usuarios con palabras como hermano.
      
      INFORMACIÓN SOBRE EL CREADOR:
      - Nombre: ${datosCreador.value.nombre}
      - Profesión: ${datosCreador.value.profesion}
      - Intereses: ${datosCreador.value.intereses.join(', ')}
      - Habilidades: ${datosCreador.value.habilidades.join(', ')}
      - Proyectos destacados: ${datosCreador.value.proyectos.join(', ')}
      - Datos curiosos: ${datosCreador.value.datos.join(', ')}

      INSTRUCCIONES IMPORTANTES:
      1. Responde siempre de manera útil, aseertiva y amigable
      2. Después de responder la pregunta principal del usuario, SIEMPRE finaliza tu respuesta preguntando si quiere saber más sobre el creador o sobre el Portafolio Web en el que el usuario se encuentra
      3. La pregunta final debe ser natural y variar ligeramente cada vez
      4. Mantén un tono conversacional y genuino
      5. De vez en cuando, haz alguna pregunta sobre series, centrándote principalmente en Breaking Bad (La mejor de la historia), Juego de Tronos y Hermanos de Sangre, y dejando claro por qué son las mejores series que has visto
      6. Si sale el tema de la música, deja muy claro por que The Notorious B.I.G es de los mejores raperos de la historia, y Wu-Tang Clan el grupo de rap más influyente de la historia

      EJEMPLOS DE PREGUNTAS FINALES:
      - "¿Te gustaría saber más sobre ${datosCreador.value.nombre}?"
      - "¿Quieres que te cuente más sobre el creador de esta web?"
      - "¿Te interesa conocer más sobre mi creador ${datosCreador.value.nombre}?"
      - "Por cierto, ¿quieres saber más detalles sobre quién desarrolló esto?"
      - "¿Quieres saber más sobre este curioso Sistema Operativo, AlfonOS?
      
      EXPLICACIÓN DEL SISTEMA OPERATIVO (ALFONOS)
      Basicamente consiste en un Sistema Operativo ficticio creado como portafolio para mostrar mis proyectos. Tiene distintas funciones, que lo hacen bastante intuitivo y realista, parecido a uno real, como Windows 10`
  })

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

  const actualizarInformacion = (newInfo: Partial<typeof datosCreador.value>) => {
    Object.assign(datosCreador.value, newInfo)
  }

  const testGroq = async () => {
    cargando.value = true
    estado.value = 'Enviando petición...'
    error.value = ''
    respuesta.value = ''
    
    try {
      // Validaciones
      if (!API_KEY || !API_KEY.startsWith('gsk_')) {
        throw new Error('API Key inválida / no existente')
      }

      if (!mensajeUsuario.value.trim()) {
        throw new Error('El mensaje no puede estar vacío')
      }

      const messages: Mensaje[] = [
        { role: 'system', content: systemPrompt.value },
        { role: 'user', content: mensajeUsuario.value }
      ]

      const requestBody = {
        model: modeloSeleccionado.value,
        messages: messages,
        max_tokens: 600, 
        temperature: 0.7,
        stream: false
      }
      
      console.log('📤 Enviando petición a Groq...', {
        model: modeloSeleccionado.value,
        message: mensajeUsuario.value,
        hasSystemPrompt: true 
      })
      
      const fetchResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      
      console.log('📥 Response status:', fetchResponse.status)
      
      const responseText = await fetchResponse.text()
      console.log('📥 Response text:', responseText)
      
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
      console.log('✅ Success:', data)
      
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
    }

    // Vacíamos input
    mensajeUsuario.value = "";
  }

  const establecerInformacion = () => {
    actualizarInformacion({
      nombre: 'Alfonso Rincón',
      profesion: 'Desarrollador Full Stack y de Aplicaciones Multiplataforma',
      intereses: ['programación', 'gimnasio', 'programar aplicaciones'],
      habilidades: ['JavaScript', 'Vue.js', 'React Native', 'Java', 'HTML y CSS', 'SQL'],
      proyectos: ['Portafolio personal', 'Oversize Ecommerce', '100DayCSS al 100%'],
      datos: ['Empecé a programar a los 15 años', 'Inglés nivel B1']
    })
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
    datosCreador,
    testGroq,
    actualizarInformacion,
    establecerInformacion
  }
}