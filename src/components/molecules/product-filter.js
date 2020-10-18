import React from "react";

export default function ProductFilter({ order, setOrder }) {
  return (
    <div className="col-md-5 row">
      <span className="col-md-4 text-right">Ordenar por:</span>
      <div className="form-group col-md-6 pr-0">
        <select
          className="form-select"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="des">Mayor precio</option>
          <option value="asc">Menor precio</option>
        </select>
      </div>
    </div>
  );
}
