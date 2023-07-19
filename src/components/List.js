import { useState } from "react";
const List = () => {
  var items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  return (
    <div>
      IDs:
      {items.map((item) => (
        <p
          key={item.id}
          style={{ display: "inline-block", letterSpacing: "6px" }}
        >
          {item.id}
        </p>
      ))}
    </div>
  );
};

export default List;
