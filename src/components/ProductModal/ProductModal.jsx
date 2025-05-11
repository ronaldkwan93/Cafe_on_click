import { useEffect, useState } from "react";
import {
  addItemToCart,
  getStockOnItem,
  IsItemInCart,
  updateQuantity,
} from "../../services/CafeServiceProvider";
import classes from "./ProductModal.module.scss";

const ProductModal = ({ closeModal, data, handleCartModal }) => {
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeError, setSizeError] = useState(false);

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
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    setSizeError(false);
    setShowNotification("");
  };

  useEffect(() => {
    console.log(data.title);
    const stockCount = async () => {
      getStockOnItem(data.title).then((result) => setStock(result));
    };
    stockCount();
  }, []);

  console.log(stock);

  const handleAddToCart = async () => {
    if (data.category === "coffee" && !selectedSize) {
      setSizeError(true);
      return;
    }
  
    let itemTitle = data.title;
    if (data.category === "coffee" && selectedSize) {
      itemTitle = `${data.title} (${selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)})`;
    }
  
    const itemFound = await IsItemInCart(itemTitle);
  
    if (itemFound) {
      try {
        await updateQuantity(itemTitle, count);
        setNotification("Added Item(s) to cart!");
        setShowNotification(true);
      } catch (error) {
        setNotification("Failed to add, please try again!");
        setShowNotification(true);
      }
    } else {
      try {
        await addItemToCart({
          category: data.category,
          itemId: data.id,
          title: itemTitle,  
          price: data.price,
          quantity: count,
          imgUrl: data.imgUrl,
          kJ: data.kJ,
          size: data.category === "coffee" ? selectedSize : null,  
        });
        setNotification("Added Item(s) to cart!");
        setShowNotification(true);
      } catch (err) {
        setNotification("Failed to add item to cart.");
        setShowNotification(true);
      }
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
        {/* If data.category is drink, then we will want to have a form of buttons to select size */}
        {data.category === "coffee" && (
          <div className={classes.container__sizes}>
            <form>
              <label
                className={`${classes.sizeOption} ${
                  selectedSize === "small" ? classes.selected : ""
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  value="small"
                  checked={selectedSize === "small"}
                  onChange={handleSizeChange}
                />
                Small
              </label>
              <label
                className={`${classes.sizeOption} ${
                  selectedSize === "medium" ? classes.selected : ""
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  value="medium"
                  checked={selectedSize === "medium"}
                  onChange={handleSizeChange}
                />
                Medium
              </label>
              <label
                className={`${classes.sizeOption} ${
                  selectedSize === "large" ? classes.selected : ""
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  value="large"
                  checked={selectedSize === "large"}
                  onChange={handleSizeChange}
                />
                Large
              </label>
            </form>
            {sizeError && (
              <p className={classes.errorText}>Please select a size</p>
            )}
          </div>
        )}
        <div className={classes.container__addCart}>
          <div className={classes.container__addCart__count}>
            <button onClick={handleDecrement} disabled={count <= 1}>
              -
            </button>
            <p>{count}</p>
            <button onClick={handleIncrement} disabled={count === stock}>
              +
            </button>
          </div>
          <button
            className={classes.container__addCart_btn}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
        {showNotification && (
          <div className={classes.notification}>
            <p>{notification}</p>
            {!sizeError && (
              <button
                className={classes.container__checkOut}
                onClick={quickCheckOut}
              >
                Quick checkout
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
