import React from "react";

export default function ProductControls({ quantity, onRemove, onAdd }) {
  return (
    <div
      className="btn-group btn-group-sm"
      role="group"
      aria-label="Basic outlined example"
      style={{ width: "100%" }}
    >
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          if (quantity === 0) return;
          onRemove();
        }}
      >
        -
      </button>
      <span className="col-md-7 text-center">{quantity + " "} en carrito</span>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          onAdd();
        }}
      >
        +
      </button>
    </div>
  );
}
