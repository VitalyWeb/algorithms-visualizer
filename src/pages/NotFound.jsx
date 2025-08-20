import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import notFound180 from "../img/notFound-min-180w.webp";
import notFound360 from "../img/notFound-min-360w.webp";
import notFound720 from "../img/notFound-min-720w.webp";

export default function NotFound({ text }) {
  return (
    <main className="main notfound">
      <Link to="/" className="btn-back">
        <i className="fas fa-arrow-left"></i>На главную
      </Link>
      <div className="notfound__image-wrapper">
        <LazyLoadImage
          src={notFound360}
          srcSet={`
            ${notFound180} 180w,
            ${notFound360} 360w,
            ${notFound720} 720w
          `}
          sizes="(max-width: 480px) 180px, (max-width: 768px) 360px, 720px"
          alt="Страница не найдена"
          className="notfound__image"
        />
      </div>
      {text && <p>{text}</p>}
    </main>
  );
}
