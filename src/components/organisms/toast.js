import React, { useEffect, useRef } from "react";
import { Toast as T } from "bootstrap/dist/js/bootstrap.esm.js";

export default function Toast() {
  const div = useRef(null);

  useEffect(() => {
    const el = div.current;

    const element = new T(el, {});
    element.show();
    // el.addEventListener("hide.bs.modal", props.onCloseModal);

    // return () => {
    //   el.removeEventListener("hide.bs.modal", props.onCloseModal);
    // };
  }, []);

  return (
    <div
      ref={div}
      className="toast d-flex align-items-center text-white bg-primary border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-body">Hello, world! This is a toast message.</div>
      <button
        type="button"
        className="btn-close btn-close-white ml-auto mr-2"
        data-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  );
}
