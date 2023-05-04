import Layout from "./components/layout";
import CreateAccount from "./pages/createAccount";
import { Routes, Route } from "react-router-dom";
import Verify from "./pages/verify";
import Login from "./pages/signIn";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<CreateAccount />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
