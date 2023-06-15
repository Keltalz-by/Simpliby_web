import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import Layout from "../../components/layout";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../../utils/functions/auth/createAccount";
import { handleChange } from "../../utils/functions/auth/handleChange";
import Carousel from "../../components/Slider";
import { useMutation, useQuery } from "@tanstack/react-query";

const CreateAccount = () => {
  const [inputData, setInputData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [Error, setError] = useState({
    InputError: "",
  });
  const [Enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const createUser = useMutation({
    mutationKey: ["createUser"],
    mutationFn: () => createAccount(inputData, setError, navigate),
    onSettled: navigate("/verify"),
  });
  // const RegisterUser = () => {
  //   console.log(error, isFetching, data);
  //   refetch();
  //   console.log(error, isFetching, data);
  //   if (data) navigate("/verify");
  // };

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
          <form action="" className=" relative flex flex-col gap-3">
            <TextInput
              name="full_name"
              title="Full name"
              value={inputData.full_name}
              handleChange={(e) => handleChange(e, setInputData, inputData)}
              error={Error}
            />
            <TextInput
              name="email"
              title="Email"
              type="email"
              value={inputData.email}
              handleChange={(e) => handleChange(e, setInputData, inputData)}
              error={Error}
            />
            <TextInput
              name="password"
              title="Password"
              type="password"
              value={inputData.password}
              handleChange={(e) => handleChange(e, setInputData, inputData)}
              error={Error}
            />
            <TextInput
              name="confirm_password"
              title="Confirm password"
              type="password"
              value={inputData.confirm_password}
              handleChange={(e) => handleChange(e, setInputData, inputData)}
              error={Error}
            />

            {Error.InputError ? (
              <span className="absolute -bottom-5 left-5 text-sm text-[red]">
                {Error.InputError}
              </span>
            ) : null}
          </form>
          <div>
            <Button
              handleClick={() => createUser.mutate()}
              // loading={isFetching}
              name="Create Account"
              extraclass={`w-[25rem] h-[3rem]  rounded-lg`}
            />
          </div>
        </div>
      </Layout>
    </Carousel>
  );
};

export default CreateAccount;
