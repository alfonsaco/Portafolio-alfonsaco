export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { mensaje } = req.body;
  if (!mensaje) {
    return res.status(400).json({ error: 'Falta el mensaje del usuario' });
  }

  try {
    // Datos
    const datosCreador = {
      nombre: 'Alfonso Rincón Cuerva',
      profesion: 'Desarrollador Full-Stack y de Aplicaciones Multiplataforma',
      intereses: ['programación', 'gimnasio y deporte', 'programar aplicaciones'],
      habilidades: ['JavaScript', 'Vue.js', 'React Native', 'Java', 'HTML y CSS', 'SQL', 'NoSQL', 'Git y GitHub'],
      proyectos: ['Portafolio personal', 'Oversize Ecommerce', '100DayCSS al 100%', 'CodeZen', 'CRM', 'Flappy Parfums'],
      datos: ['Inglés nivel B1']
    };
  
    const systemPrompt = `
      Eres un asistente útil que responde preguntas. Hablarás de forma formal.
      
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

      EJEMPLOS DE PREGUNTAS FINALES:
      - "¿Te gustaría saber más sobre ${datosCreador.value.nombre}?"
      - "¿Quieres que te cuente más sobre el creador de esta web?"
      - "¿Te interesa conocer más sobre mi creador ${datosCreador.value.nombre}?"
      - "Por cierto, ¿quieres saber más detalles sobre quién desarrolló esto?"
      - "¿Quieres saber más sobre este curioso Sistema Operativo, AlfonOS?

      EL SISTEMA OPERATIVO ALFONOS CONTIENE LAS SIGUIENTES FUNCIONALIDADES:
      - Menú de escritorio
      - Área de selección en el escritorio
      - Información de contacto
      - Cambiar wallpapper
      - Terminal con comandos e Easter Eggs
      - Cambio del tamaño de los iconos del escritorio
      - Tooltips en iconos
      - Búsqueda de aplicaciones
      - Hora y fecha en tiempo real
      - Porcentaje y estado de la batería
      - IA funcional con información de la web
      - Ventanas con información personal
      - Carpeta con proyectos
      - Versión móvil
      
      EXPLICACIÓN DEL SISTEMA OPERATIVO (ALFONOS)
      Basicamente consiste en un Sistema Operativo ficticio creado como portafolio para mostrar mis proyectos. Tiene distintas funciones, que lo hacen bastante intuitivo y realista, parecido a uno real, como Windows 10
    `;

    const requestBody = {
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: mensaje }
      ],
      max_tokens: 600,
      temperature: 0.7,
      stream: false
    };

    const respuesta = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await respuesta.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error en el backend:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}