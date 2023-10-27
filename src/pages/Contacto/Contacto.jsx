import ContactoComponent from "./ContactoComponent"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { sendMessage } from "../../Services/MessageService";


const Contacto = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      userLastName: "",
      userPhone: "",
      userEmail: "",
      userConfirmEmail: "",
      userMessage: "",
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
      .matches(/^(?!(?:11|15)\d{8})(?:\d{2})?\d{8}$/, 'Debe ingresar un número de teléfono válido en Argentina (sin 0 ni 15)'),
      userEmail: Yup.string().email('Debe ingresar un email válido').required('Campo obligatorio'),
      userConfirmEmail: Yup.string().email('Debe ingresar un email válido').required('Campo obligatorio').oneOf([Yup.ref('userEmail'), null], 'Los emails no coinciden'),
      userMessage: Yup.string()
        .min(3, 'Debe tener más de 3 caracteres')
        .max(200, 'Debe tener menos de 200 caracteres')
        .required('Campo obligatorio'),
    }),
    onSubmit: (values) => {
      sendMessage(values);
    },
  });
  return (
    <ContactoComponent formik={formik} />
  );
};

export default Contacto;
