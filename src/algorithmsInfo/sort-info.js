export const descriptionQuickSort = `Алгоритм сортировки, основанный на принципе "разделяй и властвуй". Он рекурсивно разбивает массив на подмассивы вокруг опорного элемента (pivot) и упорядочивает их. В среднем работает за O(nlogn), что делает его одним из самых эффективных методов сортировки.`;

export const ideaQuickSort = [
"Выбирается опорный элемент.",
"Массив делится на две части: элементы меньше или равные pivot и элементы больше pivot.",
"Каждая часть сортируется тем же методом рекурсивно.",
"Объединение отсортированных частей даёт результат."
];

export const codeQuickSort = {
    javascript: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (const el of arr.slice(0, arr.length - 1)) {
    (el < pivot ? left : right).push(el);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,

    python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x < pivot]
    right = [x for x in arr[:-1] if x >= pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)`,

    cpp: `#include <vector>
using namespace std;

vector<int> quick_sort(const vector<int>& arr) {
    if(arr.size() <= 1) return arr;
    int pivot = arr.back();
    vector<int> left, right;
    for(size_t i = 0; i < arr.size() - 1; i++) {
        if(arr[i] < pivot) left.push_back(arr[i]);
        else right.push_back(arr[i]);
    }
    vector<int> sorted_left = quick_sort(left);
    vector<int> sorted_right = quick_sort(right);
    sorted_left.push_back(pivot);
    sorted_left.insert(sorted_left.end(), sorted_right.begin(), sorted_right.end());
    return sorted_left;
}`
};

export const descriptionMergeSort = `Сортировка слиянием — это алгоритм "разделяй и властвуй", который рекурсивно делит массив на две половины, сортирует каждую из них, а затем объединяет (сливает) две отсортированные половины в один отсортированный массив. Стабильная сортировка, подходит для любых типов данных, хорошо работает с большими массивами, но требует дополнительной памяти для хранения временных массивов.`;

export const ideaMergeSort = [
    "Если массив содержит один элемент или пустой, он уже отсортирован.",
    "Делим массив на две примерно равные половины.",
    "Рекурсивно сортируем левую половину.",
    "Рекурсивно сортируем правую половину.",
    "Сливаем две отсортированные половины в один отсортированный массив."
];

export const codeMergeSort = {
    javascript: `function mergeSort(arr) {
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
}`,

    python: `def merge_sort(arr):
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
    return merged`,

    cpp: `#include <iostream>
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
}`
};

export const descriptionRadixSort = `Алгоритм сортировки целых чисел, который сортирует элементы поразрядно, начиная с младших разрядов (LSD) или старших разрядов (MSD). Использует стабильную сортировку на каждом разряде, что позволяет достичь высокой скорости для больших массивов чисел.`;

export const ideaRadixSort = [
    "Определить максимальное число в массиве, чтобы узнать количество разрядов.",
    "Для каждого разряда (от младшего к старшему или наоборот):",
    "Сгруппировать элементы по значению текущего разряда, используя стабильную сортировку (например, Counting Sort).",
    "Объединить группы обратно в один массив.",
    "После обработки всех разрядов массив будет отсортирован."
];

export const codeRadixSort = {
    javascript: `function countingSortByDigit(arr, exp) {
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
}`,

    python: `def counting_sort_by_digit(arr, exp):
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
    return arr`,

    cpp: `#include <vector>
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
}`
};

export const descriptionCountSort = `Алгоритм сортировки для целых чисел в ограниченном диапазоне, который работает путём подсчёта количества элементов каждого значения. Затем на основе этих подсчетов строится отсортированный массив. Не сравнивает элементы напрямую, поэтому может быть очень быстрой для маленьких диапазонов чисел. Не подходит для отрицательных чисел без модификации (можно смещать диапазон). Стабильная сортировка: сохраняет порядок одинаковых элементов.`;

export const ideaCountSort = [
    "Находим максимальное значение в массиве.",
    "Создаём массив счётчиков (count) длиной max + 1.",
    "Подсчитываем, сколько раз встречается каждый элемент.",
    "Суммируем счётчики, чтобы получить позиции элементов в отсортированном массиве (для стабильности).",
    "Заполняем результирующий массив на основе подсчётов."
];

export const codeCountSort = {
    javascript: `function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const output = new Array(arr.length);

    for (let num of arr) count[num]++;

    for (let i = 1; i <= max; i++) count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}`,

    python: `def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    output = [0] * len(arr)

    for num in arr:
        count[num] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for num in reversed(arr):
        output[count[num] - 1] = num
        count[num] -= 1

    return output`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> countingSort(const vector<int>& arr) {
    int max_val = *max_element(arr.begin(), arr.end());
    vector<int> count(max_val + 1, 0), output(arr.size());

    for (int num : arr) count[num]++;

    for (int i = 1; i <= max_val; i++) count[i] += count[i - 1];

    for (int i = arr.size() - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}`
};

export const descriptionTimSort = `Гибридный алгоритм сортировки, объединяющий сортировку вставками и сортировку слиянием. Используется в стандартной библиотеке Python (list.sort, sorted) и Java (Arrays.sort для объектов).`;

