import { LuShoppingCart } from "react-icons/lu";
import { LuCoffee } from "react-icons/lu";
import classes from './NavBar.module.scss'

const NavBar = ({handleCartModal}) => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav__logo}>
        <LuCoffee />
        <h1>Café on Click!</h1>
      </div>
      <div onClick={handleCartModal}>
        <LuShoppingCart />
      </div>
    </div>
  );
};

export default NavBar;
