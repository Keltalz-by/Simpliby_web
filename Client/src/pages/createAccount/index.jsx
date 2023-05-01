import React from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import Layout from "../../components/layout";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
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
      <form action="" className="flex flex-col gap-3">
        <TextInput name="Full name" />
        <TextInput name="Email" type="email" />
        <TextInput name="Password" type="password" />
        <TextInput name="Confirm password" type="password" />
      </form>
      <div>
        <Button
          name="Create Account"
          extraclass={`w-[25rem] h-[2.7rem] rounded-lg`}
        />
      </div>
    </div>
  );
};

export default CreateAccount;
