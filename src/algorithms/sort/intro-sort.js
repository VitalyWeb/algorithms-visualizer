export const descriptionIntroSort = "Гибридный алгоритм сортировки, комбинирующий QuickSort, HeapSort и InsertionSort. Использует QuickSort для основной работы, HeapSort при слишком глубокой рекурсии и InsertionSort для маленьких подмассивов. Позволяет гарантировать O(n log n) в худшем случае при сохранении высокой скорости на большинстве данных.";

export const ideaIntroSort = [
    "Начинаем сортировку как QuickSort: выбираем опорный элемент, делим массив на две части.",
    "Рекурсивно сортируем подмассивы QuickSort’ом.",
    "Если глубина рекурсии превышает лимит (2 * log2(n)), переключаемся на HeapSort для подмассива.",
    "Для маленьких подмассивов используем InsertionSort, чтобы ускорить сортировку."
];

export const introSortJs = `function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

function heapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr, begin, end) {
  let n = end - begin + 1;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function introsortUtil(arr, low, high, depthLimit) {
  let size = high - low + 1;

  if (size < 16) {
    insertionSort(arr, low, high);
    return;
  }

  if (depthLimit === 0) {
    heapSort(arr, low, high);
    return;
  }

  let pivot = partition(arr, low, high);
  introsortUtil(arr, low, pivot - 1, depthLimit - 1);
  introsortUtil(arr, pivot + 1, high, depthLimit - 1);
}

export function introSort(arr) {
  let n = arr.length;
  let depthLimit = 2 * Math.floor(Math.log2(n));
  introsortUtil(arr, 0, n - 1, depthLimit);
  return arr;
}
`;

export const introSortPy = `import math

def insertion_sort(arr, left, right):
    for i in range(left + 1, right + 1):
        key = arr[i]
        j = i - 1
        while j >= left and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    if l < n and arr[l] > arr[largest]:
        largest = l
    if r < n and arr[r] > arr[largest]:
        largest = r

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr, begin, end):
    n = end - begin + 1
    temp = arr[begin:end+1]
    for i in range(n//2 - 1, -1, -1):
        heapify(temp, n, i)
    for i in range(n-1, 0, -1):
        temp[0], temp[i] = temp[i], temp[0]
        heapify(temp, i, 0)
    arr[begin:end+1] = temp

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1

def introsort_util(arr, low, high, depth_limit):
    size = high - low + 1
    if size < 16:
        insertion_sort(arr, low, high)
        return
    if depth_limit == 0:
        heap_sort(arr, low, high)
        return

    pivot = partition(arr, low, high)
    introsort_util(arr, low, pivot - 1, depth_limit - 1)
    introsort_util(arr, pivot + 1, high, depth_limit - 1)

def intro_sort(arr):
    n = len(arr)
    depth_limit = 2 * int(math.log2(n))
    introsort_util(arr, 0, n - 1, depth_limit)
    return arr
`;

export const introSortCpp = `#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

void insertionSort(vector<int>& arr, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void heapify(vector<int>& arr, int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(vector<int>& arr, int begin, int end) {
    int n = end - begin + 1;
    vector<int> temp(arr.begin() + begin, arr.begin() + end + 1);

    for (int i = n / 2 - 1; i >= 0; i--) heapify(temp, n, i);
    for (int i = n - 1; i > 0; i--) {
        swap(temp[0], temp[i]);
        heapify(temp, i, 0);
    }

    copy(temp.begin(), temp.end(), arr.begin() + begin);
}

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void introsortUtil(vector<int>& arr, int low, int high, int depthLimit) {
    int size = high - low + 1;

    if (size < 16) {
        insertionSort(arr, low, high);
        return;
    }

    if (depthLimit == 0) {
        heapSort(arr, low, high);
        return;
    }

    int pivot = partition(arr, low, high);
    introsortUtil(arr, low, pivot - 1, depthLimit - 1);
    introsortUtil(arr, pivot + 1, high, depthLimit - 1);
}

vector<int> introSort(vector<int> arr) {
    int n = arr.size();
    int depthLimit = 2 * log2(n);
    introsortUtil(arr, 0, n - 1, depthLimit);
    return arr;
}
`;