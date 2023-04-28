import classes from "./Header.module.css";

import mealsImage from "./../../assets/food-meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 className="text-xl">Food Court</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food Court" />
      </div>
    </>
  );
};

export default Header;
