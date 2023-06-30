import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import { handleChange } from "../../utils/functions/auth/handleChange";
import { signIn } from "../../utils/functions/auth/signIn";
import Layout from "../../components/layout";
import Carousel from "../../components/Slider";
import { Formik } from "formik";
import { SignInValidation } from "../../utils/validationSchema/validationSchema";
import { useBoundedStore } from "../../../store/store";

const Login = () => {
  const navigate = useNavigate();
  const login = useBoundedStore((state) => state.login);
  const initialValue = {
    email: "",
    password: "",
  };

  return (
    <Carousel>
      <Layout>
        <div className="flex flex-col items-center h-full w-full gap-4 font-ERegular">
          <div className="text-center pb-3">
            <h1 className="text-2xl font-Esemi">
              Login into your Simpliby account
            </h1>
            <span className="">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/createAccount"
                  className="text-[#00398E] font-semibold"
                >
                  Create one
                </Link>
              </p>
            </span>
          </div>
          <Formik
            initialValues={initialValue}
            validationSchema={SignInValidation}
            onSubmit={(values) => {
              login(values, navigate);
              // handleSignIn(values, router);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <form action="" className="relative mt-6 flex flex-col gap-3">
                  <div>
                    <TextInput
                      name="email"
                      title="Email"
                      placeholder="Email"
                      value={values.email}
                      handleChange={handleChange("email")}
                      error={errors.email}
                      touched={touched.email}
                    />
                  </div>
                  <div>
                    <TextInput
                      name="password"
                      title="Password"
                      placeholder="Password"
                      value={values.password}
                      handleChange={handleChange("password")}
                      error={errors.password}
                      touched={touched.password}
                      type="password"
                    />
                  </div>
                  <div className="text-start mb-5 ">
                    <p>
                      Forgot your password?{" "}
                      <Link to="/" className="text-[#00398E] px-2">
                        Reset it here
                      </Link>
                    </p>
                  </div>
                </form>
                <div>
                  <Button
                    handleClick={handleSubmit}
                    name="Log in"
                    extraclass={`w-[25rem] h-[3rem] rounded-lg`}
                  />
                </div>
              </>
            )}
          </Formik>
        </div>
      </Layout>
    </Carousel>
  );
};

export default Login;
