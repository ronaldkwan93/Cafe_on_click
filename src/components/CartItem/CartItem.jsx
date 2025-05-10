import classes from './CartItem.module.scss'

const CartItem = ({item, handleRemove}) => {
  return (
    <div className={classes.item}>
      <img src={item.imgUrl} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>{item.kJ}kJ</p>
        <p>A${item.price?.toFixed(2) ?? ""}</p>
      </div>

      <div className={classes.item__counter}>
        <button>-</button>
        <p>count</p>
        <button>+</button>
      </div>
      <div onClick={() => handleRemove(item)}>Delete</div>
    </div>
  );
};

export default CartItem;
