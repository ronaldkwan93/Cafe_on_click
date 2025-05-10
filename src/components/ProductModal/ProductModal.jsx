import classes from "./ProductModal.module.scss";

const ProductModal = ({ closeModal, data }) => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
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
          <button className={classes.container__addCart_btn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
