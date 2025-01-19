import { useEffect, useState } from "react";

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
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />

        <div>
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
          $ <span>{food.pricePerServing / 100} Per Serving </span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading... </p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
