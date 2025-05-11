import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./FeatureSection.module.scss";
import { getFeaturedMenuData } from "../../services/CafeServiceProvider";

const FeatureSection = ({handleCartModal}) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      getFeaturedMenuData().then((data) => setData(data));
    };
    getData();
  }, []);

  const previousCard = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const nextCard = () => {
    setCurrentIndex(currentIndex + 1);
  };

  if (data.length === 0) return <p>Loading..</p>;

  console.log(data);

  return (
    <>
      <h2>Featured Items</h2>
      <div className={classes.container}>
        <button onClick={previousCard} disabled={currentIndex <= 0} className={classes.container__back}>
          {`<`}
        </button>
        <button onClick={nextCard} disabled={currentIndex === data.length - 1} className={classes.container__next}>
        {`>`}
        </button>
        <div className={classes.container__feature}>
          <ProductCard data={data[currentIndex]} hidePlus={true} handleCartModal={handleCartModal}/>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
