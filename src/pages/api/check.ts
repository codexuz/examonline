import type { APIRoute } from 'astro'
const Api = import.meta.env.Api
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: Api, // defaults to process.env["OPENAI_API_KEY"]
});

export const POST: APIRoute = async ({request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const {title, content} = body
    try{
    const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `You know everything about scoring IELTS essays. You assess the given essay  ${content} of the given question ${title} in terms of IELTS Writing Criteria and essay sentences count, paragraphs count, and list the used academic words, and provide feedback and show grammar and spelling errors.You must follow this JSON output : 
      {
        "Band": "band",
        "Sentences": "sentences",
        "Paragraphs": "paragraphs",
        "Feedback": "feedback",
        "TaskAchievement": "taskachievement feedback",
        "CoherenceCohesion": "coherence&cohesion feedback",
        "GrammarRange": "grammarRange feedback",
        "LexicalResource": "lexicalResources feedback",
        "AcademicWord"={["academicWords"]},
      }
    `,
    max_tokens: 800,
    temperature: 0
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
