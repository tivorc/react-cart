import React from "react";

export default function ProductFilter({ order, setOrder }) {
  return (
    <div className="col-md-5 row justify-content-center justify-content-md-start">
      <span className="col-md-5 text-start text-md-end">Ordenar por:</span>
      <div className="form-group col-md-7 pe-0 mb-md-0 mb-3">
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
