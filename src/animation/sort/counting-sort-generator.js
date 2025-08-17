export function* countingSortGenerator(initialArray) {
    const arr = [...initialArray];

    yield { array: [...arr], count: [], swapping: [], writing: -1, sorted: [], low: 0, high: arr.length - 1 };

    const maxVal = Math.max(...arr);
    const count = Array(maxVal + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
        yield { array: [...arr], count: [...count], swapping: [i], writing: -1, sorted: [], low: 0, high: arr.length - 1 };
    }

    let index = 0;
    for (let num = 0; num <= maxVal; num++) {
        while (count[num] > 0) {
            arr[index] = num;
            yield { array: [...arr], count: [...count], swapping: [], writing: index, sorted: [], low: 0, high: arr.length - 1 };
            index++;
            count[num]--;
        }
    }

    yield { array: [...arr], count: [...count], swapping: [], writing: -1, sorted: [...Array(arr.length).keys()] };
}