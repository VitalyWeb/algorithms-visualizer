import sort from "../img/sortings-min.png";
import search from "../img/search-min.png";
import graph from "../img/graph-min.png";
import numeric from "../img/numeric-min.png";
import tree from "../img/tree-min.png";

// sort
import * as Quick from "../algorithms/sort/quick-sort.js";
import * as Tim from "../algorithms/sort/tim-sort.js";
import * as Intro from "../algorithms/sort/intro-sort.js";
import * as Radix from "../algorithms/sort/radix-sort.js";
import * as Count from "../algorithms/sort/counting-sort.js";
import * as Merge from "../algorithms/sort/merge-sort.js";
import * as Bucket from "../algorithms/sort/bucket-sort.js";

// search
import * as Binary from "../algorithms/search/binary-search.js"
import * as Linear from "../algorithms/search/linear-search.js"
import * as Ternary from "../algorithms/search/ternary-search.js"
import * as Exponential from "../algorithms/search/exponential-search.js"
import * as Fibonacci from "../algorithms/search/fibonacci-search.js"
import * as Jump from "../algorithms/search/jump-search.js"
import * as Interpolation from "../algorithms/search/interpolation-search.js"

export const CATEGORIES = [
  {
    id: "sorting",
    title: "Сортировка и организация данных",
    image: sort,
    algorithms: [
      { 
        id: "quick-sort", 
        title: "Быстрая сортировка", 
        description: Quick.descriptionQuickSort, 
        idea: Quick.ideaQuickSort, 
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)", space: "O(log n)" }, 
        code: { javascript: Quick.quickSortJS, python: Quick.quickSortPy, cpp: Quick.quickSortCpp } 
      },
      { 
        id: "tim-sort", 
        title: "Тимсорт", 
        description: Tim.descriptionTimSort, 
        idea: Tim.ideaTimSort, 
        complexity: {best: "O(n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)"}, 
        code: {javascript: Tim.timSortJS, python: Tim.timSortPy, cpp: Tim.timSortCpp} 
      },
      { 
        id: "intro-sort", 
        title: "Интроспективная сортировка", 
        description: Intro.descriptionIntroSort, 
        idea: Intro.ideaIntroSort, 
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(log n)"}, 
        code: {javascript: Intro.introSortJs, python: Intro.introSortPy, cpp: Intro.introSortCpp} 
      },
      { 
        id: "radix-sort", 
        title: "Поразрядная сортировка", 
        description: Radix.descriptionRadixSort, 
        idea: Radix.ideaRadixSort, 
        complexity: {best: "O(n * k)", average: "O(n * k)", worst: "O(n * k)", space: "O(n + k)"}, 
        code: {javascript: Radix.radixSortJS, python: Radix.radixSortPy, cpp: Radix.radixSortCpp} 
      },
      { 
        id: "counting-sort", 
        title: "Сортировка подсчетом", 
        description: Count.descriptionCountSort, 
        idea: Count.ideaCountSort, 
        complexity: {best: "O(n + k)", average: "O(n + k)", worst: "O(n + k)", space: "O(n + k)"}, 
        code: {javascript: Count.countSortJs, python: Count.countSortPy, cpp: Count.countSortCpp} 
      },
      { 
        id: "merge-sort", 
        title: "Сортировка слиянием", 
        description: Merge.descriptionMergeSort, 
        idea: Merge.ideaMergeSort, 
        complexity: {best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)"}, 
        code: {javascript: Merge.mergeSortJs, python: Merge.mergeSortPy, cpp: Merge.mergeSortCpp} 
      },
      { 
        id: "bucket-sort", 
        title: "Сортировка с разбросом", 
        description: Bucket.descriptionBucketSort, 
        idea: Bucket.ideaBucketSort, 
        complexity: {best: "O(n + k)", average: "O(n + k)", worst: "O(n^2)", space: "O(n + k)"}, 
        code: {javascript: Bucket.bucketSortJs, python: Bucket.bucketSortPy, cpp: Bucket.bucketSortCpp} 
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
        description: Linear.descriptionLinearSearch, 
        idea: Linear.ideaLinearSearch, 
        complexity: { best: "O(1)", average: "O(n)", worst: "O(n)", space: "O(1)" }, 
        code: { javascript: Linear.linearSearchJS, python: Linear.linearSearchPy, cpp: Linear.linearSearchCpp } 
      },
      { 
        id: "binary-search", 
        title: "Бинарный поиск", 
        description: Binary.descriptionBinarySearch, 
        idea: Binary.ideaBinarySearch, 
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" }, 
        code: { javascript: Binary.binarySearchJS, python: Binary.binarySearchPy, cpp: Binary.binarySearchCpp } 
      },
      { 
        id: "interpolation-search", 
        title: "Интерполяционный поиск", 
        description: Interpolation.descriptionInterpolationSearch, 
        idea: Interpolation.ideaInterpolationSearch, 
        complexity: { best: "O(1)", average: "O(log log n)", worst: "O(n)", space: "O(1)" }, 
        code: { javascript: Interpolation.interpolationSearchJS, python: Interpolation.interpolationSearchPy, cpp: Interpolation.interpolationSearchCpp } 
      },
      { 
        id: "exponential-search", 
        title: "Экспоненциальный поиск", 
        description: Exponential.descriptionExponentialSearch, 
        idea: Exponential.ideaExponentialSearch, 
        complexity: { best: "O(1)", average: "O(log i)", worst: "O(log i)", space: "O(1)" }, 
        code: { javascript: Exponential.exponentialSearchJS, python: Exponential.exponentialSearchPy, cpp: Exponential.exponentialSearchCpp } 
      },
      { 
        id: "ternary-search", 
        title: "Тернарный поиск", 
        description: Ternary.descriptionTernarySearch, 
        idea: Ternary.ideaTernarySearch, 
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" }, 
        code: { javascript: Ternary.ternarySearchJS, python: Ternary.ternarySearchPy, cpp: Ternary.ternarySearchCpp } 
      },
      { 
        id: "jump-search", 
        title: "Поиск прыжками", 
        description: Jump.descriptionJumpSearch, 
        idea: Jump.ideaJumpSearch, 
        complexity: { best: "O(sqrt(n))", average: "O(sqrt(n))", worst: "O(sqrt(n))", space: "O(1)" }, 
        code: { javascript: Jump.jumpSearchJS, python: Jump.jumpSearchPy, cpp: Jump.jumpSearchCpp } 
      },
      { 
        id: "fibonacci-search", 
        title: "Поиск Фибоначчи", 
        description: Fibonacci.descriptionFibonacciSearch, 
        idea: Fibonacci.ideaFibonacciSearch, 
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" }, 
        code: { javascript: Fibonacci.fibonacciSearchJS, python: Fibonacci.fibonacciSearchPy, cpp: Fibonacci.fibonacciSearchCpp } 
      },
    ]
  },
  {
    id: "graph",
    title: "Графы",
    image: graph,
    algorithms: [
      { id: "bfs", title: "Поиск в ширину (BFS)", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "dfs", title: "Поиск в глубину (DFS)", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "dijkstra", title: "Алгоритм Дейкстры", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "bellman-ford", title: "Алгоритм Беллмана-Форда", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "floyd-warshall", title: "Алгоритм Флойда-Уоршелла", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "kruskal", title: "Минимальное остовное дерево (Kruskal)", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "prim", title: "Минимальное остовное дерево (Prim)", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "tree",
    title: "Деревья",
    image: tree,
    algorithms: [
      { id: "in-order", title: "Обход дерева In-order", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "pre-order", title: "Обход дерева Pre-order", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "post-order", title: "Обход дерева Post-order", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "bst-search", title: "Поиск в бинарном дереве поиска", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
  {
    id: "numeric",
    title: "Числовые алгоритмы",
    image: numeric,
    algorithms: [
      { id: "gcd", title: "НОД (Евклид)", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "lcm", title: "НОК", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "fast-power", title: "Быстрое возведение в степень", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "prime-check", title: "Проверка простых чисел", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
      { id: "factorial", title: "Факториал", description: undefined, idea: undefined, complexity: {}, code: {javascript: undefined, python: undefined, cpp: undefined} },
    ]
  },
];

export const flatAlgorithms = CATEGORIES.flatMap((c) =>
  c.algorithms.map(a => ({ ...a, categoryId: c.id, categoryTitle: c.title }))
);