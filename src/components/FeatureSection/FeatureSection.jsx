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
    let resultIndex;
    if(currentIndex === 0 ) {
      resultIndex = data.length - 1;
    } else {
      resultIndex = currentIndex - 1;
    }
    setCurrentIndex(resultIndex);
    
  };


console.log(data.length, `feature length`);

  const nextCard = () => {
    let resultIndex;
    if(currentIndex === data.length -1 ) {
      resultIndex = 0;
    } else {
      resultIndex = currentIndex + 1
    }
    setCurrentIndex(resultIndex);
  };

  if (data.length === 0) return <p>Loading..</p>;

  console.log(data);

  return (
    <>
      <h2 className={classes.title}>Featured Items</h2>
      <div className={classes.container}>
        <button onClick={previousCard} className={classes.container__back}>
          {`<`}
        </button>
        <button onClick={nextCard} className={classes.container__next}>
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
