export function* exponentialSearchGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }
    arr.sort((a, b) => a - b);
    const target = arr[Math.floor(Math.random() * arr.length)];
    const n = arr.length;

    yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: -1, step: "init" };

    if (arr[0] === target) {
        yield { array: [...arr], target, low: -1, high: -1, searchIndex: 0, foundIndex: 0, step: "found_at_0" };
        return;
    }

    let i = 1;
    yield { array: [...arr], target, low: -1, high: -1, searchIndex: i, foundIndex: -1, step: "exponential" };
    while (i < n && arr[i] <= target) {
        i = i * 2;
        yield { array: [...arr], target, low: -1, high: -1, searchIndex: Math.min(i, n - 1), foundIndex: -1, step: "exponential" };
    }

    let low = i / 2;
    let high = Math.min(i, n - 1);
    yield { array: [...arr], target, low, high, searchIndex: -1, foundIndex: -1, step: "binary" };

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        yield { array: [...arr], target, low, high, searchIndex: mid, foundIndex: -1, step: "binary" };

        if (arr[mid] === target) {
            yield { array: [...arr], target, low, high, searchIndex: -1, foundIndex: mid, step: "found" };
            return;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: -1, step: "not_found" };
}