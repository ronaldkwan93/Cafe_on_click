import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import classes from "./Main.module.scss";
import InputBar from "../../components/InputBar/InputBar";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Menu from "../../components/Menu/Menu";
import CartModal from "../../components/CartModal/CartModal";

const Main = () => {
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
        <div className={classes.main__img}>
          <img
            src="https://img.freepik.com/free-photo/copy-space-coffee-breakfast-arrangement_23-2148267671.jpg?t=st=1746770256~exp=1746773856~hmac=9c39f271529ae6bbed43fd70b7c08e1ed4926ede7dab529224f5d48a66912e21&w=996"
            alt=""
          />
        </div>
        <div>
          <div className={classes.main__product_heading}>
            <h2>Cafe on Click</h2>
            <InputBar />
          </div>
          <div className={classes.main__see_more}>
            <button>See More</button>
          </div>
        </div>
        <FeatureSection />
        <Menu />
      </div>
      {sideModalStatus && <CartModal exitCartModal={exitCartModal}/>}
      <Footer />
    </div>
  );
};

export default Main;
