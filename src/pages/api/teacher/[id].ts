import type { APIRoute } from "astro";
import { app } from "@lib/firebase/server";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);
const courseRef = db.collection("teachers");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const name = formData.get("name")?.toString();
  const experience = formData.get("experience")?.toString();
  const level = formData.get("level")?.toString();
  const phone = formData.get("phone")?.toString();
  const birth = formData.get("birth")?.toString();
  const description = formData.get("description")?.toString();
  const telegram = formData.get("telegram")?.toString();
  const youtube = formData.get("youtube")?.toString();
  const university = formData.get("university")?.toString();

  if (!name || !experience || !level || !telegram) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  if (!params.id) {
    return new Response("Cannot find a teacher", {
      status: 404,
    });
  }

  try {
    await courseRef.doc(params.id).update({
      name: name,
      experience: experience,
      level: level,
      phone: phone,
      birth: birth,
      description: description,
      telegram: telegram,
      youtube: youtube,
      university: university
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/teachers");
};

export const DELETE: APIRoute = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find a teacher", {
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
  return redirect("/teachers");
};