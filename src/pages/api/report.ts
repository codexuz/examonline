import type { APIRoute } from 'astro'
const Api = import.meta.env.Api
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: Api, 
});

export const POST: APIRoute = async ({request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const {transcript} = body 
    try{
    const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `You know everything about scoring IELTS speaking. Please, provide a detailed analysis of the candidate's performance in the following  speaking transcript: ${transcript}. Assess it in terms of fluency, coherence, pronunciation, lexical resource, grammatical range and accuracy and give score out of 75. Additionally, provide CEFR level and Identify areas for improvement, and suggest ways the candidate can enhance their overall speaking proficiency. Your output must be a JSON following this structure: 
      {
        "overall_score": "score/75",
        "feedback": "feedback",
        "lexical_resources": "lexical resources",
        "grammar": "grammar",
        "fluency": "fluency",
        "pronunciation": "pronunciation",
        "suggestion": "suggestion",
        "cefr_level":"cefr level"
      }
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
