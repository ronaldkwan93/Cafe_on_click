import { LuShoppingCart } from "react-icons/lu";
import { LuCoffee } from "react-icons/lu";
import classes from "./NavBar.module.scss";

const NavBar = ({ handleCartModal, cartData }) => {
  const hasItemsInCart = cartData?.length > 0;

  return (
    <div className={classes.nav}>
      <div className={classes.nav__logo}>
        <LuCoffee className={classes.nav__logo__coffee} />
        <h1>Café on Click!</h1>
      </div>
      <div onClick={handleCartModal}>
        <LuShoppingCart
          className={`${classes.cart} ${
            hasItemsInCart ? classes.cartActive : ""
          }`}
        />
      </div>
    </div>
  );
};

export default NavBar;
