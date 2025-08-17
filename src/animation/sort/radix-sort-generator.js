export function* radixSortGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }

    yield { array: [...arr], swapping: [], sorted: [], low: 0, high: arr.length - 1 };

    const maxNum = Math.max(...arr);
    let exp = 1;

    while (Math.floor(maxNum / exp) > 0) {
        yield* countingSortByDigit(arr, exp);
        exp *= 10;
    }

    yield { array: [...arr], swapping: [], sorted: [...Array(arr.length).keys()] };
}

function* countingSortByDigit(arr, exp) {
    const output = Array(arr.length).fill(0);
    const count = Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
        yield { array: [...arr], swapping: [i], low: 0, high: arr.length - 1, sorted: [] };
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
        yield { array: [...arr], swapping: [i], low: 0, high: arr.length - 1, sorted: [] };
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        yield { array: [...arr], swapping: [i], low: 0, high: arr.length - 1, sorted: [] };
    }
}