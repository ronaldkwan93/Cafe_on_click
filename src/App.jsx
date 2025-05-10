// import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./pages/cart/Cart";
import Main from "./pages/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { deleteProductFromCart, getCartProducts, getMenuData } from "./services/CafeServiceProvider";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    getMenuData().then((data) => setMenuData(data));
    getCartProducts().then((cartData) => setCartData(cartData));
  }, [])

  const handleRemove = (item) => {
    deleteProductFromCart(item.id);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main data={menuData} cartData={cartData} handleRemove={handleRemove}/>}></Route>
          <Route path="/cart" element={<Cart data={cartData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
