export const signIn = (inputData, error, setError, navigate) => {
  const { email, password } = inputData;
  console.log(email, password);
  if (email === "" && password === "")
    return setError({ ...error, InputError: "incomplete fields" });
  if (email === "" && password !== "")
    return setError({
      ...error,
      emailError: "wrong email",
    });
  if (email !== "" && password === "")
    return setError({
      ...error,
      passwordError: "incorrect password",
    });
  return navigate("/");
};
