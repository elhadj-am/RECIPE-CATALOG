import { useEffect } from "react";

export default function FoodDetails({ foodId }) {
  const URL = `GET https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5ab6ac5496d647708f62c8200e307560";

  useEffect(() => {
    async function fetchFood() {
      const respons = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await respons.json();
      console.log(data);
    }
    fetchFood();
  }, []);

  return <div> Hello FoodDetails {foodId}</div>;
}
