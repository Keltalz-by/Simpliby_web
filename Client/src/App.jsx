// import Layout from "./components/layout";
import CreateAccount from "./pages/createAccount";
import { Routes, Route, useNavigate } from "react-router-dom";
import Verify from "./pages/verify";
import Login from "./pages/signIn";
import Register from "./pages/registerBussiness";
import Dashboard from "./pages/dashBoard";
import Message from "./pages/Message";
import Setting from "./pages/Settings";
import Purchase from "./pages/Purchase";
import Sidebar from "./components/Sidebar";
import History from "./pages/History";
import ProtectedLayout from "./components/ProtectedLayout";
import Carousel from "./components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chat from "./pages/Message/Chat";
import { useEffect } from "react";
import { useBoundedStore } from "../store/store";

function App() {
  const navigate = useNavigate();
  const auth = useBoundedStore((state) => state.user);
  useEffect(() => {
    if (auth) {
      navigate("/dashboard/home");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/" element={<ProtectedLayout />}>
        <Route path="home" element={<Dashboard />} />
        <Route path="messages" element={<Message />} />
        <Route path="messages/chat/:id" element={<Chat />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="settings" element={<Setting />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
// AiFillHome
export default App;
