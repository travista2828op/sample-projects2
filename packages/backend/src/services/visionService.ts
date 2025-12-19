import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PROMPT_TEMPLATE = `Analyze this image in detail and generate a comprehensive, structured prompt that could be used to recreate this image exactly. 

The prompt should include:
1. Main subject and objects
2. Composition and layout
3. Colors and color palette
4. Lighting and shadows
5. Textures and materials
6. Style and artistic elements
7. Mood and atmosphere
8. Perspective and angle
9. Any text or writing visible
10. Background details
11. Size and proportions
12. Special effects or unique characteristics

Format the output as a single, detailed paragraph that captures all visual elements needed for accurate recreation.`;

export async function generatePrompt(
  base64Image: string,
  mimeType: string
): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured');
  }

  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4-vision',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: `data:${mimeType};base64,${base64Image}`,
              },
            },
            {
              type: 'text',
              text: PROMPT_TEMPLATE,
            },
          ],
        },
      ],
    });

    const textContent = response.choices[0]?.message?.content;
    
    if (!textContent) {
      throw new Error('No text response from vision API');
    }

    return textContent;
  } catch (error) {
    console.error('Vision API error:', error);
    throw error;
  }
}
