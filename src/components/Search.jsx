export default function () {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input value={query} type="text" />
      <input value={query} type="text" />

    </div>
  );
}
