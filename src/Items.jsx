import PackingList from "./PackingList";
import App from "./App";

function Items({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Items;
