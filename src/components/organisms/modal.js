import React, { useRef, useEffect } from "react";
import { Modal as Mod } from "bootstrap/dist/js/bootstrap.esm.js";

export default function Modal(props) {
  const div = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const el = div.current;

    modal.current = new Mod(el, {});
    el.addEventListener("hide.bs.modal", props.onCloseModal);

    return () => {
      el.removeEventListener("hide.bs.modal", props.onCloseModal);
    };
  }, [props.onCloseModal]);

  useEffect(() => {
    props.show ? modal.current.show() : modal.current.hide();
  }, [props.show]);

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      // style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ref={div}
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