export const ideaTimSort = [
    "Разделить массив на небольшие подмассивы (runs).",
    "Отсортировать каждый подмассив с помощью сортировки вставками (Insertion Sort).",
    "Объединить (merge) подмассивы в единый отсортированный массив с помощью сортировки слиянием (Merge Sort).",
    "Повторять объединение, пока весь массив не будет отсортирован."
];

export const codeTimSort = {
    javascript: `function insertionSort(arr, left, right) {
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

function merge(arr, l, m, r) {
  let left = arr.slice(l, m + 1);
  let right = arr.slice(m + 1, r + 1);
  let i = 0, j = 0, k = l;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
}

function minRunLength(n) {
  let r = 0;
  while (n >= 64) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
}

export function timSort(arr) {
  const n = arr.length;
  const minRun = minRunLength(n);

  for (let i = 0; i < n; i += minRun) {
    insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
  }

  for (let size = minRun; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      if (mid < right) merge(arr, left, mid, right);
    }
  }
  return arr;
}`,

    python: `def insertion_sort(arr, left, right):
    for i in range(left + 1, right + 1):
        key = arr[i]
        j = i - 1
        while j >= left and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def merge(arr, l, m, r):
    left = arr[l:m + 1]
    right = arr[m + 1:r + 1]
    i = j = 0
    k = l

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1

    while i < len(left):
        arr[k] = left[i]
        i += 1
        k += 1

    while j < len(right):
        arr[k] = right[j]
        j += 1
        k += 1

def min_run_length(n):
    r = 0
    while n >= 64:
        r |= n & 1
        n >>= 1
    return n + r

def tim_sort(arr):
    n = len(arr)
    min_run = min_run_length(n)

    for i in range(0, n, min_run):
        insertion_sort(arr, i, min((i + min_run - 1), n - 1))

    size = min_run
    while size < n:
        for left in range(0, n, 2 * size):
            mid = left + size - 1
            right = min((left + 2 * size - 1), (n - 1))
            if mid < right:
                merge(arr, left, mid, right)
        size *= 2

    return arr`,

    cpp: `#include <vector>
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

void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);

    int i = 0, j = 0, k = l;

    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) arr[k++] = left[i++];
        else arr[k++] = right[j++];
    }

    while (i < left.size()) arr[k++] = left[i++];
    while (j < right.size()) arr[k++] = right[j++];
}

int minRunLength(int n) {
    int r = 0;
    while (n >= 64) {
        r |= n & 1;
        n >>= 1;
    }
    return n + r;
}

vector<int> timSort(vector<int> arr) {
    int n = arr.size();
    int minRun = minRunLength(n);

    for (int i = 0; i < n; i += minRun) {
        insertionSort(arr, i, min(i + minRun - 1, n - 1));
    }

    for (int size = minRun; size < n; size *= 2) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = left + size - 1;
            int right = min(left + 2 * size - 1, n - 1);
            if (mid < right) merge(arr, left, mid, right);
        }
    }

    return arr;
}`
};

export const descriptionIntroSort = `Гибридный алгоритм сортировки, комбинирующий QuickSort, HeapSort и InsertionSort. Использует QuickSort для основной работы, HeapSort при слишком глубокой рекурсии и InsertionSort для маленьких подмассивов. Позволяет гарантировать O(n log n) в худшем случае при сохранении высокой скорости на большинстве данных.`;

export const ideaIntroSort = [
    "Начинаем сортировку как QuickSort: выбираем опорный элемент, делим массив на две части.",
    "Рекурсивно сортируем подмассивы QuickSort’ом.",
    "Если глубина рекурсии превышает лимит (2 * log2(n)), переключаемся на HeapSort для подмассива.",
    "Для маленьких подмассивов используем InsertionSort, чтобы ускорить сортировку."
];

export const codeIntroSort = {
    javascript: `function insertionSort(arr, left, right) {
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
}`,

    python: `import math

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
    return arr`,

    cpp: `#include <vector>
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
}`
};

export const descriptionBucketSort = `Сортировка с разбросом (Bucket Sort) — это алгоритм, который распределяет элементы массива по нескольким 'корзинам' (buckets) в зависимости от диапазона значений. Затем каждая корзина сортируется отдельно (обычно с помощью другой сортировки, например, вставками), и все корзины объединяются в один отсортированный массив. Эффективна для чисел с равномерным распределением, стабилизирует порядок элементов внутри корзин.`;

export const ideaBucketSort = [
    "Создаём несколько корзин (buckets) для диапазона значений элементов.",
    "Распределяем каждый элемент массива в соответствующую корзину в зависимости от значения.",
    "Сортируем элементы внутри каждой корзины (например, сортировкой вставками).",
    "Объединяем все корзины в один отсортированный массив."
];

export const codeBucketSort = {
    javascript: `function bucketSort(arr, bucketSize = 5) {
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
}`,

    python: `def bucket_sort(arr, bucket_size=5):
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
    return sorted_arr`,

    cpp: `#include <iostream>
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
}`
};