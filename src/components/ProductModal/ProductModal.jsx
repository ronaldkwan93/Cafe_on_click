import classes from "./ProductModal.module.scss";

const ProductModal = ({ closeModal }) => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={classes.backdrop} onClick={closeModal}>
      <div className={classes.container} onClick={handleContainerClick}>
        <p onClick={closeModal} className={classes.container__exit}>
          X
        </p>
        <h1>Title</h1>
        <p>(1000kJ)</p>
        <h4>A$10.00</h4>
        <img src="" alt="" />
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
