import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Card({ title, image, subtitle, to }) {
  return (
    <div className="card">
      <Link to={to} className="card__link">
        <div className="card__image">
          <LazyLoadImage
            src={image[360]}
            srcSet={` ${image[180]} 180w, ${image[360]} 360w`}
            sizes="(max-width: 600px) 180px, (max-width: 1200px) 360px"
            effect="blur"
            width="100%"
            height="100%"
          />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      </Link>
    </div>
  );
}
