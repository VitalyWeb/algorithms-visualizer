import sort from "../img/sortings-min.png";
import search from "../img/search-min.png";
import graph from "../img/graph-min.png";
import numeric from "../img/numeric-min.png";
import tree from "../img/tree-min.png";

import * as Sort from "../algorithmsInfo/sort-info.js";
import * as Search from "../algorithmsInfo/search-info.js";
import * as Graph from "../algorithmsInfo/graph-info.js";

export const CATEGORIES = [
  {
    id: "sorting",
    title: "Сортировка и организация данных",
    image: sort,
    algorithms: [
      {
        id: "quick-sort",
        title: "Быстрая сортировка",
        description: Sort.descriptionQuickSort,
        idea: Sort.ideaQuickSort,
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)", space: "O(log n)" },
        code: { javascript: Sort.codeQuickSort.javascript, python: Sort.codeQuickSort.python, cpp: Sort.codeQuickSort.cpp }
      },
      {
        id: "tim-sort",
        title: "Тимсорт",
        description: Sort.descriptionTimSort,
        idea: Sort.ideaTimSort,
        complexity: { best: "O(n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)" },
        code: { javascript: Sort.codeTimSort.javascript, python: Sort.codeTimSort.python, cpp: Sort.codeTimSort.cpp }
      },
      {
        id: "intro-sort",
        title: "Интроспективная сортировка",
        description: Sort.descriptionIntroSort,
        idea: Sort.ideaIntroSort,
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(log n)" },
        code: { javascript: Sort.codeIntroSort.javascript, python: Sort.codeIntroSort.python, cpp: Sort.codeIntroSort.cpp }
      },
      {
        id: "radix-sort",
        title: "Поразрядная сортировка",
        description: Sort.descriptionRadixSort,
        idea: Sort.ideaRadixSort,
        complexity: { best: "O(n * k)", average: "O(n * k)", worst: "O(n * k)", space: "O(n + k)" },
        code: { javascript: Sort.codeRadixSort.javascript, python: Sort.codeRadixSort.python, cpp: Sort.codeRadixSort.cpp }
      },
      {
        id: "counting-sort",
        title: "Сортировка подсчетом",
        description: Sort.descriptionCountSort,
        idea: Sort.ideaCountSort,
        complexity: { best: "O(n + k)", average: "O(n + k)", worst: "O(n + k)", space: "O(n + k)" },
        code: { javascript: Sort.codeCountSort.javascript, python: Sort.codeCountSort.python, cpp: Sort.codeCountSort.cpp }
      },
      {
        id: "merge-sort",
        title: "Сортировка слиянием",
        description: Sort.descriptionMergeSort,
        idea: Sort.ideaMergeSort,
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)" },
        code: { javascript: Sort.codeMergeSort.javascript, python: Sort.codeMergeSort.python, cpp: Sort.codeMergeSort.cpp }
      },
      {
        id: "bucket-sort",
        title: "Сортировка с разбросом",
        description: Sort.descriptionBucketSort,
        idea: Sort.ideaBucketSort,
        complexity: { best: "O(n + k)", average: "O(n + k)", worst: "O(n^2)", space: "O(n + k)" },
        code: { javascript: Sort.codeBucketSort.javascript, python: Sort.codeBucketSort.python, cpp: Sort.codeBucketSort.cpp }
      },
    ]
  },
  {
    id: "search",
    title: "Алгоритмы поиска",
    image: search,
    algorithms: [
      {
        id: "linear-search",
        title: "Линейный поиск",
        description: Search.descriptionLinearSearch,
        idea: Search.ideaLinearSearch,
        complexity: { best: "O(1)", average: "O(n)", worst: "O(n)", space: "O(1)" },
        code: { javascript: Search.codeLinearSearch.javascript, python: Search.codeLinearSearch.python, cpp: Search.codeLinearSearch.cpp }
      },
      {
        id: "binary-search",
        title: "Бинарный поиск",
        description: Search.descriptionBinarySearch,
        idea: Search.ideaBinarySearch,
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeBinarySearch.javascript, python: Search.codeBinarySearch.python, cpp: Search.codeBinarySearch.cpp }
      },
      {
        id: "interpolation-search",
        title: "Интерполяционный поиск",
        description: Search.descriptionInterpolationSearch,
        idea: Search.ideaInterpolationSearch,
        complexity: { best: "O(1)", average: "O(log log n)", worst: "O(n)", space: "O(1)" },
        code: { javascript: Search.codeInterpolationSearch.javascript, python: Search.codeInterpolationSearch.python, cpp: Search.codeInterpolationSearch.cpp }
      },
      {
        id: "exponential-search",
        title: "Экспоненциальный поиск",
        description: Search.descriptionExponentialSearch,
        idea: Search.ideaExponentialSearch,
        complexity: { best: "O(1)", average: "O(log i)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeExponentialSearch.javascript, python: Search.codeExponentialSearch.python, cpp: Search.codeExponentialSearch.cpp }
      },
      {
        id: "ternary-search",
        title: "Тернарный поиск",
        description: Search.descriptionTernarySearch,
        idea: Search.ideaTernarySearch,
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeTernarySearch.javascript, python: Search.codeTernarySearch.python, cpp: Search.codeTernarySearch.cpp }
      },
      {
        id: "jump-search",
        title: "Поиск прыжками",
        description: Search.descriptionJumpSearch,
        idea: Search.ideaJumpSearch,
        complexity: { best: "O(sqrt(n))", average: "O(sqrt(n))", worst: "O(sqrt(n))", space: "O(1)" },
        code: { javascript: Search.codeJumpSearch.javascript, python: Search.codeJumpSearch.python, cpp: Search.codeJumpSearch.cpp }
      },
      {
        id: "fibonacci-search",
        title: "Поиск Фибоначчи",
        description: Search.descriptionFibonacciSearch,
        idea: Search.ideaFibonacciSearch,
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeFibonacciSearch.javascript, python: Search.codeFibonacciSearch.python, cpp: Search.codeFibonacciSearch.cpp }
      },
    ]
  },
  {
    id: "graph",
    title: "Графы",
    image: graph,
    algorithms: [
      {
        id: "bfs",
        title: "Поиск в ширину (BFS)",
        description: Graph.descriptionBFS,
        idea: Graph.ideaBFS,
        complexity: { best: "O(V + E)", average: "O(V + E)", worst: "O(V + E)", space: "O(V)" },
        code: { javascript: Graph.codeBFS.javascript, python: Graph.codeBFS.python, cpp: Graph.codeBFS.cpp }
      },
      {
        id: "dfs",
        title: "Поиск в глубину (DFS)",
        description: Graph.descriptionDFS,
        idea: Graph.ideaDFS,
        complexity: { best: "O(V + E)", average: "O(V + E)", worst: "O(V + E)", space: "O(V)" },
        code: { javascript: Graph.codeDFS.javascript, python: Graph.codeDFS.python, cpp: Graph.codeDFS.cpp }
      },
      {
        id: "dijkstra",
        title: "Алгоритм Дейкстры",
        description: Graph.descriptionDijkstra,
        idea: Graph.ideaDijkstra,
        complexity: { best: "O(E + V log V)", average: "O(E + V log V)", worst: "O(E + V log V)", space: "O(V + E)" },
        code: { javascript: Graph.codeDijkstra.javascript, python: Graph.codeDijkstra.python, cpp: Graph.codeDijkstra.cpp }
      },
      {
        id: "bellman-ford",
        title: "Алгоритм Беллмана-Форда",
        description: Graph.descriptionBellmanFord,
        idea: Graph.ideaBellmanFord,
        complexity: { best: "O(V * E)", average: "O(V * E)", worst: "O(V * E)", space: "O(V)" },
        code: { javascript: Graph.codeBellmanFord.javascript, python: Graph.codeBellmanFord.python, cpp: Graph.codeBellmanFord.cpp }
      },
      {
        id: "floyd-warshall",
        title: "Алгоритм Флойда-Уоршелла",
        description: Graph.descriptionFloydWarshall,
        idea: Graph.ideaFloydWarshall,
        complexity: { best: "O(V^3)", average: "O(V^3)", worst: "O(V^3)", space: "O(V^2)" },
        code: { javascript: Graph.codeFloydWarshall.javascript, python: Graph.codeFloydWarshall.python, cpp: Graph.codeFloydWarshall.cpp }
      },
      {
        id: "prim",
        title: "Минимальное остовное дерево (Prim)",
        description: Graph.descriptionPrim,
        idea: Graph.ideaPrim,
        complexity: { best: "O(E + V log V)", average: "O(E + V log V)", worst: "O(E + V log V)", space: "O(V + E)" },
        code: { javascript: Graph.codePrim.javascript, python: Graph.codePrim.python, cpp: Graph.codePrim.cpp }
      },
    ]
  },
  {
    id: "tree",
    title: "Деревья",
    image: tree,
    algorithms: [
      { id: "in-order", title: "Обход дерева In-order", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
      { id: "pre-order", title: "Обход дерева Pre-order", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
      { id: "post-order", title: "Обход дерева Post-order", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
      { id: "bst-search", title: "Поиск в бинарном дереве поиска", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
    ]
  },
  {
    id: "numeric",
    title: "Числовые алгоритмы",
    image: numeric,
    algorithms: [
      { id: "gcd", title: "НОД (Евклид)", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
      { id: "lcm", title: "НОК", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
      { id: "fast-power", title: "Быстрое возведение в степень", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
      { id: "prime-check", title: "Проверка простых чисел", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
      { id: "factorial", title: "Факториал", description: undefined, idea: undefined, complexity: {}, code: { javascript: undefined, python: undefined, cpp: undefined } },
    ]
  },
];

export const flatAlgorithms = CATEGORIES.flatMap((c) =>
  c.algorithms.map(a => ({ ...a, categoryId: c.id, categoryTitle: c.title }))
);