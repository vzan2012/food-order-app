import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const mealPrice = `$ ${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addCartToHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      price,
      amount,
    });
  };

  return (
    <li key={id}>
      {/* Meal Item - Properties  */}
      <div className={classes.meal}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      {/* Meal Item - Form  */}
      <div className={classes["meal-item-form"]}>
        <MealItemForm id={id} onAddToCart={addCartToHandler} />
      </div>
    </li>
  );
};

export default MealItem;
