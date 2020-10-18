import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { context } from "../../context";
import { MainLayout } from "../templates";
import { CartRow } from "../molecules";

const ARE_YOU_SURE = {
  title: "¿Seguro que desea guardar?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Si",
  cancelButtonText: "No",
};

const ALERT_SUCCESS = {
  title: "Bien!",
  text: "Registrado correctamente",
  icon: "success",
};

function ShoppingCart(props) {
  const { items, totalItems, dispatch } = useContext(context);
  const total = items.reduce((a, b) => a + b.quantity * b.price, 0);
  const mySwal = withReactContent(Swal);

  const swalWithBootstrapButtons = mySwal.mixin({
    customClass: {
      confirmButton: "btn btn-success px-4 mx-2",
      cancelButton: "btn btn-danger px-4 mx-2",
    },
    buttonsStyling: false,
  });

  const handleConfirm = () => {
    swalWithBootstrapButtons
      .fire(ARE_YOU_SURE)
      .then((result) => {
        if (result.value) {
          dispatch({ type: "clear" });
          swalWithBootstrapButtons.fire(ALERT_SUCCESS).then(() => {
            props.history.replace("/");
          });
        } else console.log("Don't close");
      })
      .catch(() => {
        swalWithBootstrapButtons.fire();
      });
  };

  return (
    <MainLayout>
      <h1 style={{ marginTop: "70px" }}>Carrito de compras</h1>
      <div className="row">
        <div className="col-md-9">
          <div className="card">
            <div className="card-header bg-white d-flex justify-content-between">
              <span>Tiene {totalItems} productos en el carrito</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() =>
                  dispatch({ type: "clear", payload: { ...props } })
                }
              >
                Limpiar carrito
              </button>
            </div>
            <div className="card-body p-0">
              <table className="table mb-0">
                <tbody>
                  <tr>
                    <th scope="col" colSpan="2" className="text-center">
                      Producto
                    </th>
                    <th scope="col" className="text-center">
                      Cantidad
                    </th>
                    <th scope="col" className="text-right pr-4">
                      Precio
                    </th>
                  </tr>
                  {items.map((ci) => (
                    <CartRow key={ci.id} {...ci} dispatch={dispatch} />
                  ))}

                  <tr>
                    <td
                      colSpan="4"
                      className="text-right font-weight-bold pr-4"
                    >
                      S/. {total.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer bg-white d-flex flex-row-reverse">
              {totalItems > 0 && (
                <button
                  onClick={handleConfirm}
                  className="btn btn-primary ml-4"
                >
                  CONFIRMAR COMPRA
                </button>
              )}
              <Link to="/" className="btn btn-default">
                Regresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default withRouter(ShoppingCart);
