export function* timSortGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }

    const RUN = 5;
    yield { array: [...arr], swapping: [], sorted: [], low: 0, high: arr.length - 1 };

    for (let i = 0; i < arr.length; i += RUN) {
        yield* insertionSort(arr, i, Math.min(i + RUN - 1, arr.length - 1));
    }

    let size = RUN;
    while (size < arr.length) {
        for (let left = 0; left < arr.length; left += 2 * size) {
            const mid = Math.min(left + size - 1, arr.length - 1);
            const right = Math.min(left + 2 * size - 1, arr.length - 1);

            if (mid < right) {
                yield* merge(arr, left, mid, right);
            }
        }
        size *= 2;
    }

    yield { array: [...arr], swapping: [], sorted: [...Array(arr.length).keys()] };
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

function* merge(arr, left, mid, right) {
    const len1 = mid - left + 1;
    const len2 = right - mid;
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < len1 && j < len2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        yield { array: [...arr], swapping: [k], low: left, high: right, sorted: [] };
        k++;
    }

    while (i < len1) {
        arr[k] = leftArr[i];
        yield { array: [...arr], swapping: [k], low: left, high: right, sorted: [] };
        i++;
        k++;
    }

    while (j < len2) {
        arr[k] = rightArr[j];
        yield { array: [...arr], swapping: [k], low: left, high: right, sorted: [] };
        j++;
        k++;
    }
}
