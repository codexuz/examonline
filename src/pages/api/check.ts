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
    prompt: `You know everything about scoring IELTS essays. You assess the given essay of the given question in terms of IELTS Writing Criteria and essay words count, sentences count and paragraphs count, and list the used academic words, and provide feedback and show grammar and spelling errors.Your output must  follow this structure: "Band": the band, "Word Count":word count,"Sentences":sentences, "Paragraphs":paragraphs, “Feedback”: your feedback, "Taskachievement": task achievement, "Coherence&Cohesion": coherence and cohesion, "Grammar": grammar, "Lexical Resource": lexical resources,"Academic Words":academic words
    Question: ${body.question}
    Essay: ${body.essay}`,
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
