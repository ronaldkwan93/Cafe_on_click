import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import classes from "./Main.module.scss";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Menu from "../../components/Menu/Menu";
import CartModal from "../../components/CartModal/CartModal";

const Main = ({ data, cartData, handleRemove }) => {
  const [sideModalStatus, setSideModalStatus] = useState(false);

  const handleCartModal = () => {
    setSideModalStatus(true);
  };

  const exitCartModal = () => {
    setSideModalStatus(false);
  };
  return (
    <div className={classes.body}>
      <NavBar handleCartModal={handleCartModal} />
      <div className={classes.main} onClick={exitCartModal}>
        <div className={classes.main__img}></div>

        <FeatureSection handleCartModal={handleCartModal} />
        <Menu data={data} handleCartModal={handleCartModal} />
      </div>
      {sideModalStatus && (
        <CartModal
          exitCartModal={exitCartModal}
          data={cartData}
          handleRemove={handleRemove}
        />
      )}
      <Footer />
    </div>
  );
};

export default Main;
