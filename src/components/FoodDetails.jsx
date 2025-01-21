import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5ab6ac5496d647708f62c8200e307560";

  useEffect(() => {
    async function fetchFood() {
      const respons = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await respons.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚️{food.readyInMinutes} minutes </strong>
          </span>
          <span>
            <strong>Serves {food.servings} 👥 </strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥕 Vegetarian" : " 🍖Not-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐮 vegan" : ""}</strong>
          </span>
        </div>
        <div>
          ${" "}
          <span>
            <strong>{food.pricePerServing / 100} Per Serving </strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        {food.extendedIngredients?.map((item) => (
          <div key={item.name}>
            <img
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
            <h3>{item.name}</h3>
            <h3>
              {item.amount} {item.unit}
            </h3>
          </div>
        ))}
        <h2>Instructions</h2>

        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading... </p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.step}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
