import { useNavigate } from "react-router-dom";
import classes from "./CartModal.module.scss";
import CartItem from "../CartItem/CartItem";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";


const CartModal = ({ exitCartModal, data, handleRemove }) => {
  const { cartItems } = useContext(CartContext);
  console.log(data, "cart data");
  if (!data) return <p>Loading..</p>;
  const navigate = useNavigate();
  const handleContinue = async () => {
    navigate("/cart");
  };





  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <h1 onClick={exitCartModal} className={classes.container__x}>X</h1>
        <h3>Your cart from</h3>
        <h1> Café on Click! {`>`}</h1>
        {cartItems.length >= 1 ? (
          <button className={classes.container__btn} onClick={handleContinue}>
            Continue
          </button>
        ) : (
          <button className={classes.container__btn} onClick={exitCartModal}>
            Continue to shop
          </button>
        )}

        <div className={classes.container__card}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleRemove={handleRemove}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
