import React from "react";
import { ProductControls } from ".";

export default function CartRow(props) {
  const { id, name, price, quantity, dispatch } = props;

  function handlerAdd() {
    dispatch({ type: "add", payload: { id } });
  }

  function handlerRemove() {
    dispatch({ type: "remove", payload: { id } });
  }

  return (
    <tr>
      <th className="text-center p-1 d-md-inline-block d-none" scope="row">
        <img
          width={"80px"}
          height={"80px"}
          className="rounded-circle"
          src={"https://picsum.photos/100/100"}
          alt={name}
        />
      </th>
      <td className="align-middle p-1 text-center">
        <img
          width={"50px"}
          height={"50px"}
          className="rounded-circle d-md-none d-inline-block"
          src={"https://picsum.photos/100/100"}
          alt={name}
        />{" "}
        <span className="d-block">{name}</span>
      </td>
      <td className="text-center align-middle p-1">
        <ProductControls
          {...props}
          onRemove={handlerRemove}
          onAdd={handlerAdd}
        />
      </td>
      <td className="text-right align-middle pr-md-4 p-1">
        S/. {(price * quantity).toFixed(2)}
      </td>
    </tr>
  );
}
