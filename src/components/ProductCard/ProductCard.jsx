import { useState, useEffect } from "react";
import ProductModal from "../ProductModal/ProductModal";
import classes from "./ProductCard.module.scss";
import CartModal from "../CartModal/CartModal";

const ProductCard = ({data}) => {
  console.log(data);
  if(!data) return <p>Loading...</p>
  const [modalStatus, setModalStatus] = useState(false);

  const showModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  useEffect(() => {
    if (modalStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalStatus]);

  return (
    <>
      <div className={classes.card} onClick={showModal}>
        <img src={data.imgUrl} alt="" />
        <p className={classes.card__plus}>+</p>
        <div className={classes.card__text}>
          <h4>{data.title}</h4>
          <p>(1000kJ)</p>
          <h4>A${data.price}.00</h4>
        </div>
      </div>
      {modalStatus && <ProductModal closeModal={closeModal} />}
    </>
  );
};

export default ProductCard;
