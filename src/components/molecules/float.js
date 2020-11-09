import React from "react";
import { Link } from "react-router-dom";

import cart from "../../assets/images/shopping-cart.svg";
import "../../assets/styles/float.css";

export default function Float({ totalItems }) {
  return (
    <Link to="/shopping-cart" className="float">
      <img
        width="30"
        height="24"
        className="d-inline-block align-top my-float"
        src={cart}
        alt="cart logo"
      />
      <span className="badge rounded-pill bg-warning text-dark my-float">
        {totalItems}
      </span>
    </Link>
  );
}
