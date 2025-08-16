import Card from "../components/Card";
import { CATEGORIES } from "../data/categories";

export default function HomePage() {
  return (
    <main className="main">
      <section className="main__grid">
        {CATEGORIES.map(c => (
          <Card
            key={c.id}
            title={c.title}
            image={c.image}
            subtitle={`Алгоритмов: ${c.algorithms.length}`}
            to={`/category/${c.id}`}
          />
        ))}
      </section>
    </main>
  );
}