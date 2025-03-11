import App from "./App";
import Items from "./Items";

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
