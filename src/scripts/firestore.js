import { doc, updateDoc } from "firebase/firestore";

 export const updateUser = async(userId) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
  expiresAt: '',
  tariff: '',
  balance: '0 UZS',
  status: 'unpaid'
});
}
