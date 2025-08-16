export const descriptionQuickSort = `
Эффективный алгоритм сортировки методом 'разделяй и властвуй'. 
Используется для быстрой сортировки массивов с минимальной памятью.
`;

export const ideaQuickSort = `
Выбираем опорный элемент, делим массив на части меньше/больше опорного, рекурсивно сортируем.
Можно выбирать pivot случайно для оптимизации среднего случая.
`;


export const quickSortJS = `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (const el of arr.slice(0, arr.length - 1)) {
    (el < pivot ? left : right).push(el);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`;

export const quickSortPy = `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x < pivot]
    right = [x for x in arr[:-1] if x >= pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)`;

export const quickSortCpp = `#include <vector>
using namespace std;

vector<int> quick_sort(vector<int> arr) {
    if(arr.size() <= 1) return arr;
    int pivot = arr.back();
    arr.pop_back();
    vector<int> left, right;
    for(int x : arr) (x < pivot ? left : right).push_back(x);
    vector<int> sorted_left = quick_sort(left);
    vector<int> sorted_right = quick_sort(right);
    sorted_left.push_back(pivot);
    sorted_left.insert(sorted_left.end(), sorted_right.begin(), sorted_right.end());
    return sorted_left;
}`;