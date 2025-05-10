import { useState } from "react";
import { addItemToCart } from "../../services/CafeServiceProvider";
import classes from "./ProductModal.module.scss";

const ProductModal = ({ closeModal, data }) => {
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleAddToCart = async () => {
    try {
      await addItemToCart({
        itemId: data.id,
        title: data.title,
        price: data.price,
        quantity: 1,
        imgUrl: data.imgUrl,
        kJ: data.kJ
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
        <h4>$A{data.price.toFixed(2) ?? '' }</h4>
        <img src={data.imgUrl} alt={data.title} />
        <div className={classes.container__addCart}>
          <div className={classes.container__addCart__count}>
            <button>-</button>
            <p>count</p>
            <button>+</button>
          </div>
          <button className={classes.container__addCart_btn} onClick={handleAddToCart}>Add to cart</button>
        </div>
          {showNotification && <p>{notification}</p>}
      </div>
    </div>
  );
};

export default ProductModal;
