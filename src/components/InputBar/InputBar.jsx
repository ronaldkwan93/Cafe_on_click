import { FaMagnifyingGlass } from "react-icons/fa6";
import classes from './InputBar.module.scss'

const InputBar = () => {
  return (
    <form className={classes.form}>
      <FaMagnifyingGlass />
      <input type="text" />
    </form>
  );
};

export default InputBar;
