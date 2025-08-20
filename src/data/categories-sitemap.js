export const CATEGORIES_SITEMAP = [
  {
    id: "sorting",
    title: "Сортировка и организация данных",
    algorithms: [
      { id: "quick-sort", title: "Быстрая сортировка" },
      { id: "tim-sort", title: "Тимсорт" },
      { id: "intro-sort", title: "Интроспективная сортировка" },
      { id: "radix-sort", title: "Поразрядная сортировка" },
      { id: "counting-sort", title: "Сортировка подсчетом" },
      { id: "merge-sort", title: "Сортировка слиянием" },
      { id: "bucket-sort", title: "Сортировка с разбросом" },
    ],
  },
  {
    id: "search",
    title: "Алгоритмы поиска",
    algorithms: [
      { id: "linear-search", title: "Линейный поиск" },
      { id: "binary-search", title: "Бинарный поиск" },
      { id: "interpolation-search", title: "Интерполяционный поиск" },
      { id: "exponential-search", title: "Экспоненциальный поиск" },
      { id: "ternary-search", title: "Тернарный поиск" },
      { id: "jump-search", title: "Поиск прыжками" },
      { id: "fibonacci-search", title: "Поиск Фибоначчи" },
    ],
  },
  {
    id: "graph",
    title: "Графы",
    algorithms: [
      { id: "bfs", title: "Поиск в ширину (BFS)" },
      { id: "dfs", title: "Поиск в глубину (DFS)" },
      { id: "dijkstra", title: "Алгоритм Дейкстры" },
      { id: "bellman-ford", title: "Алгоритм Беллмана-Форда" },
      { id: "floyd-warshall", title: "Алгоритм Флойда-Уоршелла" },
      { id: "prim", title: "Минимальное остовное дерево (Prim)" },
    ],
  },
  {
    id: "tree",
    title: "Деревья",
    algorithms: [
      { id: "in-order", title: "Обход дерева In-order" },
      { id: "pre-order", title: "Обход дерева Pre-order" },
      { id: "post-order", title: "Обход дерева Post-order" },
      { id: "bst-search", title: "Поиск в бинарном дереве поиска" },
    ],
  },
];

export const flatAlgorithmsSitemap = CATEGORIES_SITEMAP.flatMap(c =>
  c.algorithms.map(a => ({ categoryId: c.id, categoryTitle: c.title, ...a }))
);