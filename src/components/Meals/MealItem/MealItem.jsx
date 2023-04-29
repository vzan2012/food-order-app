import classes from "./MealItem.module.css";

const MealItem = ({ id, name, description, price }) => {
  const mealPrice = `$ ${price.toFixed(2)}`;

  return (
    <li key={id}>
      <div className={classes.meal}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
