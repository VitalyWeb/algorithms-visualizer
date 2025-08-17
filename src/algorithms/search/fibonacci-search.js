export const descriptionFibonacciSearch = "Поиск Фибоначчи (Fibonacci Search) — это алгоритм поиска, использующий числа Фибоначчи для уменьшения области поиска. Он похож на бинарный поиск, но вместо деления массива пополам, он делит его на части, соответствующие числам Фибоначчи. Этот метод полезен, когда вычисление среднего индекса (в бинарном поиске) обходится дорого или когда массив слишком большой для хранения в памяти.";

export const ideaFibonacciSearch = [
    "Генерируем числа Фибоначчи до тех пор, пока не найдем число, большее или равное размеру массива.",
    "Используем эти числа для определения индексов, которые мы будем проверять.",
    "Если элемент по текущему индексу меньше искомого, смещаемся на следующую позицию по числам Фибоначчи. Если больше, смещаемся назад.",
    "Процесс повторяется, пока элемент не будет найден."
];

export const fibonacciSearchJS = `function fibonacciSearch(arr, target) {
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fibN = fibMinus1 + fibMinus2;

    const n = arr.length;

    while (fibN < n) {
        fibMinus2 = fibMinus1;
        fibMinus1 = fibN;
        fibN = fibMinus1 + fibMinus2;
    }

    let offset = -1;

    while (fibN > 1) {
        let i = Math.min(offset + fibMinus2, n - 1);

        if (arr[i] < target) {
            fibN = fibMinus1;
            fibMinus1 = fibMinus2;
            fibMinus2 = fibN - fibMinus1;
            offset = i;
        } else if (arr[i] > target) {
            fibN = fibMinus2;
            fibMinus1 = fibMinus1 - fibMinus2;
            fibMinus2 = fibN - fibMinus1;
        } else {
            return i;
        }
    }

    if (fibMinus1 === 1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    return -1;
}`;

export const fibonacciSearchPy = `def fibonacci_search(arr, target):
    n = len(arr)
    fib_minus_2 = 0
    fib_minus_1 = 1
    fib_n = fib_minus_1 + fib_minus_2

    while fib_n < n:
        fib_minus_2 = fib_minus_1
        fib_minus_1 = fib_n
        fib_n = fib_minus_1 + fib_minus_2
    
    offset = -1

    while fib_n > 1:
        i = min(offset + fib_minus_2, n - 1)
        if arr[i] < target:
            fib_n = fib_minus_1
            fib_minus_1 = fib_minus_2
            fib_minus_2 = fib_n - fib_minus_1
            offset = i
        elif arr[i] > target:
            fib_n = fib_minus_2
            fib_minus_1 = fib_minus_1 - fib_minus_2
            fib_minus_2 = fib_n - fib_minus_1
        else:
            return i

    if fib_minus_1 == 1 and arr[offset + 1] == target:
        return offset + 1
    
    return -1`;

export const fibonacciSearchCpp = `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int fibonacciSearch(const vector<int>& arr, int target) {
    int n = arr.size();
    int fib_minus_2 = 0;
    int fib_minus_1 = 1;
    int fib_n = fib_minus_1 + fib_minus_2;

    while (fib_n < n) {
        fib_minus_2 = fib_minus_1;
        fib_minus_1 = fib_n;
        fib_n = fib_minus_1 + fib_minus_2;
    }

    int offset = -1;

    while (fib_n > 1) {
        int i = min(offset + fib_minus_2, n - 1);

        if (arr[i] < target) {
            fib_n = fib_minus_1;
            fib_minus_1 = fib_minus_2;
            fib_minus_2 = fib_n - fib_minus_1;
            offset = i;
        } else if (arr[i] > target) {
            fib_n = fib_minus_2;
            fib_minus_1 = fib_minus_1 - fib_minus_2;
            fib_minus_2 = fib_n - fib_minus_1;
        } else {
            return i;
        }
    }

    if (fib_minus_1 == 1 && arr[offset + 1] == target) {
        return offset + 1;
    }

    return -1;
}`;