import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

import { flatAlgorithms } from "../data/categories";
import { useLoader } from "../context/LoaderContext";
import { animationGenerators } from "../utils/animation-generators";

import NotFound from "./NotFound";
import AnimationPlayer from "../components/AnimationPlayer";

export default function AlgorithmPage() {
  const { id } = useParams();
  const algo = flatAlgorithms.find((a) => a.id === id);

  const [language, setLanguage] = useState("javascript");
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  if (!algo) return <NotFound />;

  const codeForLang = algo.code?.[language] || algo.pseudocode || "";
  const animationGenerator = animationGenerators[id];

  const showArraySizeControls =
    algo.categoryId === "sorting" || algo.categoryId === "search";

  return (
    <main className="main">
      <Link to={`/category/${algo.categoryId}`} className="btn-back">
        <i className="fas fa-arrow-left"></i>Назад
      </Link>

      <h1 className="algo__title">{algo.title}</h1>

      <section className="algo__description">
        <h3>Описание</h3>
        <p>{algo.description}</p>
      </section>

      <section className="algo__usage">
        <h3>Когда использовать</h3>
        {Array.isArray(algo.using) ? (
          <ul className="algo__list-custom">
            {algo.using.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        ) : (
          <p>{algo.using}</p>
        )}
      </section>

      <section className="algo__idea">
        <h3>Идея</h3>
        {Array.isArray(algo.idea) ? (
          <ul className="algo__list-custom">
            {algo.idea.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        ) : (
          <p>{algo.idea}</p>
        )}
      </section>

      <section className="algo__visualization">
        <h3>Визуализация</h3>
        <div className="algo__animation">
          <AnimationPlayer
            animationGenerator={animationGenerator}
            showArraySizeControls={showArraySizeControls}
          />
        </div>
      </section>

      {codeForLang && (
        <section className="algo__code">
          <h3>Код</h3>

          <div className="code-tabs">
            <button
              className={`code-tab ${language === "javascript" ? "active" : ""}`}
              onClick={() => setLanguage("javascript")}
            >
              JavaScript
            </button>
            <button
              className={`code-tab ${language === "python" ? "active" : ""}`}
              onClick={() => setLanguage("python")}
            >
              Python
            </button>
            <button
              className={`code-tab ${language === "cpp" ? "active" : ""}`}
              onClick={() => setLanguage("cpp")}
            >
              C++
            </button>
          </div>

          <SyntaxHighlighter language={language} style={vs} showLineNumbers>
            {codeForLang}
          </SyntaxHighlighter>
        </section>
      )}

      <section className="algo__complexity">
        <h3>Сложность</h3>
        <table className="algo__table">
          <thead>
            <tr>
              <th>Случай</th>
              <th>Сложность</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Лучший</td>
              <td>{algo.complexity.best}</td>
            </tr>
            <tr>
              <td>Средний</td>
              <td>{algo.complexity.average}</td>
            </tr>
            <tr>
              <td>Худший</td>
              <td>{algo.complexity.worst}</td>
            </tr>
            <tr>
              <td>Память</td>
              <td>{algo.complexity.space}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
