import sort from "../img/sortings-min.png";
import search from "../img/search-min.png";
import graph from "../img/graph-min.png";
import dp from "../img/dynamic-min.png";
import string from "../img/string-min.png";
import greedy from "../img/greedy-min.png";

export const CATEGORIES = [
  {
    id: "sorting",
    title: "Сортировка и организация данных",
    image: sort,
    algorithms: [
      {
        id: "quick-sort",
        title: "Быстрая сортировка",
        description: "Эффективный алгоритм сортировки методом 'разделяй и властвуй'.",
        idea: "Выбираем опорный элемент, делим массив на части меньше/больше опорного, рекурсивно сортируем.",
        animation: "/animations/quick-sort.gif",
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)", space: "O(log n)" },
        pseudocode: `
function quickSort(arr):
    if length(arr) <= 1:
        return arr
    pivot = arr[0]
    left = [x for x in arr[1:] if x < pivot]
    right = [x for x in arr[1:] if x >= pivot]
    return quickSort(left) + [pivot] + quickSort(right)
`
      },
      {
        id: "merge-sort",
        title: "Сортировка слиянием",
        description: "Стабильный алгоритм сортировки с рекурсивным делением.",
        idea: "Делим массив пополам, сортируем каждую часть и сливаем их.",
        animation: "/animations/merge-sort.gif",
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)" },
        pseudocode: ``
      },
      {
        id: "heap-sort",
        title: "Пирамидальная сортировка",
        description: "Сортировка с использованием структуры кучи.",
        idea: "Строим max-heap, затем извлекаем максимумы по одному.",
        animation: "/animations/heap-sort.gif",
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(1)" },
        pseudocode: ``
      }
    ]
  },
  {
    id: "searching",
    title: "Поиск и выбор",
    image: search,
    algorithms: [
      {
        id: "binary-search",
        title: "Бинарный поиск",
        description: "Поиск элемента в отсортированном массиве.",
        idea: "Делим массив пополам, сравниваем и продолжаем в нужной половине.",
        animation: "/animations/binary-search.gif",
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
        pseudocode: ``
      },
      {
        id: "linear-search",
        title: "Линейный поиск",
        description: "Простой перебор элементов массива.",
        idea: "Последовательно сравниваем каждый элемент с искомым.",
        animation: "/animations/linear-search.gif",
        complexity: { best: "O(1)", average: "O(n)", worst: "O(n)", space: "O(1)" },
        pseudocode: ``
      }
    ]
  },
  {
    id: "graphs",
    title: "Графовые алгоритмы",
    image: graph,
    algorithms: [
      {
        id: "dijkstra",
        title: "Алгоритм Дейкстры",
        description: "Находит кратчайший путь от одной вершины до всех остальных.",
        idea: "Использует приоритетную очередь для выбора вершины с минимальной дистанцией.",
        animation: "/animations/dijkstra.gif",
        complexity: { best: "O(E + V log V)", average: "O(E + V log V)", worst: "O(E + V log V)", space: "O(V)" },
        pseudocode: ``
      }
    ]
  },
  {
    id: "dp",
    title: "Динамическое программирование",
    image: dp,
    algorithms: [
      {
        id: "knapsack",
        title: "Задача о рюкзаке",
        description: "Оптимизация выбора предметов по весу и стоимости.",
        idea: "Заполняем таблицу значений для всех возможных весов.",
        animation: "/animations/knapsack.gif",
        complexity: { best: "O(nW)", average: "O(nW)", worst: "O(nW)", space: "O(nW)" },
        pseudocode: ``
      }
    ]
  },
  {
    id: "strings",
    title: "Алгоритмы работы со строками",
    image: string,
    algorithms: [
      {
        id: "kmp",
        title: "Кнут–Моррис–Пратт",
        description: "Быстрый поиск подстроки в строке.",
        idea: "Использует префикс-функцию для пропуска ненужных сравнений.",
        animation: "/animations/kmp.gif",
        complexity: { best: "O(n + m)", average: "O(n + m)", worst: "O(n + m)", space: "O(m)" },
        pseudocode: ``
      }
    ]
  },
  {
    id: "greedy",
    title: "Жадные алгоритмы и перебор",
    image: greedy,
    algorithms: [
      {
        id: "activity-selection",
        title: "Выбор активностей",
        description: "Выбирает задачи без пересечений по времени.",
        idea: "Сортируем по времени окончания и берём задачи, которые не конфликтуют.",
        animation: "/animations/activity-selection.gif",
        complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(1)" },
        pseudocode: ``
      }
    ]
  }
];

export const flatAlgorithms = CATEGORIES.flatMap((c) =>
  c.algorithms.map(a => ({ ...a, categoryId: c.id, categoryTitle: c.title }))
);