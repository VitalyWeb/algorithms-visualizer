// Binary Search
export const descriptionBinarySearch = "Бинарный поиск (Binary Search) — это эффективный алгоритм для нахождения элемента в отсортированном массиве. Он работает, многократно деля массив пополам и проверяя, в какой половине может находиться искомый элемент. Это позволяет значительно сократить количество операций по сравнению с линейным поиском.";

export const ideaBinarySearch = [
    "Устанавливаем указатели на начало и конец отсортированного массива.",
    "Находим средний элемент.",
    "Сравниваем средний элемент с искомым значением. Если они совпадают, элемент найден.",
    "Если искомое значение меньше, смещаем указатель конца на середину. Если больше, смещаем указатель начала.",
    "Повторяем процесс, пока указатели не сойдутся или элемент не будет найден."
];

export const codeBinarySearch = {
    javascript: `function binarySearch(arr, target) {
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
}`,
    python: `def binary_search(arr, target):
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
    return -1`,
    cpp: `#include <iostream>
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
}`
};

// Linear Search
export const descriptionLinearSearch = "Линейный поиск (Linear Search) — это самый простой алгоритм поиска, который последовательно перебирает каждый элемент массива или списка, пока не найдёт искомое значение или не достигнет конца списка. Он подходит для неупорядоченных данных и небольших наборов, но становится неэффективным на больших объёмах.";

export const ideaLinearSearch = [
    "Перебираем элементы массива, начиная с первого.",
    "Сравниваем каждый элемент с искомым значением.",
    "Если элемент совпадает с искомым значением, возвращаем его индекс.",
    "Если прошли весь массив и не нашли значение, возвращаем специальное значение (например, -1)."
];

export const codeLinearSearch = {
    javascript: `function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}`,
    python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int linearSearch(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`
};

// Jump Search
export const descriptionJumpSearch = "Поиск прыжками (Jump Search) — это алгоритм поиска для отсортированных массивов. Он работает, «прыгая» вперед по массиву на фиксированные шаги (блоками), пока не найдет блок, в котором может находиться искомый элемент. После этого выполняется линейный поиск в пределах этого блока. Это более эффективно, чем линейный поиск, но менее эффективно, чем бинарный.";

export const ideaJumpSearch = [
    "Выбираем оптимальный размер шага (обычно корень из размера массива).",
    "Проверяем элементы с интервалом, равным размеру шага, пока не найдем элемент, который больше искомого значения.",
    "Когда находим такой элемент, знаем, что искомое значение, если оно существует, находится в предыдущем блоке.",
    "Внутри этого блока выполняем линейный поиск."
];

export const codeJumpSearch = {
    javascript: `function jumpSearch(arr, target) {
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
}`,
    python: `import math

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
    return -1`,
    cpp: `#include <iostream>
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
}`
};

// Interpolation Search
export const descriptionInterpolationSearch = "Интерполяционный поиск (Interpolation Search) — это алгоритм, который является улучшенной версией бинарного поиска. Вместо того чтобы всегда делить массив пополам, он использует формулу для вычисления предположительной позиции искомого элемента. Это делает его особенно эффективным для больших, равномерно распределенных отсортированных массивов.";

export const ideaInterpolationSearch = [
    "Устанавливаем указатели на начало и конец отсортированного массива.",
    "Вычисляем предполагаемую позицию (pos) искомого элемента, используя интерполяционную формулу: pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]).",
    "Сравниваем элемент по вычисленной позиции с искомым значением.",
    "Корректируем указатели low или high, основываясь на результате сравнения.",
    "Повторяем процесс, пока элемент не будет найден или диапазон не станет пустым."
];

export const codeInterpolationSearch = {
    javascript: `function interpolationSearch(arr, target) {
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
}`,
    python: `def interpolation_search(arr, target):
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
    return -1`,
    cpp: `#include <iostream>
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
}`
};

// Exponential Search
export const descriptionExponentialSearch = "Экспоненциальный поиск (Exponential Search) — это алгоритм, предназначенный для поиска элемента в отсортированном массиве или списке, который может быть бесконечным. Он состоит из двух этапов: сначала он находит диапазон, где может находиться искомый элемент, а затем выполняет бинарный поиск в этом диапазоне.";

export const ideaExponentialSearch = [
    "Начинаем с элемента с индексом 1 и удваиваем его до тех пор, пока элемент с текущим индексом не станет больше искомого значения.",
    "Когда мы находим такой элемент, мы получаем диапазон, в котором может находиться наше значение: от `i/2` до `min(i, n-1)`, где n — размер массива.",
    "В этом ограниченном диапазоне выполняем бинарный поиск."
];

export const codeExponentialSearch = {
    javascript: `function exponentialSearch(arr, target) {
    if (arr[0] === target) {
        return 0;
    }

    let i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, arr.length - 1));
}

