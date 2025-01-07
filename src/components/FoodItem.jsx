export default function ({ foodItem: food }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h1>
        {food.title} {food.id}
      </h1>
    </div>
  );
}
