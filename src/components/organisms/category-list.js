import React, { useReducer } from "react";
import { Category } from "../molecules";
import { Collapse } from "../organisms";

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return !state;
    case "set":
      return action.payload;
    default:
      break;
  }
}

export default function CategoryList({ categories, category, onChange }) {
  const total = categories.reduce((a, b) => a + b.total, 0);
  const [collapse, dispatch] = useReducer(reducer, true);

  return (
    <div className="col-md-3">
      {/* <div className="card sticky-md-top" style={{ top: "75px" }}> */}
      <div className="card sticky-md-top mt-4">
        <div
          className="card-header text-dark"
          onClick={() => dispatch({ type: "toggle" })}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-caret-down-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          Categorías
        </div>
        <Collapse
          classNames="card-body p-0"
          isOpen={collapse}
          dispatch={dispatch}
          category={category}
        >
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
        </Collapse>
      </div>
    </div>
  );
}
