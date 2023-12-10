import type { APIRoute } from 'astro'
const Api = import.meta.env.Api
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: Api, 
});

export const POST: APIRoute = async ({request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    try{
    const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `Please provide a detailed analysis of the candidate's performance in the following CEFR speaking transcript result: ${body.transcript}. Assess it in terms of fluency, coherence, pronunciation, lexical resource, grammatical range and accuracy and give score out of 75. Additionally, comment on the candidate's ability to express ideas clearly, provide relevant examples, and handle questions effectively. Identify areas for improvement, and suggest ways the candidate can enhance their overall speaking proficiency.You should follow this structure with html tags: 
    <b>Overall Score:</b> score/75<br>\n,
    <b>Feedback:</b> feedback<br>, 
    <b>Lexical Resources:</b> lexical resources<br>, 
    <b>Grammar:</b> grammar<br>, 
    <b>Fluency":</b> fluency<br>,
    <b>Pronunciation:</b>pronunciation<br><br> 
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
