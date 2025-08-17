export const descriptionTernarySearch = "Тернарный поиск (Ternary Search) — это алгоритм, который, как и бинарный поиск, используется для поиска элемента в отсортированном массиве. Однако вместо деления массива на две части, он делит его на три. Это может быть полезно для функций, которые имеют одну вершину (unimodal functions), но в большинстве случаев он медленнее бинарного поиска.";

export const ideaTernarySearch = [
    "Устанавливаем указатели на начало и конец отсортированного массива.",
    "Делим массив на три части, вычисляя два средних индекса: mid1 и mid2.",
    "Сравниваем искомое значение с элементами по этим двум индексам.",
    "Если значение найдено, возвращаем индекс. Если оно меньше `arr[mid1]`, работаем с первой третью массива. Если больше `arr[mid2]`, работаем с последней третью.",
    "Если значение находится между `arr[mid1]` и `arr[mid2]`, работаем со средней третью."
];

export const ternarySearchJS = `function ternarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);

        if (arr[mid1] === target) {
            return mid1;
        }
        if (arr[mid2] === target) {
            return mid2;
        }

        if (target < arr[mid1]) {
            high = mid1 - 1;
        } else if (target > arr[mid2]) {
            low = mid2 + 1;
        } else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    return -1;
}`;

export const ternarySearchPy = `def ternary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid1 = low + (high - low) // 3
        mid2 = high - (high - low) // 3

        if arr[mid1] == target:
            return mid1
        if arr[mid2] == target:
            return mid2

        if target < arr[mid1]:
            high = mid1 - 1
        elif target > arr[mid2]:
            low = mid2 + 1
        else:
            low = mid1 + 1
            high = mid2 - 1

    return -1`;

export const ternarySearchCpp = `#include <iostream>
#include <vector>

using namespace std;

int ternarySearch(const vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;

    while (low <= high) {
        int mid1 = low + (high - low) / 3;
        int mid2 = high - (high - low) / 3;

        if (arr[mid1] == target) {
            return mid1;
        }
        if (arr[mid2] == target) {
            return mid2;
        }

        if (target < arr[mid1]) {
            high = mid1 - 1;
        } else if (target > arr[mid2]) {
            low = mid2 + 1;
        } else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    return -1;
}`;