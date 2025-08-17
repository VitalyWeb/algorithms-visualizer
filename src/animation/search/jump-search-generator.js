export function* jumpSearchGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }
    arr.sort((a, b) => a - b);
    const target = arr[Math.floor(Math.random() * arr.length)];
    const n = arr.length;

    const blockSize = Math.floor(Math.sqrt(n));
    let low = 0;
    let high = blockSize;

    yield { array: [...arr], target, low, high: -1, searchIndex: -1, foundIndex: -1 };

    while (arr[Math.min(high, n) - 1] < target) {
        low = high;
        high = high + blockSize;

        if (low >= n) {
            yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: -1 };
            return;
        }
        yield { array: [...arr], target, low, high: -1, searchIndex: Math.min(high, n) - 1, foundIndex: -1 };
    }

    yield { array: [...arr], target, low, high: Math.min(high, n) - 1, searchIndex: -1, foundIndex: -1 };
    
    let current = low;
    while (current < Math.min(high, n)) {
        yield { array: [...arr], target, low, high: Math.min(high, n) - 1, searchIndex: current, foundIndex: -1 };
        if (arr[current] === target) {
            yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: current };
            return;
        }
        current++;
    }

    yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: -1 };
}