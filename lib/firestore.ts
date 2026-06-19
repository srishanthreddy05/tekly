import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface WaitlistEntry {
  name: string;
  email: string;
  source: string;
  ipAddress: string;
  userAgent: string;
}

/**
 * Searches the 'waitlist' collection to see if the given email already exists.
 * Returns true if duplicate is found, false otherwise.
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  const waitlistCollection = collection(db, "waitlist");
  const duplicateQuery = query(waitlistCollection, where("email", "==", email));
  const duplicateSnapshot = await getDocs(duplicateQuery);
  return !duplicateSnapshot.empty;
}

/**
 * Adds a new entry to the 'waitlist' collection.
 */
export async function addWaitlistEntry(data: WaitlistEntry): Promise<void> {
  const waitlistCollection = collection(db, "waitlist");
  await addDoc(waitlistCollection, {
    name: data.name,
    email: data.email,
    source: data.source,
    joinedAt: serverTimestamp(),
    ipAddress: data.ipAddress,
    userAgent: data.userAgent,
  });
}
