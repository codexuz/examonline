import type { APIRoute } from "astro";
import { app } from "@lib/firebase/server";
import { getFirestore } from "firebase-admin/firestore";


export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const experience = formData.get("experience")?.toString();
  const level = formData.get("level")?.toString();
  const phone = formData.get("phone")?.toString();
  const year = formData.get("year")?.toString();
  const description = formData.get("description")?.toString();
  const telegram = formData.get("telegram")?.toString();
  const youtube = formData.get("youtube")?.toString();
  const university = formData.get("university")?.toString();
  const position = formData.get("position")?.toString();

  if (!name || !experience || !level || !telegram) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const teacherRef = db.collection("teachers");
    await teacherRef.add({
      name: name,
      experience: experience,
      level: level,
      description: description,
      phone: phone,
      year: year,
      telegram: telegram,
      youtube: youtube,
      university: university,
      position: position,
      avatar: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg'
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/teachers");
};