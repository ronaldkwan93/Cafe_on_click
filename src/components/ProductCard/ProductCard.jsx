import { useState, useEffect } from "react";
import ProductModal from "../ProductModal/ProductModal";
import classes from "./ProductCard.module.scss";

const ProductCard = ({
  data,
  handleCartModal,
  hidePlus = false,
  onCloseModal,
}) => {
  console.log(data);
  if (!data) return <p>Loading...</p>;

  const [modalStatus, setModalStatus] = useState(false);

  const showModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
    if (onCloseModal) onCloseModal();
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (modalStatus) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [modalStatus]);

  return (
    <>
      <div className={classes.card} onClick={showModal}>
        <img src={data.imgUrl} alt={data.title} />
        {!hidePlus && <p className={classes.card__plus}>+</p>}
        <div className={classes.card__text}>
          <h4>{data.title}</h4>
          <p>{data.kJ}kJ</p>
          <h4>A${data.price?.toFixed(2) ?? ""}</h4>
        </div>
      </div>
      {modalStatus && (
        <ProductModal
          closeModal={closeModal}
          data={data}
          handleCartModal={handleCartModal}
        />
      )}
    </>
  );
};

export default ProductCard;
