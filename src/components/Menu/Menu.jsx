import ProductCard from "../ProductCard/ProductCard"
import classes from './Menu.module.scss'

const Menu = () => {
  return (
    <div className={classes.menu}>
      <h2>Menu</h2>
      <div>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Menu
