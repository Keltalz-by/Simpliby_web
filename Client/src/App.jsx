import Layout from "./components/layout";
import CreateAccount from "./pages/createAccount";
import { Routes, Route } from "react-router-dom";
import Verify from "./pages/verify";
import Login from "./pages/signIn";
import Register from "./pages/registerBussiness";

function App() {
  return (
    <Routes>
      <Route index element={<CreateAccount />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
