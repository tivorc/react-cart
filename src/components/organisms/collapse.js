import React, { useRef, useEffect } from "react";
import { Collapse as C } from "bootstrap/dist/js/bootstrap.esm.js";

export default function Collapse({ children, classNames, isOpen }) {
  const div = useRef(null);
  const collapse = useRef(null);

  useEffect(() => {
    collapse.current = new C(div.current, {
      toggle: false,
    });
  }, []);

  useEffect(() => {
    let id;
    if (collapse.current._isTransitioning) {
      id = setTimeout(() => {
        collapse.current[isOpen ? "show" : "hide"]();
      }, 360);
    } else {
      collapse.current[isOpen ? "show" : "hide"]();
    }
    return () => clearTimeout(id);
  }, [isOpen]);

  return (
    <div ref={div} className={classNames + " collapse"}>
      {children}
    </div>
  );
}
