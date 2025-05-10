import { useState } from 'react';
import classes from './CartItem.module.scss'

const CartItem = ({item, handleRemove}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const totalPrice = quantity * item.price;

    const handleDecrement = () => {
        setQuantity(quantity - 1)
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

  return (
    <div className={classes.item}>
      <img src={item.imgUrl} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>{item.kJ}kJ</p>
        <p>A${totalPrice}</p>
        
      </div>
      <div className={classes.item__counter}>
        <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div onClick={() => handleRemove(item)}>Delete</div>
    </div>
  );
};

export default CartItem;
