import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import { CATEGORIES } from "../data/categories";
import NotFound from "./NotFound";

export default function CategoryPage() {
  const { id } = useParams();
  const category = CATEGORIES.find(c => c.id === id);
  if (!category) return <NotFound text="Категория не найдена" />;

  return (
    <main className="main">
      <Link to="/" className="btn-back">← Назад</Link>
      <h2>{category.title}</h2>
      <div className="main__grid">
        {category.algorithms.map(a => (
          <Card
            key={a.id}
            title={a.title}
            image={category.image}
            subtitle={a.description}
            to={`/algo/${a.id}`}
          />
        ))}
      </div>
    </main>
  );
}
