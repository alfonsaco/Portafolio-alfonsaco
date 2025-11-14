export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { mensaje } = req.body;
  if (!mensaje) {
    return res.status(400).json({ error: 'Falta el mensaje del usuario' });
  }

  try {
    const systemPrompt = `
      Eres un asistente útil sobre el portafolio de Alfonso Rincón...
      (Aquí va todo tu systemPrompt fijo que estaba en el frontend)
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