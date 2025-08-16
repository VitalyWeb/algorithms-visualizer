import sort from "../img/sortings-min.png";
import search from "../img/search-min.png";
import graph from "../img/graph-min.png";
import dp from "../img/dynamic-min.png";
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
        code: {
          javascript: quickSortJS,
          python: quickSortPy,
          cpp: quickSortCpp
        }
      },
    ]
  },
  {
    id: "search",
    title: "Алгоритмы поиска",
    image: search,
    algorithms: [

    ]
  },
  {
    id: "dynamic",
    title: "Динамическое программирование",
    image: dp,
    algorithms: [
      
    ]
  },
  {
    id: "graph",
    title: "Алгоритмы на графах",
    image: graph,
    algorithms: [
      
    ]
  },
  {
    id: "string",
    title: "Алгоритмы на строках",
    image: string,
    algorithms: [
      
    ]
  },
  {
    id: "greedy",
    title: "Жадные алгоритмы",
    image: greedy,
    algorithms: [
      
    ]
  },
  {
    id: "recursive",
    title: "Рекурсивные алгоритмы",
    image: recursive,
    algorithms: [
      
    ]
  },
  {
    id: "tree",
    title: "Алгоритмы на деревьях",
    image: tree,
    algorithms: [
      
    ]
  },
  {
    id: "numeric",
    title: "Численные алгоритмы",
    image: numeric,
    algorithms: [
      
    ]
  },
];

export const flatAlgorithms = CATEGORIES.flatMap((c) =>
  c.algorithms.map(a => ({ ...a, categoryId: c.id, categoryTitle: c.title }))
);