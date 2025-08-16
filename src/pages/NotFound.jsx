import { Link } from "react-router-dom";
import notFound from "../img/notFound-min.png";

export default function NotFound({ text }) {
  return (
    <main className="main notfound">
      <Link to="/" className="btn-back">← На главную</Link>
      <div className="notfound__image-wrapper">
        <img src={notFound} alt="Страница не найдена" className="notfound__image" />
      </div>
      {text && <p>{text}</p>}
    </main>
  );
}
