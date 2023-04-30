import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const mealPrice = `$ ${price.toFixed(2)}`;

  return (
    <li key={id}>
      {/* Meal Item - Properties  */}
      <div className={classes.meal}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      {/* Meal Item - Form  */}
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
