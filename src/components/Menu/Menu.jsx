import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./Menu.module.scss";
import { getFavMenuData } from "../../services/CafeServiceProvider";

const Menu = ({ data, handleCartModal }) => {

  const [showFav, setShowFav] = useState(false);
  const [favData, setFavData] = useState([]);

  const style = showFav ? classes.title__menu : classes.title__fav;

  console.log(style);
  console.log(data);
  console.log(favData);

  const refreshFavData = async () => {
    const fav = await getFavMenuData();
    setFavData(fav);
  };

  const handleFav = () => {
    setShowFav(true);
    console.log("clicked!");
  };

  const handleMenu = () => {
    setShowFav(false);
  };

  useEffect(() => {
    const getFavData = async () => {
      await getFavMenuData().then((favData) => setFavData(favData));
    };
    getFavData();
  }, [showFav]);

  return (
    <div>
      <div className={classes.title}>
        <h2 onClick={handleMenu}   className={showFav ? classes.title__inactiveTab : classes.title__activeTab}
        >
          Menu
        </h2>
        <h2 onClick={handleFav}   className={!showFav ? classes.title__inactiveTab : classes.title__activeTab}
        >
          Favourites
        </h2>
      </div>
      <div>
        {showFav ? (
          <div className={classes.menu}>
            {favData.map((favProduct) => (
              <ProductCard
                key={favProduct.id}
                data={favProduct}
                handleCartModal={handleCartModal}
                onCloseModal={refreshFavData}

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
                onCloseModal={refreshFavData}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
