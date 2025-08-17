export const descriptionQuickSort = `
Алгоритм сортировки, основанный на принципе "разделяй и властвуй". Он рекурсивно разбивает массив на подмассивы вокруг опорного элемента (pivot) и упорядочивает их. В среднем работает за O(nlogn), что делает его одним из самых эффективных методов сортировки.`;

export const ideaQuickSort = [
"Выбирается опорный элемент.",
"Массив делится на две части: элементы меньше или равные pivot и элементы больше pivot.",
"Каждая часть сортируется тем же методом рекурсивно.",
"Объединение отсортированных частей даёт результат."
];

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

vector<int> quick_sort(const vector<int>& arr) {
    if(arr.size() <= 1) return arr;
    int pivot = arr.back();
    vector<int> left, right;
    for(size_t i = 0; i < arr.size() - 1; i++) {
        if(arr[i] < pivot) left.push_back(arr[i]);
        else right.push_back(arr[i]);
    }
    vector<int> sorted_left = quick_sort(left);
    vector<int> sorted_right = quick_sort(right);
    sorted_left.push_back(pivot);
    sorted_left.insert(sorted_left.end(), sorted_right.begin(), sorted_right.end());
    return sorted_left;
}
`;