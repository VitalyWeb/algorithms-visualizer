export const descriptionBinarySearch = "Бинарный поиск (Binary Search) — это эффективный алгоритм для нахождения элемента в отсортированном массиве. Он работает, многократно деля массив пополам и проверяя, в какой половине может находиться искомый элемент. Это позволяет значительно сократить количество операций по сравнению с линейным поиском.";

export const ideaBinarySearch = [
    "Устанавливаем указатели на начало и конец отсортированного массива.",
    "Находим средний элемент.",
    "Сравниваем средний элемент с искомым значением. Если они совпадают, элемент найден.",
    "Если искомое значение меньше, смещаем указатель конца на середину. Если больше, смещаем указатель начала.",
    "Повторяем процесс, пока указатели не сойдутся или элемент не будет найден."
];

export const binarySearchJS = `function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}`;

export const binarySearchPy = `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    
    return -1`;

export const binarySearchCpp = `#include <iostream>
#include <vector>

using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;

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
}`;