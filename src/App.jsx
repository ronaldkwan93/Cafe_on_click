// import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./pages/cart/Cart";
import Main from "./pages/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getMenuData } from "./services/CafeServiceProvider";

function App() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getMenuData().then((data) => setMenuData(data));
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main data={menuData}/>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
