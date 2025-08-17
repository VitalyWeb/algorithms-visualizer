export const descriptionCountSort = "Алгоритм сортировки для целых чисел в ограниченном диапазоне, который работает путём подсчёта количества элементов каждого значения. Затем на основе этих подсчетов строится отсортированный массив. Не сравнивает элементы напрямую, поэтому может быть очень быстрой для маленьких диапазонов чисел. Не подходит для отрицательных чисел без модификации (можно смещать диапазон). Стабильная сортировка: сохраняет порядок одинаковых элементов.";

export const ideaCountSort = [
    "Находим максимальное значение в массиве.",
    "Создаём массив счётчиков (count) длиной max + 1.",
    "Подсчитываем, сколько раз встречается каждый элемент.",
    "Суммируем счётчики, чтобы получить позиции элементов в отсортированном массиве (для стабильности).",
    "Заполняем результирующий массив на основе подсчётов."
];

export const countSortJs = `function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const output = new Array(arr.length);

    for (let num of arr) count[num]++;

    for (let i = 1; i <= max; i++) count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}`;

export const countSortPy = `def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    output = [0] * len(arr)

    for num in arr:
        count[num] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for num in reversed(arr):
        output[count[num] - 1] = num
        count[num] -= 1

    return output`;

export const countSortCpp = `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> countingSort(const vector<int>& arr) {
    int max_val = *max_element(arr.begin(), arr.end());
    vector<int> count(max_val + 1, 0), output(arr.size());

    for (int num : arr) count[num]++;

    for (int i = 1; i <= max_val; i++) count[i] += count[i - 1];

    for (int i = arr.size() - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}`