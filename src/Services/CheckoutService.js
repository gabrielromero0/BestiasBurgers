import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";


// Función asincrónica para enviar una orden a Firebase Cloud Function
export const sendOrderRequest = async (order) => {
  console.log("Intentando enviar la orden a Firebase Cloud Function")

  try {
    // Agregar la propiedad "date" con una fecha ISO al objeto de la orden
    const orderWithDate = {
      ...order,
      date: order.date.toString(),
    };
    console.log("Orden con fecha ISO:", orderWithDate);
    
    // Agregar el objeto de la orden a la colección "orders" en la base de datos
    await addDoc(collection(db, "orders"), orderWithDate);

    // Devolver true si la operación es exitosa
    return true;
  } catch (error) {
    // Capturar y manejar errores en el envío de la orden
    console.error("Error al enviar la orden:", error);
  }
};

