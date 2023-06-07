import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const mealsURL = `${import.meta.env.VITE_FIREBASE_URL}/meals.json`;

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMealsData = async (mealsURL) => {
    const response = await fetch(mealsURL);
    const mealsData = await response.json();

    const loadedMeals = [];

    for (const mealKey in mealsData) {
      const food = {
        id: mealKey,
        name: mealsData[mealKey].name,
        description: mealsData[mealKey].description,
        price: mealsData[mealKey].price,
      };

      loadedMeals.push(food);
    }

    setMeals(loadedMeals);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMealsData(mealsURL);
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsloading}>
        <p>Loading ...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
