import React, { useRef, useEffect } from "react";
import { Collapse as Col } from "bootstrap/dist/js/bootstrap.esm.js";

export default function Collapse({
  children,
  classNames,
  isOpen,
  category,
  dispatch,
}) {
  const element = useRef(null);
  const collapse = useRef(null);
  const isMovil = useRef(window.innerWidth < 576);

  useEffect(() => {
    const el = element.current;
    collapse.current = new Col(el, {
      toggle: isMovil.current,
    });
    // dispatch({ type: "set", payload: !isMovil.current });
    // }, [dispatch]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      collapse.current.show();
    } else {
      collapse.current.hide();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMovil.current) {
      dispatch({ type: "set", payload: false });
      // collapse.current.hide();
    }
  }, [category, dispatch]);

  return (
    <div ref={element} className={classNames + " collapse show"}>
      {children}
    </div>
  );
}
