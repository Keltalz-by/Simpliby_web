import api from "../../src/utils/functions/helper/baseUrl";
export const AuthSlice = (set) => ({
  user: false,
  login: (values, navigate) => {
    console.log(values), set({ user: true });
    navigate("/dashboard/home");
  },
  createUser: (values, navigate) => {
    // const { fullName, email, password, confirmPassword } = values;
    // const response = await api.post("/auth/register", {
    //   name: fullName,
    //   email: email,
    //   password: password,
    //   passwordConfirm: confirmPassword,
    // });
    set({ user: true });
    // navigate("/dashboard/home");
    // return response;
  },
  logout: () => {},
});
