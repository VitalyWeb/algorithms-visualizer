export const descriptionBucketSort = "Сортировка с разбросом (Bucket Sort) — это алгоритм, который распределяет элементы массива по нескольким 'корзинам' (buckets) в зависимости от диапазона значений. Затем каждая корзина сортируется отдельно (обычно с помощью другой сортировки, например, вставками), и все корзины объединяются в один отсортированный массив. Эффективна для чисел с равномерным распределением, стабилизирует порядок элементов внутри корзин.";

export const ideaBucketSort = [
    "Создаём несколько корзин (buckets) для диапазона значений элементов.",
    "Распределяем каждый элемент массива в соответствующую корзину в зависимости от значения.",
    "Сортируем элементы внутри каждой корзины (например, сортировкой вставками).",
    "Объединяем все корзины в один отсортированный массив."
];

export const bucketSortJs = `function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);

    // Размещение элементов по корзинам
    for (let num of arr) {
        const index = Math.floor((num - min) / bucketSize);
        buckets[index].push(num);
    }

    // Сортировка каждой корзины и объединение
    return buckets.reduce((acc, bucket) => {
        bucket.sort((a, b) => a - b);
        return acc.concat(bucket);
    }, []);
}`;


export const bucketSortPy = `def bucket_sort(arr, bucket_size=5):
    if len(arr) == 0:
        return arr

    min_val, max_val = min(arr), max(arr)
    bucket_count = (max_val - min_val) // bucket_size + 1
    buckets = [[] for _ in range(bucket_count)]

    for num in arr:
        index = (num - min_val) // bucket_size
        buckets[index].append(num)

    sorted_arr = []
    for bucket in buckets:
        sorted_arr.extend(sorted(bucket))
    return sorted_arr`;


export const bucketSortCpp = `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> bucketSort(const vector<int>& arr, int bucketSize = 5) {
    if (arr.empty()) return {};

    int min_val = *min_element(arr.begin(), arr.end());
    int max_val = *max_element(arr.begin(), arr.end());
    int bucketCount = (max_val - min_val) / bucketSize + 1;

    vector<vector<int>> buckets(bucketCount);

    for (int num : arr) {
        int index = (num - min_val) / bucketSize;
        buckets[index].push_back(num);
    }

    vector<int> sortedArr;
    for (auto &bucket : buckets) {
        sort(bucket.begin(), bucket.end());
        sortedArr.insert(sortedArr.end(), bucket.begin(), bucket.end());
    }

    return sortedArr;
}`;