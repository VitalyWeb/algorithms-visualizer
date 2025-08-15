import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png"

export default function Header() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="AlgoVisualizer" />
        </Link>
      </div>

      <nav className="header__nav">
        <Link to="/">Главная</Link>
        <Link to="/categories">Категории</Link>
        <Link to="/compare">Сравнение</Link>
      </nav>

      <form className="header__search" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Поиск алгоритма..."
        />
        <button type="submit">🔍</button>
      </form>
    </header>
  );
}