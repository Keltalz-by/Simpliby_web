import api from "../helper/baseUrl";

export const createAccount = async (values, navigate) => {
  const { fullName, email, password, confirmPassword } = values;
  const response = await api.post("/auth/register", {
    name: fullName,
    email: email,
    password: password,
    passwordConfirm: confirmPassword,
  });
  return response;
};

// export const createAccount = (inputData) => {
//   const { full_name, email, password, confirm_password } = inputData;
//   const requestDetails = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded",
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify({
//       name: full_name,
//       email: email,
//       password: password,
//       passwordConfirm: confirm_password,
//     }),
//   };
//   fetch(
//     "https://simplibuy-production.up.railway.app/api/v1/auth/register",
//     requestDetails
//   );
// };
