import { doc, updateDoc } from "firebase/firestore";

async function updateUser(userId){
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
  expiresAt: '',
  tariff: '',
  balance: '0 UZS',
  status: 'unpaid'
});
}
