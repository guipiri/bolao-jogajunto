import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { UserContext } from "./context/UserContext";
import { AffiliateIdContext } from "./context/AffiliateIdContext";
import { useEffect, useState } from "react";

function App() {
  //Saving users info from localStorage if it exists in state user
  const userLs = JSON.parse(localStorage.getItem("USER"));
  const [user, setUser] = useState(userLs);

  ////Saving aff id info from localStorage if it exists in state user
  const affiliateIdLs = localStorage.getItem("AFFILIATE_ID");
  const [affiliateId, setAffiliateId] = useState(
    affiliateIdLs ? `?id=${affiliateIdLs}` : ""
  );

  //Getting useNavigate from react-router-dom to redirect user to palpites page after he logs in
  const navigate = useNavigate();

  //Getting pathname to add it as a dependency in useEffect to scroll up after route change (line 30)
  const { pathname, search } = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("USER");
    setUser(null);
    navigate("/login");
  };
  const handleLogin = (user) => {
    localStorage.setItem("USER", JSON.stringify(user));
    setUser(user);
  };
  ("");

  //Saving affiliate id into localStorage if it exists
  useEffect(() => {
    if (search.includes("id=")) {
      let affiliateId = search.split("id=")[1];
      if (affiliateId.includes("&")) {
        affiliateId = affiliateId.split("&")[0];
      }
      window.localStorage.setItem("AFFILIATE_ID", affiliateId);
      setAffiliateId(`?id=${affiliateId}`);
    }
  }, []);

  //Scrolling to top every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
        <AffiliateIdContext.Provider value={affiliateId}>
          <Navbar />
          <Outlet />
          <Footer />
        </AffiliateIdContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
