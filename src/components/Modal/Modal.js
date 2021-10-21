import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ src, alt, onSelect }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onSelect();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onSelect();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
