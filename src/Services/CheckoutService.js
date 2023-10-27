import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getWhatsapp = async () => {
  try {
    const whatsappDocRef = doc(db, "settings", "whatsapp"); // "whatsapp" es el ID del documento
    const whatsappDocSnapshot = await getDoc(whatsappDocRef);

    if (whatsappDocSnapshot.exists()) {
      // El documento existe, puedes acceder a los datos así:
      const whatsapp = {
        id: whatsappDocSnapshot.id,
        ...whatsappDocSnapshot.data(),
      };
      return whatsapp;
    } else {
      console.log("El documento de WhatsApp no existe.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el número de WhatsApp:", error);
    throw error; // Puedes manejar el error de acuerdo a tus necesidades
  }
};

export const sendOrder = async (order) => {
  console.log("Intentando enviar la orden a Firebase Cloud Function")

  try {
    const orderWithISODate = {
      ...order,
      date: order.date.toISOString(),
    };
    console.log("Orden con fecha ISO:", orderWithISODate);
    await addDoc(collection(db, "orders"), orderWithISODate);
    return true;
  } catch (error) {
    console.error("Error al enviar la orden:", error);
    throw error; // Puedes manejar el error de acuerdo a tus necesidades
  }
};


