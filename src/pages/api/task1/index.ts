import type { APIRoute } from "astro";
import { app } from "../../../lib/firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const body = formData.get("body")?.toString();
  const date = formData.get("date")?.toString();
  const video = formData.get("video")?.toString();

  if (!title || !body || !date) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const courseRef = db.collection("task1");
    await courseRef.add({
      title: title,
      body: body,
      date: date,
      video: video
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/courses/task-1");
};