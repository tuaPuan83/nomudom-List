import PackingList from "./PackingList";
import App from "./App";

function Items({ item, onDeleteItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button onClick={()=>onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

export default Items;
