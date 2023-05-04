export const createAccount = (inputData, setError, navigate) => {
  const { full_name, email, password, confirm_password } = inputData;
  console.log(full_name, email, password, confirm_password);
  if (
    (full_name === "") |
    (email === "") |
    (password === "") |
    (confirm_password === "")
  ) {
    setError({ InputError: "incomplete fields" });

    return;
  } else {
    if (password !== confirm_password) {
      setError({ InputError: "password mismatch" });
      return;
    }
  }
  return navigate("/verify");
};
