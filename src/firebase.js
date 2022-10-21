import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import { collection, getDocs } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getTubs() {
  const tubsCollectionRef = collection(db, "tubs");
  return await getDocs(tubsCollectionRef);
}

export async function getTubByTitle(id) {
  const tubsCollectionRef = collection(db, "tubs");
  const tubs = await getDocs(tubsCollectionRef);
  const filteredTub = tubs.docs.filter((tub) => tub.id === id);
  return filteredTub[0];
}

export async function getTubDescriptionByTitle(title) {
  const descriptionCollectionRef = collection(db, "descriptions");
  const tubs = await getDocs(descriptionCollectionRef);
  const filteredTub = tubs.docs.filter((tub) => tub.data().title === title);
  return filteredTub[0];
}
