import { useNavigate } from "react-router-dom";
import { LuCoffee } from "react-icons/lu";
import classes from "./Cart.module.scss";
import CartModal from "../../components/CartModal/CartModal";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { subscribeToCart } from "../../services/CafeServiceProvider";

const Cart = ({ data }) => {
  if (!data) return <p>Loading..</p>;
  const[cartItems, setCartItems] = useState(data)
  console.log(data);
  const navigate = useNavigate();
  const itemLength = cartItems.length;
  // const totalPrice = (data.price * data.quantity)
  // console.log(data.price)
  const handleBack = () => {
    navigate("/");
  };
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  useEffect(() => {
    const unsubscribe = subscribeToCart((items) => {
      setCartItems(items);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={classes.cart}>
      <h1 onClick={handleBack}>{`<=`}Back to store</h1>
      <div>
        <LuCoffee className={classes.cart__logo} />
        <h2>Your cart:</h2>
        <button>Place Order</button>
        <h1>Order Summary ({itemLength} items)</h1>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className={classes.cart__items}>
          <img src={item.imgUrl} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <p>Price: $A{(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div>
        <h1>Total Price: $A{(totalPrice).toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
