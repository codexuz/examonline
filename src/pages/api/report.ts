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
    prompt: `check the following IELTS speaking transcript result and assess it in terms of grammar, lexical resources and fluency and prononciation and give score out of 75:${body.text}. You should follow this structure: 
    Feedback: feedback<br>, 
    Lexical Resources: lexical resources<br>, 
    Grammar: grammar<br>, 
    Fluency": fluency<br>,
    Pronunciation:pronunciation<br>, 
    Overall Score: score/75
    `
    ,
    max_tokens: 800,
    temperature: 0,
  });

    // Return the OpenAI API response
    return new Response (
      JSON.stringify(completion.choices[0].text),
      { status: 200 }
    )

}
  catch(error: any){
        return new Response(`Error: ${error.message}`, { status: 400 });

  }

  }
  



  
}