function binarySearch(arr, target, low, high) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,
    python: `def exponential_search(arr, target):
    if arr[0] == target:
        return 0

    i = 1
    while i < len(arr) and arr[i] <= target:
        i *= 2

    return binary_search(arr, target, i // 2, min(i, len(arr) - 1))

def binary_search(arr, target, low, high):
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int binarySearch(const vector<int>& arr, int target, int low, int high) {
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
}

int exponentialSearch(const vector<int>& arr, int target) {
    if (arr.empty()) {
        return -1;
    }

    if (arr[0] == target) {
        return 0;
    }

    int i = 1;
    while (i < arr.size() && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, i / 2, min(i, (int)arr.size() - 1));
}`
};

// Ternary Search
export const descriptionTernarySearch = "Тернарный поиск (Ternary Search) — это алгоритм, который, как и бинарный поиск, используется для поиска элемента в отсортированном массиве. Однако вместо деления массива на две части, он делит его на три. Это может быть полезно для функций, которые имеют одну вершину (unimodal functions), но в большинстве случаев он медленнее бинарного поиска.";

export const ideaTernarySearch = [
    "Устанавливаем указатели на начало и конец отсортированного массива.",
    "Делим массив на три части, вычисляя два средних индекса: mid1 и mid2.",
    "Сравниваем искомое значение с элементами по этим двум индексам.",
    "Если значение найдено, возвращаем индекс. Если оно меньше `arr[mid1]`, работаем с первой третью массива. Если больше `arr[mid2]`, работаем с последней третью.",
    "Если значение находится между `arr[mid1]` и `arr[mid2]`, работаем со средней третью."
];

export const codeTernarySearch = {
    javascript: `function ternarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);

        if (arr[mid1] === target) {
            return mid1;
        }
        if (arr[mid2] === target) {
            return mid2;
        }

        if (target < arr[mid1]) {
            high = mid1 - 1;
        } else if (target > arr[mid2]) {
            low = mid2 + 1;
        } else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }
    return -1;
}`,
    python: `def ternary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid1 = low + (high - low) // 3
        mid2 = high - (high - low) // 3

        if arr[mid1] == target:
            return mid1
        if arr[mid2] == target:
            return mid2

        if target < arr[mid1]:
            high = mid1 - 1
        elif target > arr[mid2]:
            low = mid2 + 1
        else:
            low = mid1 + 1
            high = mid2 - 1

    return -1`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int ternarySearch(const vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;

    while (low <= high) {
        int mid1 = low + (high - low) / 3;
        int mid2 = high - (high - low) / 3;

        if (arr[mid1] == target) {
            return mid1;
        }
        if (arr[mid2] == target) {
            return mid2;
        }

        if (target < arr[mid1]) {
            high = mid1 - 1;
        } else if (target > arr[mid2]) {
            low = mid2 + 1;
        } else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }
    return -1;
}`
};

// Fibonacci Search
export const descriptionFibonacciSearch = "Поиск Фибоначчи (Fibonacci Search) — это алгоритм поиска, использующий числа Фибоначчи для уменьшения области поиска. Он похож на бинарный поиск, но вместо деления массива пополам, он делит его на части, соответствующие числам Фибоначчи. Этот метод полезен, когда вычисление среднего индекса (в бинарном поиске) обходится дорого или когда массив слишком большой для хранения в памяти.";

export const ideaFibonacciSearch = [
    "Генерируем числа Фибоначчи до тех пор, пока не найдем число, большее или равное размеру массива.",
    "Используем эти числа для определения индексов, которые мы будем проверять.",
    "Если элемент по текущему индексу меньше искомого, смещаемся на следующую позицию по числам Фибоначчи. Если больше, смещаемся назад.",
    "Процесс повторяется, пока элемент не будет найден."
];

export const codeFibonacciSearch = {
    javascript: `function fibonacciSearch(arr, target) {
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
}`,
    python: `def fibonacci_search(arr, target):
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
    
    return -1`,
    cpp: `#include <iostream>
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
}`
};