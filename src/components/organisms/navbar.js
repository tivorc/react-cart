import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { context } from "../../context";
import cart from "../../assets/images/shopping-cart.svg";
import { Float } from "../molecules";

export default function Navbar() {
  const { totalItems } = useContext(context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black mb-2 border-bottom shadow-sm fixed-top">
      <div className="container">
        <Float totalItems={totalItems} />
        <Link className="navbar-brand" to="/">
          Monago's Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/shopping-cart">
                <img
                  width="30"
                  height="24"
                  className="d-inline-block align-top"
                  src={cart}
                  alt="cart logo"
                />
                <span className="badge rounded-pill bg-warning text-dark">
                  {totalItems}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
