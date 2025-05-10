import ProductCard from "../ProductCard/ProductCard";
import classes from "./Menu.module.scss";

const Menu = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Menu</h2>
      <div className={classes.menu}>
        {data.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
