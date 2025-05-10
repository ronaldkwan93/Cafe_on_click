import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
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

export const IsItemInCart = async (title) => {
  const collectionRef = collection(db, "Cart");
  const itemQuery = query(collectionRef, where("title", "==", title));
  const querySnapshot = await getDocs(itemQuery);
  if (querySnapshot.empty) {
    return false;
  } else {
    return true;
  }
};

export const updateQuantity = async (title, count) => {
    //query document, get quantity
    const collectionRef = collection(db, "Cart");
    const itemQuery = query(collectionRef, where("title", "==", title));
    const querySnapshot = await getDocs(itemQuery);
    if(!querySnapshot.empty) {
        const selectedDoc = querySnapshot.docs[0];
        const currentQuantity = selectedDoc.data().quantity || 0;
        const newQuantity = currentQuantity + count
        // update document with quantity + count
        const docRef = doc(db, "Cart", selectedDoc.id);
        
        await updateDoc(docRef, { quantity: newQuantity})

        return true;
    } else {
        return false;
    }
}


export const addItemToCart = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "Cart"), item);
    console.log("Cart item added with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding item to cart: ", e);
    throw e;
  }
};

export const getCartProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "Cart"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

export const subscribeToCart = (callback) => {
  const unsubscribe = onSnapshot(
    collection(db, "Cart"),
    (snapshot) => {
      const cartItems = [];
      snapshot.forEach((doc) => {
        cartItems.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      callback(cartItems);
    },
    (error) => {
      console.error("Error subscribing to cart: ", error);
    }
  );

  return unsubscribe;
};

export const deleteProductFromCart = async (itemId) => {
  await deleteDoc(doc(db, "Cart", itemId));
  return true;
};
