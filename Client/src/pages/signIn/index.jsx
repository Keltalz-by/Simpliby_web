import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import { handleChange } from "../../utils/functions/auth/handleChange";
import { signIn } from "../../utils/functions/auth/signIn";
import Layout from "../../components/layout";

const Login = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    InputError: "",
    emailError: "",
    passwordError: "",
  });
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full gap-4 font-ERegular">
        <div className="text-center pb-3">
          <h1 className="text-2xl font-bold">Create your Simpliby account</h1>
          <span className="">
            <p>
              Don't have an account?{" "}
              <Link to="/" className="text-[#00398E] font-semibold">
                Create one
              </Link>
            </p>
          </span>
        </div>
        <form action="" className="relative flex flex-col gap-3">
          <div>
            <TextInput
              name="email"
              title="Email"
              value={inputData.email}
              handleChange={(e) => handleChange(e, setInputData, inputData)}
              error={error}
            />
            {error.emailError ? (
              <span className="absolute -bottom-5 left-5 text-sm text-[red]">
                {error.emailError}
              </span>
            ) : null}
          </div>
          <div>
            <TextInput
              name="password"
              title="Password"
              value={inputData.password}
              handleChange={(e) => handleChange(e, setInputData, inputData)}
              error={error}
              type="password"
            />
            {error.passwordError ? (
              <span className="absolute -bottom-5 left-5 text-sm text-[red]">
                {error.passwordError}
              </span>
            ) : null}
          </div>
          {error.InputError ? (
            <span className="absolute -bottom-5 left-5 text-sm text-[red]">
              {error.InputError}
            </span>
          ) : null}
        </form>
        <div>
          forgot your password?{" "}
          <Link to="/" className="text-[#00398E]">
            Reset it here
          </Link>
        </div>
        <div>
          <Button
            handleClick={(e) => signIn(inputData, error, setError, navigate)}
            name="Log in"
            extraclass={`w-[25rem] h-[3rem] rounded-lg`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
