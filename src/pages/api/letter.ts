import type { APIRoute } from 'astro'
const Api = import.meta.env.Api
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: Api, // defaults to process.env["OPENAI_API_KEY"]
});

export const POST: APIRoute = async ({request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    try{
    const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `Analyze the below letter type: formal, informal, semi-formal. Check grammar, punctuation, spelling errors. And provide suggestions for improvement, offer explanations for corrections. Give feedback and assess the letter. Send result like the below format:
    Letter type: ['formal', 'informal', 'semi-formal'];
    Word Count: word count;
    Sentences: sentences;
    Paragraphs: paragraphs;
    Grammar Errors: grammar mistakes;
    Spelling errors: spelling errors;
    Overall Score: score/12
    <hr>
    Corrected version: <i>corrected letter</i>;
    <hr>
    Explanation: explanations

    Question: ${body.question}
    Essay: ${body.letter}
    `
    ,
    max_tokens: 800,
    temperature: 0,
  });

    // Return the OpenAI API response
    return new Response (
      JSON.stringify(completion),
      { status: 200 }
    )

}
  catch(error: any){
        return new Response(`Error: ${error.message}`, { status: 400 });

  }

  }
  



  
}