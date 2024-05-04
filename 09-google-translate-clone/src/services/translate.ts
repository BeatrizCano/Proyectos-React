import  OpenAI  from 'openai';
import { SUPPORTED_LANGUAGES } from '../constants/constants';
import { type FromLanguage, type  Language } from "../Types/Language.type";

// Configura la clave de API
const apiKey = process.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey }); // Crea una instancia de OpenAI con la clave de API

export async function translate({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage,
  toLanguage: Language,
  text: string
}) {
  if (fromLanguage === toLanguage) return text;

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage];
  const toCode = SUPPORTED_LANGUAGES[toLanguage];

  // Define los mensajes
  const messages = [
    {
      role: 'user',
      content: `Translate from ${fromCode} to ${toCode}: ${text}`
    }
  ];

  try {
    // Realiza la solicitud de traducción
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: messages.map(message => message.content).join('\n'),
      max_tokens: 150 // Número máximo de tokens de respuesta
    });

    // Devuelve el contenido traducido
    return response.choices[0]?.text || '';
  } catch (error) {
    console.error('Error al traducir:', error);
    return ''; // Devuelve una cadena vacía en caso de error
  }
}