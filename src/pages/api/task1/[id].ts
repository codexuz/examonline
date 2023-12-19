import type { APIRoute } from "astro";
import { app } from "@lib/firebase/server";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);
const courseRef = db.collection("task1");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const body = formData.get("body")?.toString();
  const date = formData.get("date")?.toString();

  if (!title || !body || !date) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  if (!params.id) {
    return new Response("Cannot find a lesson", {
      status: 404,
    });
  }

  try {
    await courseRef.doc(params.id).update({
      title: title,
      body: body,
      date: date
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/courses/task-1");
};

export const DELETE: APIRoute = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find a lesson", {
      status: 404,
    });
  }

  try {
    await courseRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/courses/task-1");
};