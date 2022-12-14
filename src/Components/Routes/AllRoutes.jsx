import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
