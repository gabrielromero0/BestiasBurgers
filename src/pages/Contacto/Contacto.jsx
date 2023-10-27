import ContactoComponent from "./ContactoComponent"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { sendMessage } from "../../Services/MessageService";
import { contactoValidationSchema } from "../../utils/contactoValidationSchema";

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
    validationSchema: contactoValidationSchema,
    onSubmit: (values) => {
      sendMessage(values);
    },
  });
  return (
    <ContactoComponent formik={formik} />
  );
};

export default Contacto;
