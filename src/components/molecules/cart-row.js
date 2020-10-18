import React from "react";
import { ProductControls } from ".";

export default function CartRow(props) {
  const { id, image, name, price, quantity, dispatch } = props;

  function handlerAdd() {
    dispatch({ type: "add", payload: { id } });
  }

  function handlerRemove() {
    dispatch({ type: "remove", payload: { id } });
  }

  return (
    <tr>
      <th className="text-center " scope="row">
        <img
          width={"100px"}
          height={"100px"}
          className="rounded-circle"
          src={image}
          alt={name}
        />
      </th>
      <td className="align-middle">{name}</td>
      <td className="text-center align-middle">
        <ProductControls
          {...props}
          onRemove={handlerRemove}
          onAdd={handlerAdd}
        />
      </td>
      <td className="text-right align-middle pr-4">
        S/. {(price * quantity).toFixed(2)}
      </td>
    </tr>
  );
}
