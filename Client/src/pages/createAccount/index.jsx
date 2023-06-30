import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import Layout from "../../components/layout";
import { Link, useNavigate } from "react-router-dom";
// import { createAccount } from "../../utils/functions/auth/createAccount";
import { handleChange } from "../../utils/functions/auth/handleChange";
import Carousel from "../../components/Slider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import { SignupValidation } from "../../utils/validationSchema/validationSchema";
import { useBoundedStore } from "../../../store/store";

const CreateAccount = () => {
  const createAccount = useBoundedStore((state) => state.createUser);
  const initialValue = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();

  const handleSignUp = (values) => {
    createAccount(values, navigate);
    // if (response.data) {
    navigate("/dashboard/home");
    // }
    console.log(values);
  };

  return (
    <Carousel>
      <Layout>
        <div className="flex flex-col items-center h-full w-full gap-10 font-ERegular">
          <div className="text-center pb-3">
            <h1 className="text-2xl font-Esemi">
              Create your Simpliby account
            </h1>
            <span className="">
              <p>
                Already have an account?{" "}
                <Link to="/" className="text-[#00398E] font-semibold">
                  sign up
                </Link>
              </p>
            </span>
          </div>
          <Formik
            initialValues={initialValue}
            validationSchema={SignupValidation}
            onSubmit={(values) => {
              handleSignUp(values);
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
                <div className="relative flex flex-col gap-3">
                  <TextInput
                    name="full_name"
                    title="Full name"
                    placeholder="Full name"
                    value={values.fullName}
                    handleChange={handleChange("fullName")}
                    error={errors.fullName}
                    touched={touched.fullName}
                  />
                  <TextInput
                    name="email"
                    title="Email"
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    handleChange={handleChange("email")}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <TextInput
                    name="password"
                    title="Password"
                    placeholder="password"
                    type="password"
                    value={values.password}
                    handleChange={handleChange("password")}
                    error={errors.password}
                    touched={touched.password}
                  />
                  <TextInput
                    name="confirm_password"
                    title="Confirm password"
                    placeholder="Confirm password"
                    type="password"
                    value={values.confirmPassword}
                    handleChange={handleChange("confirmPassword")}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                  />
                </div>
                <div>
                  <Button
                    handleClick={handleSubmit}
                    // loading={isFetching}
                    name="Create Account"
                    extraclass={`w-[25rem] h-[3rem]  rounded-lg`}
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

export default CreateAccount;
