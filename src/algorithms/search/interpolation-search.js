export const descriptionInterpolationSearch = "Интерполяционный поиск (Interpolation Search) — это алгоритм, который является улучшенной версией бинарного поиска. Вместо того чтобы всегда делить массив пополам, он использует формулу для вычисления предположительной позиции искомого элемента. Это делает его особенно эффективным для больших, равномерно распределенных отсортированных массивов.";

export const ideaInterpolationSearch = [
    "Устанавливаем указатели на начало и конец отсортированного массива.",
    "Вычисляем предполагаемую позицию (pos) искомого элемента, используя интерполяционную формулу: pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]).",
    "Сравниваем элемент по вычисленной позиции с искомым значением.",
    "Корректируем указатели low или high, основываясь на результате сравнения.",
    "Повторяем процесс, пока элемент не будет найден или диапазон не станет пустым."
];

export const interpolationSearchJS = `function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) return low;
            return -1;
        }

        let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}`;

export const interpolationSearchPy = `def interpolation_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high and target >= arr[low] and target <= arr[high]:
        if low == high:
            if arr[low] == target:
                return low
            return -1

        pos = low + ((high - low) // (arr[high] - arr[low]) * (target - arr[low]))

        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    
    return -1`;

export const interpolationSearchCpp = `#include <iostream>
#include <vector>

using namespace std;

int interpolationSearch(const vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low == high) {
            if (arr[low] == target) return low;
            return -1;
        }

        int pos = low + (((double)(high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        if (arr[pos] == target) {
            return pos;
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}`;