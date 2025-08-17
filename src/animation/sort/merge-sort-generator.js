export function* mergeSortGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    yield { array: [...arr], swapping: [], low: 0, high: arr.length - 1, sorted: [] };

    yield* _mergeSort(arr, 0, arr.length - 1);

    yield { array: [...arr], swapping: [], low: -1, high: -1, sorted: [...Array(arr.length).keys()] };
}

function* _mergeSort(arr, left, right) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    yield* _mergeSort(arr, left, mid);
    yield* _mergeSort(arr, mid + 1, right);
    yield* merge(arr, left, mid, right);
}

function* merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            yield { array: [...arr], swapping: [k], low: left, high: right, sorted: [] };
            i++;
        } else {
            arr[k] = rightArr[j];
            yield { array: [...arr], swapping: [k], low: left, high: right, sorted: [] };
            j++;
        }
        k++;
    }

    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        yield { array: [...arr], swapping: [k], low: left, high: right, sorted: [] };
        i++;
        k++;
    }

    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        yield { array: [...arr], swapping: [k], low: left, high: right, sorted: [] };
        j++;
        k++;
    }
}