import LoginSchema from "./upSchema/LoginSchema";
import { useFormik } from "formik";

const useLoginFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema(),
    onSubmit: async (values: any) => {
      console.log(values);
    },
  });

  const { errors, values, isValid, handleChange, handleSubmit } = formik;
  return { errors, values, isValid, handleChange, handleSubmit };
};

export default useLoginFormik;
