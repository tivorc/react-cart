import { useRef, useEffect, useState } from "react";
import { Collapse as C } from "bootstrap/dist/js/bootstrap.esm.js";

export default function Collapse({ children, classNames, isOpen }) {
  const div = useRef(null);
  const collapse = useRef(null);
  const [state] = useState(isOpen);

  useEffect(() => {
    div.current.classList.toggle("show", state);
    collapse.current = new C(div.current, {
      toggle: false,
    });
  }, [state]);

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
