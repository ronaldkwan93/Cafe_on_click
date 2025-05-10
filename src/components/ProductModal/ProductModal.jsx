import { useState } from "react";
import { addItemToCart } from "../../services/CafeServiceProvider";
import classes from "./ProductModal.module.scss";

const ProductModal = ({ closeModal, data, handleCartModal }) => {
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [count, setCount] = useState(1);

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const quickCheckOut = () => {
    closeModal();
    handleCartModal();
  }

  const handleAddToCart = async () => {
    try {
      await addItemToCart({
        itemId: data.id,
        title: data.title,
        price: data.price,
        quantity: count,
        imgUrl: data.imgUrl,
        kJ: data.kJ,
      });
      setNotification("Added Item(s) to cart!");
      setShowNotification(true);
    } catch (err) {
      setNotification("Failed to add item to cart.");
      setShowNotification(true);
    }
  };
  return (
    <div className={classes.backdrop} onClick={closeModal}>
      <div className={classes.container} onClick={handleContainerClick}>
        <p onClick={closeModal} className={classes.container__exit}>
          X
        </p>
        <h1>{data.title}</h1>
        <p>{data.kJ}kJ</p>
        <h4>$A{data.price.toFixed(2) ?? ""}</h4>
        <img src={data.imgUrl} alt={data.title} />
        <div className={classes.container__addCart}>
          <div className={classes.container__addCart__count}>
            <button onClick={handleDecrement} disabled={count <= 1}>
              -
            </button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button
            className={classes.container__addCart_btn}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
        {showNotification && (
          <div>
            <p>{notification}</p>
            <button className={classes.container__checkOut} onClick={quickCheckOut}>Quick checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
