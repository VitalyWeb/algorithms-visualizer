import { Link } from "react-router-dom";

export default function Card({ title, image, subtitle, to }) {
  return (
    <div className="card">
      <Link to={to} className="card__link">
        <div className="card__image">
          <img src={image} alt={title} />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      </Link>
    </div>
  );
}
