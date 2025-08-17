export const descriptionExponentialSearch = "Экспоненциальный поиск (Exponential Search) — это алгоритм, предназначенный для поиска элемента в отсортированном массиве или списке, который может быть бесконечным. Он состоит из двух этапов: сначала он находит диапазон, где может находиться искомый элемент, а затем выполняет бинарный поиск в этом диапазоне.";

export const ideaExponentialSearch = [
    "Начинаем с элемента с индексом 1 и удваиваем его до тех пор, пока элемент с текущим индексом не станет больше искомого значения.",
    "Когда мы находим такой элемент, мы получаем диапазон, в котором может находиться наше значение: от `i/2` до `min(i, n-1)`, где n — размер массива.",
    "В этом ограниченном диапазоне выполняем бинарный поиск."
];

export const exponentialSearchJS = `function exponentialSearch(arr, target) {
    if (arr[0] === target) {
        return 0;
    }

    let i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, arr.length - 1));
}

function binarySearch(arr, target, low, high) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`;

export const exponentialSearchPy = `def exponential_search(arr, target):
    if arr[0] == target:
        return 0

    i = 1
    while i < len(arr) and arr[i] <= target:
        i *= 2

    return binary_search(arr, target, i // 2, min(i, len(arr) - 1))

def binary_search(arr, target, low, high):
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`;

export const exponentialSearchCpp = `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int binarySearch(const vector<int>& arr, int target, int low, int high) {
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

int exponentialSearch(const vector<int>& arr, int target) {
    if (arr.empty()) {
        return -1;
    }

    if (arr[0] == target) {
        return 0;
    }

    int i = 1;
    while (i < arr.size() && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, i / 2, min(i, (int)arr.size() - 1));
}`;