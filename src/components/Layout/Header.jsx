import classes from "./Header.module.css";

import mealsImage from "./../../assets/food-meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className="text-xl">Food Court</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food Court" />
      </div>
    </>
  );
};

export default Header;
