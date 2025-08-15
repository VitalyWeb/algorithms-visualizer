import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";

import logo from "./img/logo.png";
import sort from "./img/sortings.png";
import search from "./img/search.png";
import graph from "./img/graph.png";
import dp from "./img/dynamic.png";
import string from "./img/string.png";
import greedy from "./img/greedy.png";

// --- Demo data ---------------------------------------------------------------
export const CATEGORIES = [
  {
    id: "sorting",
    title: "Сортировка и организация данных",
    image: sort,
    algorithms: [
      { id: "quick-sort", title: "Быстрая сортировка", summary: "Разделяй и властвуй для массива.", content: "Выбираем опорный элемент, делим массив на меньшие и большие, рекурсивно сортируем. Средняя сложность: O(n log n)." },
      { id: "merge-sort", title: "Сортировка слиянием", summary: "Стабильная сортировка через слияние.", content: "Делим массив пополам, рекурсивно сортируем части и сливаем их. Сложность: O(n log n)." },
      { id: "heap-sort", title: "Пирамидальная сортировка", summary: "Сортировка через структуру кучи.", content: "Построение кучи и последовательное извлечение максимума. Сложность: O(n log n)." },
      { id: "bubble-sort", title: "Пузырьковая сортировка", summary: "Простая сортировка с попарными обменами.", content: "Многократно проходим по массиву, сравнивая соседние элементы. Сложность: O(n^2)." },
      { id: "insertion-sort", title: "Сортировка вставками", summary: "Простая сортировка для почти отсортированных массивов.", content: "Элементы вставляются на своё место. Сложность: O(n^2), лучшая O(n)." },
      { id: "radix-sort", title: "Поразрядная сортировка", summary: "Сортировка чисел по разрядам.", content: "Обход чисел по разрядам с использованием стабильной сортировки. Сложность: O(nk)." },
    ],
  },
  {
    id: "searching",
    title: "Поиск и выбор",
    image: search,
    algorithms: [
      { id: "linear-search", title: "Линейный поиск", summary: "Перебор элементов массива.", content: "Ищем элемент поочередно. Сложность: O(n)." },
      { id: "binary-search", title: "Бинарный поиск", summary: "Поиск в отсортированном массиве.", content: "Делим массив пополам и ищем рекурсивно. Сложность: O(log n)." },
      { id: "interpolation-search", title: "Интерполяционный поиск", summary: "Оптимизация бинарного поиска.", content: "Использует формулу для предсказания позиции. Сложность: O(log log n) для равномерных данных." },
      { id: "dfs", title: "Поиск в глубину (DFS)", summary: "Обход графа в глубину.", content: "Рекурсивно или с использованием стека обходим вершины графа." },
      { id: "bfs", title: "Поиск в ширину (BFS)", summary: "Обход графа в ширину.", content: "Используем очередь для обхода графа слоями." },
    ],
  },
  {
    id: "graphs",
    title: "Графовые алгоритмы",
    image: graph,
    algorithms: [
      { id: "dijkstra", title: "Алгоритм Дейкстры", summary: "Кратчайший путь от одной вершины.", content: "Использует приоритетную очередь для поиска минимальных расстояний." },
      { id: "floyd-warshall", title: "Алгоритм Флойда-Уоршелла", summary: "Кратчайшие пути между всеми вершинами.", content: "Таблица расстояний обновляется для всех пар вершин. Сложность: O(n^3)." },
      { id: "a-star", title: "A* поиск", summary: "Поиск с эвристикой.", content: "Комбинирует g(n) + h(n) для эффективного поиска пути." },
      { id: "prim", title: "Минимальное остовное дерево (Prim)", summary: "Построение дерева с минимальным весом.", content: "Добавляем минимальные рёбра по одной вершине." },
      { id: "kruskal", title: "Минимальное остовное дерево (Kruskal)", summary: "Выбираем минимальные рёбра без циклов.", content: "Сортируем рёбра по весу и объединяем компоненты." },
      { id: "topological-sort", title: "Топологическая сортировка", summary: "Упорядочивание вершин DAG.", content: "Используется DFS и стек для упорядочивания." },
    ],
  },
  {
    id: "dp",
    title: "Динамическое программирование",
    image: dp,
    algorithms: [
      { id: "knapsack", title: "Задача о рюкзаке", summary: "Оптимизация выбора предметов.", content: "Максимизация стоимости при ограничении веса." },
      { id: "fibonacci-memo", title: "Фибоначчи с мемоизацией", summary: "Эффективное вычисление чисел Фибоначчи.", content: "Используем кеширование для ускорения. Сложность: O(n)." },
      { id: "lis", title: "Наибольшая возрастающая подпоследовательность", summary: "Поиск подпоследовательности с максимальной длиной.", content: "Динамическое программирование для оптимизации. Сложность: O(n^2) или O(n log n)." },
      { id: "edit-distance", title: "Редакционное расстояние", summary: "Измерение различий между строками.", content: "Вычисляем минимальное количество операций вставки/удаления/замены." },
      { id: "matrix-chain", title: "Умножение матриц DP", summary: "Оптимизация порядка умножения матриц.", content: "Минимизируем количество скалярных умножений. Сложность: O(n^3)." },
    ],
  },
  {
    id: "strings",
    title: "Алгоритмы работы со строками",
    image: string,
    algorithms: [
      { id: "kmp", title: "KMP", summary: "Быстрый поиск подстроки.", content: "Использует префикс-функцию для оптимизации поиска. Сложность: O(n + m)." },
      { id: "rabin-karp", title: "Rabin-Karp", summary: "Поиск подстроки с хешированием.", content: "Использует хеш-суммы для ускорения сравнения." },
      { id: "suffix-array", title: "Суффиксный массив", summary: "Структура для поиска подстрок.", content: "Сортируем все суффиксы строки для быстрого поиска." },
      { id: "z-function", title: "Z-функция", summary: "Анализ подстрок.", content: "Вычисление длины максимального префикса, совпадающего с позицией. Сложность: O(n)." },
      { id: "trie", title: "Trie / Префиксное дерево", summary: "Поиск и хранение слов.", content: "Дерево для быстрого поиска строк и автодополнения." },
    ],
  },
  {
    id: "greedy",
    title: "Жадные алгоритмы и перебор",
    image: greedy,
    algorithms: [
      { id: "greedy-basic", title: "Жадные алгоритмы", summary: "Выбор локально оптимальных решений.", content: "Применяются в задачах покрытия множеств, активностей, монет." },
      { id: "backtracking", title: "Backtracking", summary: "Перебор с откатом.", content: "Используется для поиска всех решений (N-ферзей, головоломки)." },
      { id: "branch-bound", title: "Branch and Bound", summary: "Комбинирование жадного и DP подхода.", content: "Оптимизация перебора с отсечением невыгодных ветвей." },
      { id: "divide-conquer", title: "Разделяй и властвуй", summary: "Подход к сложным задачам.", content: "Применяется в сортировках, умножении матриц, быстрых экспонентах." },
      { id: "activity-selection", title: "Выбор активностей", summary: "Жадный выбор задач без пересечений.", content: "Выбираем задачи по времени окончания. Сложность: O(n log n)." },
    ],
  },
];

