import React, { useContext } from "react";
import { context } from "../../context";
import { ProductControls } from "../molecules";

export default function Product(props) {
  const { dispatch } = useContext(context);
  const { id, name, price } = props;

  function handlerAdd() {
    dispatch({ type: "add", payload: { ...props } });
  }

  function handlerRemove() {
    dispatch({ type: "remove", payload: { id } });
  }

  return (
    <div className="col-md-4 col-6 mx-0 px-0">
      <div className="card mx-2 mb-3 px-0">
        <img
          style={{ height: 220, objectFit: "cover" }}
          src={`https://picsum.photos/300/200`}
          className="card-img-top img-fluid"
          alt={name}
        />

        <div className="card-body p-md-2 p-1">
          <h6 className="card-title text-dark">{name}</h6>
          <h6 className="card-subtitle mb-2 text-muted">
            S/. {price.toFixed(2)}
          </h6>
        </div>
        <div className="card-footer p-0 text-muted">
          <ProductControls
            onAdd={handlerAdd}
            onRemove={handlerRemove}
            {...props}
          />
        </div>
      </div>
    </div>
  );
}
