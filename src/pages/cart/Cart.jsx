import { useNavigate } from "react-router-dom";
import { LuCoffee } from "react-icons/lu";
import classes from "./Cart.module.scss";
import CartModal from "../../components/CartModal/CartModal";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { subscribeToCart } from "../../services/CafeServiceProvider";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const Cart = ({ data }) => {
  if (!data) return <p>Loading..</p>;
  const [cartItems, setCartItems] = useState(data);
  console.log(data);
  const navigate = useNavigate();
  const itemLength = cartItems.length;
  // const totalPrice = (data.price * data.quant ity)
  // console.log(data.price)
  const handleBack = () => {
    navigate("/");
  };
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
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
      <div className={classes.cart__heading}>
        <h3 onClick={handleBack}>
          <FaRegArrowAltCircleLeft />
          Back to store
        </h3>
        <div className={classes.cart__heading__name}>
          <LuCoffee className={classes.cart__logo} />
          <h1>Café on Click!</h1>
        </div>
        <div></div>
      </div>
      <div className={classes.cart__content}>
        <div className={classes.cart__content__cart}>
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
            <p className={classes.cart__items__price}>Price: $A{(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className={classes.cart__content__total}>
          <h1>Total Price: $A{totalPrice.toFixed(2)}</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
