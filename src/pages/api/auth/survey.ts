import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "@lib/firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
  const firestore = getFirestore(app);

  /* Get form data */
  const formData = await request.formData();
  
  const id = formData.get("id")?.toString();
  const ip = formData.get("ip")?.toString();
  const region = formData.get("region")?.toString();
  const email = formData.get("email")?.toString();
  const picture = formData.get("picture")?.toString();
  const name = formData.get("name")?.toString();
  const birth = formData.get("birth")?.toString();
  const level = formData.get("level")?.toString();

  if (!name || !level) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }
    
   const date = new Date();
    // Save additional data to Firestore

    try {
    await firestore.collection("users").doc(id).set({
      name,
      email,
      status:"unpaid",
      joined: date,
      tariff:"",
      expiresAt:"",
      picture: picture,
      balance: "0 UZS",
      birth: birth,
      level: level,
      region: region,
      ip
    });

    return redirect("/dashboard");
  } catch (error: any) {
    return new Response(`Error: ${error.message}`, { status: 400 });
  }
};
