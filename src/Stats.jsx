import App from "./App";

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You ready to go"
          : `You have ${numItems} item on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
