export const signIn = (inputData, error, setError, navigate) => {
  const { email, password } = inputData;
  console.log(email, password);
  if (email === "" && password === "") {
    setError({ ...error, InputError: "incomplete fields" });
    return;
  } else {
    if (email === "" && password !== "") {
      setError({
        ...error,
        // InputError: "incomplete fields",
        emailError: "wrong email",
      });
    } else {
      if (email !== "" && password === "")
        setError({
          ...error,
          // InputError: "incomplete fields",
          passwordError: "incorrect password",
        });
    }
    return;
  }
  return navigate("/");
};
