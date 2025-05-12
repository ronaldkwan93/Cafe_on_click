import { useEffect, useState } from "react";
import classes from "./CartItem.module.scss";
import { updateQuantity } from "../../services/CafeServiceProvider";
import { IoTrashBin } from "react-icons/io5";

const CartItem = ({ item, handleRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const totalPrice = quantity * item.price;

  const handleDecrement = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      await updateQuantity(item.title, -1);
    }
  };

  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await updateQuantity(item.title, 1);
  };

  return (
    <div className={classes.item}>
      <img src={item.imgUrl} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>{item.kJ}kJ</p>
        <p>A${totalPrice.toFixed(2)}</p>
      </div>
      <div className={classes.item__counter}>
        <button
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className={classes.item__counter__btn}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={handleIncrement}
          className={classes.item__counter__btn}
        >
          +
        </button>
      </div>
      <div onClick={() => handleRemove(item)} className={classes.item__delete}>
        <IoTrashBin />
      </div>
    </div>
  );
};

export default CartItem;
