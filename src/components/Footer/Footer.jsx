import { LuCoffee } from "react-icons/lu";
import { FaRegCopyright } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import classes from "./Footer.module.scss";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.footer__logo}>
        <LuCoffee />
        <p>Terms of Service</p>
      </div>
      <p>
        <FaRegCopyright /> {date} Café on Click!
      </p>
      <div>
        <FaSquareFacebook />
        <FaSquareInstagram />
        <FaSquareTwitter />
      </div>
    </div>
  );
};

export default Footer;
