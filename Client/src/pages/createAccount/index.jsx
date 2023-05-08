import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import Layout from "../../components/layout";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../../utils/functions/auth/createAccount";
import { handleChange } from "../../utils/functions/auth/handleChange";
const CreateAccount = () => {
  const [inputData, setInputData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState({
    InputError: "",
  });

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full gap-10 font-ERegular">
        <div className="text-center pb-3">
          <h1 className="text-2xl font-bold">Create your Simpliby account</h1>
          <span className="">
            <p>
              Already have an account?{" "}
              <Link to="/" className="text-[#00398E] font-semibold">
                sign up
              </Link>
            </p>
          </span>
        </div>
        <form action="" className=" relative flex flex-col gap-3">
          <TextInput
            name="full_name"
            title="Full name"
            value={inputData.full_name}
            handleChange={(e) => handleChange(e, setInputData, inputData)}
            error={error}
          />
          <TextInput
            name="email"
            title="Email"
            type="email"
            value={inputData.email}
            handleChange={(e) => handleChange(e, setInputData, inputData)}
            error={error}
          />
          <TextInput
            name="password"
            title="Password"
            type="password"
            value={inputData.password}
            handleChange={(e) => handleChange(e, setInputData, inputData)}
            error={error}
          />
          <TextInput
            name="confirm_password"
            title="Confirm password"
            type="password"
            value={inputData.confirm_password}
            handleChange={(e) => handleChange(e, setInputData, inputData)}
            error={error}
          />

          {error.InputError ? (
            <span className="absolute -bottom-5 left-5 text-sm text-[red]">
              {error.InputError}
            </span>
          ) : null}
        </form>
        <div>
          <Button
            handleClick={(e) => createAccount(inputData, setError, navigate)}
            name="Create Account"
            extraclass={`w-[25rem] h-[3rem] rounded-lg`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;
