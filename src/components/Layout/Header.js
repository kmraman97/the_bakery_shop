import React, { Fragment } from "react";
import mainImage from "../../assets/tbsbg.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>The Bakery Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.main_image}>
        <img src={mainImage} alt="the bakery shop" />
      </div>
    </Fragment>
  );
};

export default Header;
