
import { GoogleGenAI, Type } from "@google/genai";
import { Question } from '../types';
import { QUESTIONS_PER_QUIZ } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    questions: {
      type: Type.ARRAY,
      description: `Uma lista de ${QUESTIONS_PER_QUIZ} perguntas de quiz.`,
      items: {
        type: Type.OBJECT,
        properties: {
          questionText: {
            type: Type.STRING,
            description: 'O texto da pergunta do quiz.',
          },
          options: {
            type: Type.ARRAY,
            description: 'Um array com exatamente 4 respostas possíveis.',
            items: { type: Type.STRING },
          },
          correctAnswer: {
            type: Type.STRING,
            description: 'A resposta correta, que deve ser uma das strings do array de opções.',
          },
          explanation: {
            type: Type.STRING,
            description: 'Uma breve explicação do porquê a resposta está correta.',
          },
        },
        required: ['questionText', 'options', 'correctAnswer', 'explanation'],
      },
    },
  },
  required: ['questions'],
};

export const generateQuizQuestions = async (category: string, difficulty: string): Promise<Question[]> => {
  try {
    const prompt = `Gere ${QUESTIONS_PER_QUIZ} perguntas de quiz de múltipla escolha, únicas e de alta qualidade, sobre ${category} com dificuldade ${difficulty}. As perguntas, mesmo no nível 'Fácil', devem ser inteligentes e desafiadoras, evitando obviedades ou perguntas excessivamente simples. Cada pergunta deve ter exatamente 4 opções. Uma das opções deve ser a resposta correta. Forneça uma breve explicação para cada resposta correta. A resposta deve ser em português do Brasil.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const parsed = JSON.parse(jsonText);
    
    // Validate the structure
    if (parsed && Array.isArray(parsed.questions)) {
      // Further validation to ensure questions have the right format
      return parsed.questions.filter((q: any) => 
        q.questionText && 
        Array.isArray(q.options) && 
        q.options.length === 4 && 
        q.correctAnswer &&
        q.options.includes(q.correctAnswer)
      );
    }
    
    console.error("Parsed JSON does not match expected schema:", parsed);
    return [];

  } catch (error) {
    console.error('Error generating quiz questions:', error);
    throw new Error('Falha ao gerar perguntas do quiz da API Gemini.');
  }
};
