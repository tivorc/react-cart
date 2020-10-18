import React from "react";

export default function Category({ id, category, onChange, name, total }) {
  return (
    <li
      key={id}
      className={`list-group-item text-dark pointer ${
        category === id ? "bg-dark text-white" : ""
      }`}
      onClick={() => onChange(id)}
    >
      {`${name} (${total})`}
    </li>
  );
}
