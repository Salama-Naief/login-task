import Layout from "../components/layout/Layout";
import Input from "../components/login/Input";
import useLoginFormik from "../formik/useLoginFormik";

export const Login = () => {
  const { errors, values, isValid, handleChange, handleSubmit } =
    useLoginFormik();
  console.log("error", errors);
  console.log("isValid", isValid);
  return (
    <Layout>
      <div className="p-4 ">
        <div
          className="
         
        mx-auto shadowBox

         
        rounded-lg p-10
        xl:w-2/5
        lg:w-1/2
        md:w-2/3
        sm:w-full
        "
        >
          <h1 className="text-4xl text-mainColor text-center w-full font-bold ">
            تسجيل الدخول
          </h1>
          <form onSubmit={handleSubmit} className="mt-10">
            <Input
              disabled={false}
              id="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              placeholder="ادخل البريد الالكتروني"
              type="email"
              error={errors.password as string}
            />
            <Input
              disabled={false}
              id="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
              placeholder="ادخل الرقم السري"
              type="password"
              error={errors.password as string}
            />
            <div className="text-mainColor underline text-right text-base my-3">
              هل نسيت كلمة المرور؟
            </div>
            <button
              disabled={!isValid ? true : false}
              type="submit"
              className={`${
                !isValid ? "bg-secondaryColor" : "bg-mainColor"
              }  text-white w-full rounded-lg py-4 mt-6 text-xl `}
            >
              تسجيل الدخول
            </button>
            <div className="mt-4">
              <span>إنشاء حساب جديد؟ </span>
              <span className="text-mainColor underline text-right text-base my-3">
                ليس لديك حساب؟
              </span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
