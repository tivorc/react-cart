import React, { useState, useCallback } from "react";
import { Modal } from "../organisms";

export default function Product() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return <Modal show={showModal} onCloseModal={closeModal} />;
}
