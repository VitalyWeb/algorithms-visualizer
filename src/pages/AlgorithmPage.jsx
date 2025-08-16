import { useParams, Link } from "react-router-dom";
import { flatAlgorithms } from "../data/categories";
import NotFound from "./NotFound";

export default function AlgorithmPage() {
  const { id } = useParams();
  const algo = flatAlgorithms.find(a => a.id === id);
  if (!algo) return <NotFound />;

  return (
    <main className="main">
      <Link to={`/category/${algo.categoryId}`} className="btn-back">← Назад</Link>
      <h1>{algo.title}</h1>
      <h3>Описание</h3>
      <p>{algo.description}</p>
      <h3>Идея</h3>
      <p>{algo.idea}</p>
      <h3>Анимация</h3>
      <div className="algo__animation">
        <img src={algo.animation} alt={algo.title} />
      </div>
      {algo.pseudocode && (
        <>
          <h3>Псевдокод</h3>
          <pre className="algo__pseudocode">{algo.pseudocode}</pre>
        </>
      )}
      <h3>Сложность</h3>
      <table className="algo__table">
        <thead>
          <tr><th>Случай</th><th>Сложность</th></tr>
        </thead>
        <tbody>
          <tr><td>Лучший</td><td>{algo.complexity.best}</td></tr>
          <tr><td>Средний</td><td>{algo.complexity.average}</td></tr>
          <tr><td>Худший</td><td>{algo.complexity.worst}</td></tr>
          <tr><td>Память</td><td>{algo.complexity.space}</td></tr>
        </tbody>
      </table>
    </main>
  );
}
