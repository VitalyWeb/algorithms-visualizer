export function* introSortGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }

    const maxDepth = 2 * Math.floor(Math.log2(arr.length));
    yield { array: [...arr], swapping: [], sorted: [], low: 0, high: arr.length - 1 };

    yield* _introSort(arr, 0, arr.length - 1, maxDepth);

    yield { array: [...arr], swapping: [], sorted: [...Array(arr.length).keys()] };
}

function* _introSort(arr, low, high, depthLimit) {
    const sizeThreshold = 16;

    if (high - low + 1 <= sizeThreshold) {
        yield* insertionSort(arr, low, high);
    } else if (depthLimit === 0) {
        yield* heapSort(arr, low, high);
    } else if (low < high) {
        const partitionIndex = yield* partition(arr, low, high);
        yield* _introSort(arr, low, partitionIndex - 1, depthLimit - 1);
        yield* _introSort(arr, partitionIndex + 1, high, depthLimit - 1);
    }
}

function* insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            yield { array: [...arr], swapping: [j, j + 1], low: left, high: right, sorted: [] };
            j--;
        }
        arr[j + 1] = key;
        yield { array: [...arr], swapping: [j + 1], low: left, high: right, sorted: [] };
    }
}

function* partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    yield { array: [...arr], pivot: high, swapping: [], low, high, sorted: [] };

    for (let j = low; j < high; j++) {
        yield { array: [...arr], pivot: high, swapping: [j, i + 1], low, high, sorted: [] };
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            yield { array: [...arr], pivot: high, swapping: [i, j], low, high, sorted: [] };
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    yield { array: [...arr], pivot: i + 1, swapping: [i + 1, high], low, high, sorted: [] };

    return i + 1;
}

function* heapSort(arr, low, high) {
    const size = high - low + 1;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        yield* heapify(arr, size, i, low);
    }

    for (let i = size - 1; i >= 0; i--) {
        [arr[low], arr[low + i]] = [arr[low + i], arr[low]];
        yield { array: [...arr], swapping: [low, low + i], low, high, sorted: [] };
        yield* heapify(arr, i, 0, low);
    }
}

function* heapify(arr, size, rootIndex, offset) {
    let largest = rootIndex;
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;

    if (left < size && arr[offset + left] > arr[offset + largest]) {
        largest = left;
    }
    if (right < size && arr[offset + right] > arr[offset + largest]) {
        largest = right;
    }

    if (largest !== rootIndex) {
        [arr[offset + rootIndex], arr[offset + largest]] = [arr[offset + largest], arr[offset + rootIndex]];
        yield { array: [...arr], swapping: [offset + rootIndex, offset + largest], low: offset, high: offset + size - 1, sorted: [] };
        yield* heapify(arr, size, largest, offset);
    }
}