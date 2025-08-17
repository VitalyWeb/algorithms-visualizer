import sort from "../img/sortings-min.png";
import search from "../img/search-min.png";
import graph from "../img/graph-min.png";
import string from "../img/string-min.png";
import greedy from "../img/greedy-min.png";
import numeric from "../img/numeric-min.png";
import recursive from "../img/recursive-min.png";
import tree from "../img/tree-min.png";

import { descriptionQuickSort, ideaQuickSort, quickSortJS, quickSortPy, quickSortCpp } from "../algorithms/quick-sort.js";

export const CATEGORIES = [
  {
    id: "sorting",
    title: "Сортировка и организация данных",
    image: sort,
    algorithms: [
      {
        id: "quick-sort",
        title: "Быстрая сортировка",
        description: descriptionQuickSort || undefined,
        idea: ideaQuickSort || undefined,
        animation: "/animations/quick-sort.gif",
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)", space: "O(log n)" },
        code: { javascript: quickSortJS, python: quickSortPy, cpp: quickSortCpp }
      },
      { id: "timsort", title: "Тимсорт", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "introsort", title: "Интроспективная сортировка", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "radixsort", title: "Поразрядная сортировка", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "countingsort", title: "Сортировка подсчетом", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "mergesort", title: "Сортировка слиянием", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "spreadsort", title: "Сортировка с разбросом", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "search",
    title: "Алгоритмы поиска",
    image: search,
    algorithms: [
      { id: "linearsearch", title: "Линейный поиск", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "binarysearch", title: "Бинарный поиск", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "interpolationsearch", title: "Интерполяционный поиск", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "exponentialsearch", title: "Экспоненциальный поиск", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "ternarysearch", title: "Тернарный поиск", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "jumpsearch", title: "Поиск прыжками", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "fibonaccisearch", title: "Поиск Фибоначчи", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "string",
    title: "Работа со строками",
    image: string,
    algorithms: [
      { id: "reverse-string", title: "Обратная строка", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "palindrome-check", title: "Проверка палиндрома", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "substring-search", title: "Поиск подстроки", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "string-compression", title: "Сжатие строки", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "char-frequency", title: "Подсчет частоты символов", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "graph",
    title: "Графы",
    image: graph,
    algorithms: [
      { id: "bfs", title: "Поиск в ширину (BFS)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "dfs", title: "Поиск в глубину (DFS)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "dijkstra", title: "Алгоритм Дейкстры", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "bellman-ford", title: "Алгоритм Беллмана-Форда", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "floyd-warshall", title: "Алгоритм Флойда-Уоршелла", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "kruskal", title: "Минимальное остовное дерево (Kruskal)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "prim", title: "Минимальное остовное дерево (Prim)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "tree",
    title: "Деревья",
    image: tree,
    algorithms: [
      { id: "in-order", title: "Обход дерева In-order", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "pre-order", title: "Обход дерева Pre-order", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "post-order", title: "Обход дерева Post-order", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "bst-search", title: "Поиск в бинарном дереве поиска", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "greedy",
    title: "Жадные алгоритмы",
    image: greedy,
    algorithms: [
      { id: "fractional-knapsack", title: "Задача о рюкзаке (Fractional)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "interval-scheduling", title: "Сортировка интервалов / планирование мероприятий", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "mst-kruskal", title: "Минимальное остовное дерево (Kruskal)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "mst-prim", title: "Минимальное остовное дерево (Prim)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "numeric",
    title: "Числовые алгоритмы",
    image: numeric,
    algorithms: [
      { id: "gcd", title: "НОД (Евклид)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "lcm", title: "НОК", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "fast-power", title: "Быстрое возведение в степень", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "prime-check", title: "Проверка простых чисел", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "factorial", title: "Факториал", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "recursive",
    title: "Рекурсия и DP",
    image: recursive,
    algorithms: [
      { id: "fibonacci", title: "Фибоначчи (рекурсия и мемоизация)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "grid-paths", title: "Подсчет путей в сетке", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "min-path-sum", title: "Минимальная сумма пути", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "partition-problem", title: "Разбиение чисел (Partition)", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "n-queens", title: "Задача N-Queens", description: undefined, idea: undefined, animation: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
];

export const flatAlgorithms = CATEGORIES.flatMap((c) =>
  c.algorithms.map(a => ({ ...a, categoryId: c.id, categoryTitle: c.title }))
);