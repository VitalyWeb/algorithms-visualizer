export const descriptionLinearSearch = "Линейный поиск (Linear Search) — это самый простой алгоритм поиска, который последовательно перебирает каждый элемент массива или списка, пока не найдёт искомое значение или не достигнет конца списка. Он подходит для неупорядоченных данных и небольших наборов, но становится неэффективным на больших объёмах.";

export const ideaLinearSearch = [
    "Перебираем элементы массива, начиная с первого.",
    "Сравниваем каждый элемент с искомым значением.",
    "Если элемент совпадает с искомым значением, возвращаем его индекс.",
    "Если прошли весь массив и не нашли значение, возвращаем специальное значение (например, -1)."
];

export const linearSearchJS = `function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}`;

export const linearSearchPy = `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`;

export const linearSearchCpp = `#include <iostream>
#include <vector>

using namespace std;

int linearSearch(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`;