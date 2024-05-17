import { doc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase/client";

 export const updateUser = async(userId) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
  expiresAt: '',
  tariff: '',
  balance: '0 UZS',
  status: 'unpaid'
});
}


// Calculate the date one month from now



export const updatePaymentInfoFifty = async(userId) => {
const currentDate = new Date();
const nextMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
console.log(nextMonthDate)
  const userRef = doc(db, "users", userId);
 await updateDoc(userRef, {
  expiresAt: nextMonthDate,
  tariff: 'basic',
  balance: '50. 000 UZS',
  status: 'paid'
});

}


export const updatePaymentInfoHundred = async(userId) => {
  const currentDate = new Date();
  const nextMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() + 2));
  console.log(nextMonthDate)
    const userRef = doc(db, "users", userId);
   await updateDoc(userRef, {
    expiresAt: nextMonthDate,
    tariff: 'pro',
    balance: '100. 000 UZS',
    status: 'paid'
  });
  
  }
