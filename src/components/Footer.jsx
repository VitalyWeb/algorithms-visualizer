import React from "react";
import logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logo} alt="AlgoVisualizer" className="footer__logo" />
        <p className="footer__text">
          Визуализация алгоритмов - легко и наглядно.
        </p>
      </div>
      <div className="footer__copyright">
        © 2025 AlgoVisualizer. Все права защищены.
      </div>
    </footer>
  );
}
