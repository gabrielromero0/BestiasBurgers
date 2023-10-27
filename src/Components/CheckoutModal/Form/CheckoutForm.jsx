import React from 'react'
import CheckoutFormComponent from './CheckoutFormComponent'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CheckoutForm = ({checkoutData, setCheckoutData, setValidated, handleClose}) => {
  const formik = useFormik({
    initialValues: {
      userName: "Nicolas",
      userLastName: "Muros",
      userPhone: "2604338179",
      userEmail: "nicomuros@gmail.com",
      userConfirmEmail: "nicomuros@gmail.com",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
      .min(3, 'Debe tener más de 3 caracteres')
      .max(15, 'Debe tener menos de 15 caracteres')
      .required('Campo obligatorio'),
      userLastName: Yup.string()
      .min(3, 'Debe tener más de 3 caracteres')
      .max(15, 'Debe tener menos de 15 caracteres')
      .required('Campo obligatorio'),
      userPhone: Yup.string()
      .matches(/^(?!(?:11|15)\d{8})(?:\d{2})?\d{8}$/, 'Debe ingresar un número de teléfono válido en Argentina (sin 0 ni 15)')
      .required('Campo obligatorio'),
      userEmail: Yup.string().email('Debe ingresar un email válido').required('Campo obligatorio'),
      userConfirmEmail: Yup.string().email('Debe ingresar un email válido').required('Campo obligatorio').oneOf([Yup.ref('userEmail'), null], 'Los emails no coinciden'),
    }),
    onSubmit: (values) => {
      //const orderWithDate = { ...checkoutData, date: new Date() };
      setCheckoutData({ 
        ...checkoutData, 
        customer: {
          name: values.userName + " " + values.userLastName,
          phone: values.userPhone,
          email: values.userEmail
        },
        date: new Date(),
      });
      setValidated(true);
    },
  });

  const formParams = {
    formik,
    checkoutData,
    setCheckoutData,
    handleClose
  }
  return (
    <CheckoutFormComponent {...formParams}/>
  )
}

export default CheckoutForm