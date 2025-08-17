export const descriptionMergeSort = "Сортировка слиянием — это алгоритм \"разделяй и властвуй\", который рекурсивно делит массив на две половины, сортирует каждую из них, а затем объединяет (сливает) две отсортированные половины в один отсортированный массив. Стабильная сортировка, подходит для любых типов данных, хорошо работает с большими массивами, но требует дополнительной памяти для хранения временных массивов.";

export const ideaMergeSort = [
    "Если массив содержит один элемент или пустой, он уже отсортирован.",
    "Делим массив на две примерно равные половины.",
    "Рекурсивно сортируем левую половину.",
    "Рекурсивно сортируем правую половину.",
    "Сливаем две отсортированные половины в один отсортированный массив."
];

export const mergeSortJs = `function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const merged = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    return merged.concat(left.slice(i)).concat(right.slice(j));
}`;


export const mergeSortPy = `def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    merged = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged`;


export const mergeSortCpp = `#include <iostream>
#include <vector>
using namespace std;

vector<int> merge(const vector<int>& left, const vector<int>& right) {
    vector<int> result;
    int i = 0, j = 0;

    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            result.push_back(left[i++]);
        } else {
            result.push_back(right[j++]);
        }
    }

    while (i < left.size()) result.push_back(left[i++]);
    while (j < right.size()) result.push_back(right[j++]);

    return result;
}

vector<int> mergeSort(const vector<int>& arr) {
    if (arr.size() <= 1) return arr;

    int mid = arr.size() / 2;
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}`;