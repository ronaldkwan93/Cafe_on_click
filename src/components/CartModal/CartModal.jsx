import { useNavigate } from "react-router-dom";
import classes from "./CartModal.module.scss";

const CartModal = ({ exitCartModal }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/cart");
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <h1 onClick={exitCartModal}>X</h1>
        <h3>Your cart from</h3>
        <h1> Café on Click! {`>`}</h1>
        <button className={classes.container__btn} onClick={handleContinue}>
          Continue
        </button>
        <div className={classes.container__card}>
          <img src="https://placecats.com/neo_banana/50/50" alt="" />
          <div>
            <p>Item title</p>
            <p>(1000kJ)</p>
            <h4>A$10.00</h4>
          </div>
          <div className={classes.container__count}>
            <button>-</button>
            <p>count</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
