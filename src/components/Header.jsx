import { Link, useNavigate } from "react-router-dom";
import { useSearchState, useSearchDispatch } from "../context/SearchContext";
import logo from "../img/logo-min.webp";
import { useMemo } from "react";
import { CATEGORIES, flatAlgorithms } from "../data/categories";

export default function Header() {
  const navigate = useNavigate();
  const state = useSearchState();
  const dispatch = useSearchDispatch();

  const items = useMemo(() => [
    ...CATEGORIES.map(c => ({ id: c.id, title: c.title, type: "category", to: `/category/${c.id}` })),
    ...flatAlgorithms.map(a => ({ id: a.id, title: a.title, type: "algorithm", to: `/algo/${a.id}` }))
  ], []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.results[0]) navigate(state.results[0].to);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="logo" />
        <nav className="header__nav">
          <Link to="/">Категории</Link>
          <Link to="/about">О приложении</Link>
        </nav>
      </div>
      <form onSubmit={onSubmit} className="search">
        <input
          className="search__input"
          placeholder="Поиск..."
          value={state.query}
          onChange={(e) => dispatch({ type: "SET_QUERY", payload: e.target.value, items })}
        />
        {state.query && state.results.length > 0 && (
          <div className="search__dropdown">
            {state.results.map(r => (
              <Link
                key={r.type + r.id}
                to={r.to}
                className="search__item"
                onClick={() => dispatch({ type: "CLEAR_QUERY" })}
              >
                {r.title} <span className="search__type">({r.type})</span>
              </Link>
            ))}
          </div>
        )}
      </form>
    </header>
  );
}