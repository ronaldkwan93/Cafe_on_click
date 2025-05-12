import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./Menu.module.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { getFavMenuData } from "../../services/CafeServiceProvider";

const Menu = ({ data, handleCartModal }) => {
  const [showFav, setShowFav] = useState(false);
  const [favData, setFavData] = useState([]);
  console.log(data);
  console.log(favData);

  const handleFav = () => {
    setShowFav(true);
    console.log("clicked!");
  };

  const handleMenu = () => {
    setShowFav(false);
  }

  useEffect(() => {
    const getFavData = async () => {
      await getFavMenuData().then((favData) => setFavData(favData));
    };
    getFavData();
  });

  return (
    <div>
      <div className={classes.title}>
        <h2 onClick={handleMenu}> Menu</h2>
        <h2 onClick={handleFav}>Favourites</h2>
      </div>
      <div>
        {showFav ? (
          <div className={classes.menu}>
            {favData.map((favProduct) => (
              <ProductCard
                key={favProduct.id}
                data={favProduct}
                handleCartModal={handleCartModal}
              />
            ))}
          </div>
        ) : (
          <div className={classes.menu}>
            {data.map((product) => (
              <ProductCard
                key={product.id}
                data={product}
                handleCartModal={handleCartModal}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
