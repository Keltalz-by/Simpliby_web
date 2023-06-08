// import Layout from "./components/layout";
import CreateAccount from "./pages/createAccount";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route index element={<CreateAccount />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="messages" element={<Message />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="settings" element={<Setting />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
// AiFillHome
export default App;
