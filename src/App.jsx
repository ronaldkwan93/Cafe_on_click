// import "./App.css";
import Cart from "./pages/cart/Cart";
import Main from "./pages/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
