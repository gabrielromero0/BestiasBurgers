import React, { useEffect, useState } from 'react'
import { getWhatsapp, sendOrder } from '../../../Services/CheckoutService';
const Deliver = ({checkoutData = null}) => {

  const [whatsappNumber, setWhatsappNumber] = useState(null);

  useEffect(() => {
    if (checkoutData) {
      async function resolve() {
        const whatsapp = await getWhatsapp();
        const isDataSended = await sendOrder(checkoutData);
        console.log("asdf")
        if (isDataSended) {
          console.log('data sended');
          console.log('whatsapp', whatsapp.whatsapp);
          console.log('checkoutData', checkoutData);
        }
      }
      resolve();
    }
  }
  , [checkoutData, setWhatsappNumber]);

  useEffect(() => {
    if (whatsappNumber) {
      console.log(whatsappNumber);
    }
  }
  , [whatsappNumber]);

  return (
    <div>Deliver</div>
  )
}

export default Deliver