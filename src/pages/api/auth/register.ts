import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../lib/firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  /* Get form data */
  const formData = await request.formData();

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }


  /* Create user */
  try {
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name,
      photoURL: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
    });
    
   
    // Save additional data to Firestore
    await firestore.collection("users").doc(userRecord.uid).set({
      name,
      email,
      status:"unpaid",
      joined: firestore.FieldValue.serverTimestamp(),
      tariff:"",
      expiresAt:"",
      picture: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      balance: "0 UZS",
    });

    return redirect("/signin");
  } catch (error: any) {
    return new Response(`Error: ${error.message}`, { status: 400 });
  }
};
