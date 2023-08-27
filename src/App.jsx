import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { createContext, useState } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const userLs = JSON.parse(localStorage.getItem("USER"));
  const [user, setUser] = useState(userLs);
  
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
