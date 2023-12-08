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
    prompt: `Analyze the below letter type: formal, informal, semi-formal. Check grammar, punctuation, spelling errors. And provide suggestions for improvement, offer explanations for corrections. Give feedback and assess the letter. Send result like the below format with html tags:
    <b>Letter type:</b> ['formal', 'informal', 'semi-formal'] <br>;
    <b>Word Count:</b> word count <br>;
    <b>Sentences:</b> sentences <br>;
    <b>Paragraphs:</b> paragraphs <br>;
    <b>Grammar Errors:</b> grammar mistakes <br>;
    <b>Spelling errors:</b> spelling errors <br>;
    <b>Overall Score:</b> score/12<br>
    <hr>
    <b>Corrected version:</b> <i>corrected letter</i><br>;
    <hr>
    <b>Explanation:</b> explanations<br>

    Question: ${body.question}
    Essay: ${body.letter}
    `
    ,
    max_tokens: 1200,
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
