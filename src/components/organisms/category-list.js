import React from "react";
import { Category } from "../molecules";

export default function CategoryList({ categories, category, onChange }) {
  const total = categories.reduce((a, b) => a + b.total, 0);
  return (
    <div className="col-md-3">
      <div className="card sticky-top" style={{ top: "75px" }}>
        <div className="card-header text-dark">Categorías</div>
        <ul className="list-group list-group-flush">
          <Category
            category={category}
            id={""}
            onChange={onChange}
            name="Todos"
            total={total}
          />
          {categories.map((c) => {
            return (
              <Category
                key={c.id}
                category={category}
                {...c}
                onChange={onChange}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
