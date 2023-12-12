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
    prompt: `You know everything about scoring IELTS essays. You assess the given essay  ${body.essay} of the given question ${body.question} in terms of IELTS Writing Criteria and essay words count, count the exact number of words in the essay and paragraphs count, and list the used academic words, and provide feedback and show grammar and spelling errors and provide high level essay sample to the essay's question.Your output must  follow this structure with html tags and show the grammar and spelling errors with <mark> tag: 
    <b>Band:</b> band <br>;
    <b>Sentences:</b> sentences <br>;
    <b>Paragraphs:</b> paragraphs <br>;
    <b>Feedback</b>: feedback<br>;
    <b>Task Achievement</b>:  task achievement<br>;
    <b>Coherence and Cohesion:</b> coherence and cohesion<br>;
    <b>Grammar Range:</b> grammar range <br>;
    <b>Lexical Resource:</b> lexical resources <br>;
    <b>Academic Word:</b>academic words<br>
    <hr>
    <b>Sample Essay </b><br> <i>sample essay</i><br>;
    `,
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
