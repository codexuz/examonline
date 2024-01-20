import type { APIRoute } from "astro";
import { app } from "@lib/firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
  const body = await request.json()
  const {markup} = body
  
  if (!markup) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const blogRef = db.collection("blog");
    await blogRef.add({
      markup,
      created: new Date()
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/");
};
