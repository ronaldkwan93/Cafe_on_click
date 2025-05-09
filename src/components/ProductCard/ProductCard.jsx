import classes from './ProductCard.module.scss'

const ProductCard = () => {
  return (
    <div className={classes.card}>
        <img src="https://placecats.com/neo_banana/250/200" alt="" />
        <p className={classes.card__plus}>+</p>
        <div className={classes.card__text}>
            <h4>Title</h4>
            <p>(1000kJ)</p>
            <h4>A$10.00</h4>
        </div>

    </div>
  )
}

export default ProductCard
