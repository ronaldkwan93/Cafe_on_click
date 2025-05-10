import ProductCard from "../ProductCard/ProductCard";
import classes from "./Menu.module.scss";

const Menu = ({ data, handleCartModal }) => {
  console.log(data);
  return (
    <div>
      <h2>Menu</h2>
      <div className={classes.menu}>
        {data.map((product) => (
          <ProductCard key={product.id} data={product} handleCartModal={handleCartModal}/>
        ))}
      </div>
    </div>
  );
};

export default Menu;
