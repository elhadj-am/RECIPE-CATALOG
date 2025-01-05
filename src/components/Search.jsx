import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5ab6ac5496d647708f62c8200e307560";

export default function () {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchData() {
      // console.log("useEffect Called");
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
