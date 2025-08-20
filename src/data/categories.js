import { IMAGES } from "../img/images";

import * as Sort from "../algorithmsInfo/sort-info";
import * as Search from "../algorithmsInfo/search-info";
import * as Graph from "../algorithmsInfo/graph-info";
import * as Tree from "../algorithmsInfo/tree-info"

export const CATEGORIES = [
  {
    id: "sorting",
    title: "Сортировка и организация данных",
    image: IMAGES.sorting,
    algorithms: [
      {
        id: "quick-sort",
        title: "Быстрая сортировка",
        description: Sort.descriptionQuickSort,
        using: Sort.usingQuickSort,
        idea: Sort.ideaQuickSort,
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)", space: "O(log n)" },
        code: { javascript: Sort.codeQuickSort.javascript, python: Sort.codeQuickSort.python, cpp: Sort.codeQuickSort.cpp }
      },
      {
        id: "tim-sort",
        title: "Тимсорт",
        description: Sort.descriptionTimSort,
        using: Sort.usingTimSort,
        idea: Sort.ideaTimSort,
        complexity: { best: "O(n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)" },
        code: { javascript: Sort.codeTimSort.javascript, python: Sort.codeTimSort.python, cpp: Sort.codeTimSort.cpp }
      },
      {
        id: "intro-sort",
        title: "Интроспективная сортировка",
        description: Sort.descriptionIntroSort,
        using: Sort.usingIntroSort,
        idea: Sort.ideaIntroSort,
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(log n)" },
        code: { javascript: Sort.codeIntroSort.javascript, python: Sort.codeIntroSort.python, cpp: Sort.codeIntroSort.cpp }
      },
      {
        id: "radix-sort",
        title: "Поразрядная сортировка",
        description: Sort.descriptionRadixSort,
        using: Sort.usingRadixSort,
        idea: Sort.ideaRadixSort,
        complexity: { best: "O(n * k)", average: "O(n * k)", worst: "O(n * k)", space: "O(n + k)" },
        code: { javascript: Sort.codeRadixSort.javascript, python: Sort.codeRadixSort.python, cpp: Sort.codeRadixSort.cpp }
      },
      {
        id: "counting-sort",
        title: "Сортировка подсчетом",
        description: Sort.descriptionCountSort,
        using: Sort.usingCountSort,
        idea: Sort.ideaCountSort,
        complexity: { best: "O(n + k)", average: "O(n + k)", worst: "O(n + k)", space: "O(n + k)" },
        code: { javascript: Sort.codeCountSort.javascript, python: Sort.codeCountSort.python, cpp: Sort.codeCountSort.cpp }
      },
      {
        id: "merge-sort",
        title: "Сортировка слиянием",
        description: Sort.descriptionMergeSort,
        using: Sort.usingMergeSort,
        idea: Sort.ideaMergeSort,
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)" },
        code: { javascript: Sort.codeMergeSort.javascript, python: Sort.codeMergeSort.python, cpp: Sort.codeMergeSort.cpp }
      },
      {
        id: "bucket-sort",
        title: "Сортировка с разбросом",
        description: Sort.descriptionBucketSort,
        using: Sort.usingBucketSort,
        idea: Sort.ideaBucketSort,
        complexity: { best: "O(n + k)", average: "O(n + k)", worst: "O(n^2)", space: "O(n + k)" },
        code: { javascript: Sort.codeBucketSort.javascript, python: Sort.codeBucketSort.python, cpp: Sort.codeBucketSort.cpp }
      },
    ]
  },
  {
    id: "search",
    title: "Алгоритмы поиска",
    image: IMAGES.search,
    algorithms: [
      {
        id: "linear-search",
        title: "Линейный поиск",
        description: Search.descriptionLinearSearch,
        using: Search.usingLinearSearch,
        idea: Search.ideaLinearSearch,
        complexity: { best: "O(1)", average: "O(n)", worst: "O(n)", space: "O(1)" },
        code: { javascript: Search.codeLinearSearch.javascript, python: Search.codeLinearSearch.python, cpp: Search.codeLinearSearch.cpp }
      },
      {
        id: "binary-search",
        title: "Бинарный поиск",
        description: Search.descriptionBinarySearch,
        using: Search.usingBinarySearch,
        idea: Search.ideaBinarySearch,
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeBinarySearch.javascript, python: Search.codeBinarySearch.python, cpp: Search.codeBinarySearch.cpp }
      },
      {
        id: "interpolation-search",
        title: "Интерполяционный поиск",
        description: Search.descriptionInterpolationSearch,
        using: Search.usingInterpolationSearch,
        idea: Search.ideaInterpolationSearch,
        complexity: { best: "O(1)", average: "O(log log n)", worst: "O(n)", space: "O(1)" },
        code: { javascript: Search.codeInterpolationSearch.javascript, python: Search.codeInterpolationSearch.python, cpp: Search.codeInterpolationSearch.cpp }
      },
      {
        id: "exponential-search",
        title: "Экспоненциальный поиск",
        description: Search.descriptionExponentialSearch,
        using: Search.usingExponentialSearch,
        idea: Search.ideaExponentialSearch,
        complexity: { best: "O(1)", average: "O(log i)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeExponentialSearch.javascript, python: Search.codeExponentialSearch.python, cpp: Search.codeExponentialSearch.cpp }
      },
      {
        id: "ternary-search",
        title: "Тернарный поиск",
        description: Search.descriptionTernarySearch,
        using: Search.usingTernarySearch,
        idea: Search.ideaTernarySearch,
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeTernarySearch.javascript, python: Search.codeTernarySearch.python, cpp: Search.codeTernarySearch.cpp }
      },
      {
        id: "jump-search",
        title: "Поиск прыжками",
        description: Search.descriptionJumpSearch,
        using: Search.usingJumpSearch,
        idea: Search.ideaJumpSearch,
        complexity: { best: "O(sqrt(n))", average: "O(sqrt(n))", worst: "O(sqrt(n))", space: "O(1)" },
        code: { javascript: Search.codeJumpSearch.javascript, python: Search.codeJumpSearch.python, cpp: Search.codeJumpSearch.cpp }
      },
      {
        id: "fibonacci-search",
        title: "Поиск Фибоначчи",
        description: Search.descriptionFibonacciSearch,
        using: Search.usingFibonacciSearch,
        idea: Search.ideaFibonacciSearch,
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
        code: { javascript: Search.codeFibonacciSearch.javascript, python: Search.codeFibonacciSearch.python, cpp: Search.codeFibonacciSearch.cpp }
      },
    ]
  },
  {
    id: "graph",
    title: "Графы",
    image: IMAGES.graph,
    algorithms: [
      {
        id: "bfs",
        title: "Поиск в ширину (BFS)",
        description: Graph.descriptionBFS,
        using: Graph.usingBFS,
        idea: Graph.ideaBFS,
        complexity: { best: "O(V + E)", average: "O(V + E)", worst: "O(V + E)", space: "O(V)" },
        code: { javascript: Graph.codeBFS.javascript, python: Graph.codeBFS.python, cpp: Graph.codeBFS.cpp }
      },
      {
        id: "dfs",
        title: "Поиск в глубину (DFS)",
        description: Graph.descriptionDFS,
        using: Graph.usingDFS,
        idea: Graph.ideaDFS,
        complexity: { best: "O(V + E)", average: "O(V + E)", worst: "O(V + E)", space: "O(V)" },
        code: { javascript: Graph.codeDFS.javascript, python: Graph.codeDFS.python, cpp: Graph.codeDFS.cpp }
      },
      {
        id: "dijkstra",
        title: "Алгоритм Дейкстры",
        description: Graph.descriptionDijkstra,
        using: Graph.usingDijkstra,
        idea: Graph.ideaDijkstra,
        complexity: { best: "O(E + V log V)", average: "O(E + V log V)", worst: "O(E + V log V)", space: "O(V + E)" },
        code: { javascript: Graph.codeDijkstra.javascript, python: Graph.codeDijkstra.python, cpp: Graph.codeDijkstra.cpp }
      },
      {
        id: "bellman-ford",
        title: "Алгоритм Беллмана-Форда",
        description: Graph.descriptionBellmanFord,
        using: Graph.usingBellmanFord,
        idea: Graph.ideaBellmanFord,
        complexity: { best: "O(V * E)", average: "O(V * E)", worst: "O(V * E)", space: "O(V)" },
        code: { javascript: Graph.codeBellmanFord.javascript, python: Graph.codeBellmanFord.python, cpp: Graph.codeBellmanFord.cpp }
      },
      {
        id: "floyd-warshall",
        title: "Алгоритм Флойда-Уоршелла",
        description: Graph.descriptionFloydWarshall,
        using: Graph.usingFloydWarshall,
        idea: Graph.ideaFloydWarshall,
        complexity: { best: "O(V^3)", average: "O(V^3)", worst: "O(V^3)", space: "O(V^2)" },
        code: { javascript: Graph.codeFloydWarshall.javascript, python: Graph.codeFloydWarshall.python, cpp: Graph.codeFloydWarshall.cpp }
      },
      {
        id: "prim",
        title: "Минимальное остовное дерево (Prim)",
        description: Graph.descriptionPrim,
        using: Graph.usingPrim,
        idea: Graph.ideaPrim,
        complexity: { best: "O(E + V log V)", average: "O(E + V log V)", worst: "O(E + V log V)", space: "O(V + E)" },
        code: { javascript: Graph.codePrim.javascript, python: Graph.codePrim.python, cpp: Graph.codePrim.cpp }
      },
    ]
  },
  {
    id: "tree",
    title: "Деревья",
    image: IMAGES.tree,
    algorithms: [
      { 
        id: "in-order", 
        title: "Обход дерева In-order", 
        description: Tree.descriptionInOrder,
        using: Tree.usingInOrder, 
        idea: Tree.ideaInOrder, 
        complexity: {best: "O(n)", average: "O(n)", worst: "O(n)", space: "O(n)"}, 
        code: { javascript: Tree.codeInOrder.javascript, python: Tree.codeInOrder.python, cpp: Tree.codeInOrder.cpp } 
      },
      { 
        id: "pre-order", 
        title: "Обход дерева Pre-order", 
        description: Tree.descriptionPreOrder, 
        using: Tree.usingPreOrder,
        idea: Tree.ideaPreOrder, 
        complexity: {best: "O(n)", average: "O(n)", worst: "O(n)", space: "O(n)"}, 
        code: { javascript: Tree.codePreOrder.javascript, python: Tree.codePreOrder.python, cpp: Tree.codePreOrder.cpp } 
      },
      { 
        id: "post-order", 
        title: "Обход дерева Post-order", 
        description: Tree.descriptionPostOrder, 
        using: Tree.usingPostOrder,
        idea: Tree.ideaPostOrder, 
        complexity: {best: "O(n)", average: "O(n)", worst: "O(n)", space: "O(n)"}, 
        code: { javascript: Tree.codePostOrder.javascript, python: Tree.codePostOrder.python, cpp: Tree.codePostOrder.cpp } 
      },
      { 
        id: "bst-search", 
        title: "Поиск в бинарном дереве поиска", 
        description: Tree.descriptionBinarySearchTree, 
        using: Tree.usingBinarySearchTree,
        idea: Tree.ideaBinarySearchTree, 
        complexity: {best: "O(log n)", average: "O(log n)", worst: "O(n)", space: "O(n)"}, 
        code: { javascript: Tree.codeBinarySearchTree.javascript, python: Tree.codeBinarySearchTree.javascript, cpp: Tree.codeBinarySearchTree.javascript } 
      },
    ]
  },
];

export const flatAlgorithms = CATEGORIES.flatMap((c) =>
  c.algorithms.map(a => ({ ...a, categoryId: c.id, categoryTitle: c.title }))
);