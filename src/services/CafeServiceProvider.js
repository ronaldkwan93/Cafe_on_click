import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getMenuData = async () => {
    const querySnapshot = await getDocs(collection(db, "Items"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return data;
  };