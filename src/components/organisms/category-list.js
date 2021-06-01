import { useState } from "react";
import { Category } from "../molecules";
import { Collapse } from "../organisms";
import arrowDown from "../../assets/images/arrow-down.svg";

const ALL = {
  id: "",
  name: "Todos",
  total: 0,
};

export default function CategoryList({ categories: c, category, onChange }) {
  const [isOpen, setIsOpen] = useState(!(window.innerWidth < 576));

  const handleChange = (id) => {
    if (window.innerWidth < 576) {
      setIsOpen(false);
    }
    onChange(id);
  };

  const total = c.reduce((a, b) => a + b.total, 0);
  const categories = [{ ...ALL, total: total }, ...c];
  return (
    <div className="col-md-3">
      <div className="card sticky-md-top mt-4">
        <div
          className="card-header text-dark pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="me-1" src={arrowDown} alt="cart logo" />
          Categorías
        </div>
        <Collapse classNames="card-body p-0" isOpen={isOpen}>
          <ul className="list-group list-group-flush">
            {categories.map((c) => (
              <Category
                key={c.id}
                category={category}
                {...c}
                onChange={handleChange}
              />
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
