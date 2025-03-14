import { useState } from "react";
import App from "./App";
import Items from "./Items";

function PackingList({ items, onDeleteItems, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItem

  if(sortBy === 'input') sortedItem = items
  if(sortBy === 'description') sortedItem = items.slice().sort((a,b) => a.description.localeCompare(b.description))
  if(sortBy === 'packed') sortedItem = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Items
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select name="" id="" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={()=>onClearList()}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
