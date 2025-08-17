export function* fibonacciSearchGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }
    arr.sort((a, b) => a - b);
    const target = arr[Math.floor(Math.random() * arr.length)];
    const n = arr.length;

    let fibM2 = 0;
    let fibM1 = 1;
    let fibM = fibM1 + fibM2;

    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM1 + fibM2;
    }

    let offset = -1;

    yield { array: [...arr], target, low: 0, high: n - 1, searchIndex: -1, foundIndex: -1, fib: [fibM2, fibM1, fibM] };

    while (fibM > 1) {
        const i = Math.min(offset + fibM2, n - 1);

        yield { array: [...arr], target, low: offset + 1, high: offset + fibM1 + fibM2, searchIndex: i, foundIndex: -1, fib: [fibM2, fibM1, fibM] };

        if (arr[i] < target) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        } else if (arr[i] > target) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        } else {
            yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: i, fib: [fibM2, fibM1, fibM] };
            return;
        }
    }

    if (fibM1 && arr[offset + 1] === target) {
        yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: offset + 1, fib: [fibM2, fibM1, fibM] };
    } else {
        yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: -1, fib: [fibM2, fibM1, fibM] };
    }
}