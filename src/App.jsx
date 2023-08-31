import { useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
  const userLs = JSON.parse(localStorage.getItem("USER"));
  const [user, setUser] = useState(userLs);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("USER");
    setUser(null);
    navigate("/");
  };
  const handleLogin = (user) => {
    localStorage.setItem("USER", JSON.stringify(user));
    setUser(user);
  };
  return (
    <>
      <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
        <Navbar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
