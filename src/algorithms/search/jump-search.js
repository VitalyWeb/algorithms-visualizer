export const descriptionJumpSearch = "Поиск прыжками (Jump Search) — это алгоритм поиска для отсортированных массивов. Он работает, «прыгая» вперед по массиву на фиксированные шаги (блоками), пока не найдет блок, в котором может находиться искомый элемент. После этого выполняется линейный поиск в пределах этого блока. Это более эффективно, чем линейный поиск, но менее эффективно, чем бинарный.";

export const ideaJumpSearch = [
    "Выбираем оптимальный размер шага (обычно корень из размера массива).",
    "Проверяем элементы с интервалом, равным размеру шага, пока не найдем элемент, который больше искомого значения.",
    "Когда находим такой элемент, знаем, что искомое значение, если оно существует, находится в предыдущем блоке.",
    "Внутри этого блока выполняем линейный поиск."
];

export const jumpSearchJS = `function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += step;
        if (prev >= n) {
            return -1;
        }
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }

    if (arr[prev] === target) {
        return prev;
    }

    return -1;
}`;

export const jumpSearchPy = `import math

def jump_search(arr, target):
    n = len(arr)
    step = int(math.sqrt(n))
    prev = 0

    while arr[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1

    while arr[prev] < target:
        prev += 1
        if prev == min(step, n):
            return -1
    
    if arr[prev] == target:
        return prev

    return -1`;

export const jumpSearchCpp = `#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

int jumpSearch(const vector<int>& arr, int target) {
    int n = arr.size();
    if (n == 0) return -1;
    int step = sqrt(n);
    int prev = 0;

    while (arr[min(step, n) - 1] < target) {
        prev = step;
        step += sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }

    while (arr[prev] < target) {
        prev++;
        if (prev == min(step, n)) {
            return -1;
        }
    }

    if (arr[prev] == target) {
        return prev;
    }

    return -1;
}`;