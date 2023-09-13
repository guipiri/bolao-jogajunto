import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Alert from "./components/alert/Alert";
import { UserContext } from "./context/UserContext";
import { useEffect, useState } from "react";

function App() {
  const userLs = JSON.parse(localStorage.getItem("USER"));
  const [user, setUser] = useState(userLs);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("USER");
    setUser(null);
    navigate("/login");
  };
  const handleLogin = (user) => {
    localStorage.setItem("USER", JSON.stringify(user));
    setUser(user);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
