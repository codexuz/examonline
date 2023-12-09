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
    prompt: `Generate a high score IELTS essay sample to this topic with html <p> and <br> tags: ${body.question}
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