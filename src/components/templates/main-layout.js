import React from "react";
import { Navbar } from "../organisms";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}
