export const descriptionRadixSort = "Алгоритм сортировки целых чисел, который сортирует элементы поразрядно, начиная с младших разрядов (LSD) или старших разрядов (MSD). Использует стабильную сортировку на каждом разряде, что позволяет достичь высокой скорости для больших массивов чисел.";

export const ideaRadixSort = [
    "Определить максимальное число в массиве, чтобы узнать количество разрядов.",
    "Для каждого разряда (от младшего к старшему или наоборот):",
    "Сгруппировать элементы по значению текущего разряда, используя стабильную сортировку (например, Counting Sort).",
    "Объединить группы обратно в один массив.",
    "После обработки всех разрядов массив будет отсортирован."
];

export const radixSortJS = `function countingSortByDigit(arr, exp) {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

export function radixSort(arr) {
  const maxNum = Math.max(...arr);
  let exp = 1;
  while (Math.floor(maxNum / exp) > 0) {
    countingSortByDigit(arr, exp);
    exp *= 10;
  }
  return arr;
}`;

export const radixSortPy = `def counting_sort_by_digit(arr, exp):
    output = [0] * len(arr)
    count = [0] * 10

    for num in arr:
        index = (num // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for num in reversed(arr):
        index = (num // exp) % 10
        output[count[index] - 1] = num
        count[index] -= 1

    for i in range(len(arr)):
        arr[i] = output[i]

def radix_sort(arr):
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        counting_sort_by_digit(arr, exp)
        exp *= 10
    return arr
`;

export const radixSortCpp = `#include <vector>
#include <algorithm>
using namespace std;

void countingSortByDigit(vector<int>& arr, int exp) {
    vector<int> output(arr.size());
    int count[10] = {0};

    for (int i = 0; i < arr.size(); i++) {
        int digit = (arr[i] / exp) % 10;
        count[digit]++;
    }

    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];

    for (int i = arr.size() - 1; i >= 0; i--) {
        int digit = (arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    for (int i = 0; i < arr.size(); i++)
        arr[i] = output[i];
}

vector<int> radixSort(vector<int> arr) {
    int maxNum = *max_element(arr.begin(), arr.end());
    for (int exp = 1; maxNum / exp > 0; exp *= 10)
        countingSortByDigit(arr, exp);
    return arr;
}`;