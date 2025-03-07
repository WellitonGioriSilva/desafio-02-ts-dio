import Conta from "./components/pages/Conta";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import ContaInfo from "./components/pages/ContaInfo";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {<Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />}
      <Route path="/infoconta" element={<ContaInfo />} />
    </Routes>
  );
};

export default MainRoutes;
