import ProductCard from "../ProductCard/ProductCard";
import classes from './FeatureSection.module.scss'

const FeatureSection = () => {
  return (
    <div className={classes.container}>
      <h2>Featured Items</h2>
      <button>
        back
      </button>
      <button>forward</button>
      <div>
        <ProductCard/>
      </div>
    </div>
  );
};

export default FeatureSection;
