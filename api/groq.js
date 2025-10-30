export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const respuesta = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await respuesta.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error en el backend:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}