const flatAlgorithms = CATEGORIES.flatMap((c) => c.algorithms.map(a => ({...a, categoryId: c.id, categoryTitle: c.title})));

function useSearch(items) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return items.filter(i => (i.title + " " + (i.summary || "")).toLowerCase().includes(q)).slice(0, 8);
  }, [query, items]);
  return { query, setQuery, results };
}

function Card({ title, image, subtitle, to }) {
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

function Header() {
  const navigate = useNavigate();
  const { query, setQuery, results } = useSearch([...CATEGORIES.map(c => ({
    id: c.id,
    title: c.title,
    type: "category",
    to: `/category/${c.id}`,
  })), ...flatAlgorithms.map(a => ({
    id: a.id,
    title: a.title,
    type: "algorithm",
    to: `/algo/${a.id}`,
  }))]);

  const onSubmit = (e) => {
    e.preventDefault();
    const first = results[0];
    if (first) navigate(first.to);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="logo"></img>
        <nav className="header__nav">
          <Link to="/">Категории</Link>
          <Link to="/about">О приложении</Link>
        </nav>
      </div>
      <form onSubmit={onSubmit} className="search">
        <input
          className="search__input"
          placeholder="Поиск по категориям и алгоритмам…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && results.length > 0 && (
  <div className="search__dropdown">
    {results.map((r) => (
      <Link
        key={r.type + r.id}
        to={r.to}
        className="search__item"
        onClick={() => setQuery("")}
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">Algorama</div>
        <p>© {new Date().getFullYear()} Algorama. Автор VitalyWeb.<br/> Сделано в рамках индивидуального проекта.</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="main">
      <section className="main__grid">
        {CATEGORIES.map((c) => (
          <Card key={c.id} title={c.title} image={c.image} subtitle={`Алгоритмов: ${c.algorithms.length}`} to={`/category/${c.id}`} />
        ))}
      </section>
    </main>
  );
}

function CategoryPage() {
  const { id } = useParams();
  const category = CATEGORIES.find(c => c.id === id);

  if (!category) return <NotFound text="Категория не найдена"/>;

  return (
    <main className="main">
      <Link to="/" className="btn-back">
  <i className="fas fa-arrow-left"></i> Назад
</Link>
      <h2>{category.title}</h2>
      <div className="main__grid">
        {category.algorithms.map((a) => (
          <Card key={a.id} title={a.title} image={category.image} subtitle={a.summary} to={`/algo/${a.id}`} />
        ))}
      </div>
    </main>
  );
}

function AlgorithmPage() {
  const { id } = useParams();
  const algo = flatAlgorithms.find(a => a.id === id);
  if (!algo) return <NotFound text="Алгоритм не найден"/>;

  return (
    <main className="main">
      <Link to={`/category/${algo.categoryId}`} className="btn-back">
  <i className="fas fa-arrow-left"></i> Назад
</Link>

      <h1>{algo.title}</h1>
      <p>{algo.summary}</p>
      <div className="algo__content">{algo.content}</div>
    </main>
  );
}


function AboutPage() {
  return (
    <main className="main">
      <h1>О приложении</h1>
      <p>Algorama — учебное приложение для визуализации алгоритмов. Чистый CSS, БЭМ, адаптив.</p>
    </main>
  );
}

function NotFound({ text = "Не найдено" }) {
  return (
    <main className="main">
      <h1>{text}</h1>
      <Link to="/">На главную</Link>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/algo/:id" element={<AlgorithmPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}