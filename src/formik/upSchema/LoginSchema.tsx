"use client";
import * as Yup from "yup";

const LoginSchema = () => {
  const schema = Yup.object().shape({
    // email is required with email format
    email: Yup.string()
      .required("هذا الحقل مطلوب")
      .email("البريد الالمتروني غير صحيح"),
    // password is required with minimum length of 8
    password: Yup.string().required("هذا الحقل مطلوب!"),
  });
  return schema;
};

export default LoginSchema;
