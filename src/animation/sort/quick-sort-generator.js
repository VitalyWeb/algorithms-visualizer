export function* quickSortGenerator(initialArray) {
    const arr = [...initialArray];
    
    yield { array: [...arr], pivot: -1, swapping: [], low: 0, high: arr.length - 1, sorted: [] };

    yield* _quickSort(arr, 0, arr.length - 1);

    yield { array: [...arr], pivot: -1, swapping: [], low: -1, high: -1, sorted: [...Array(arr.length).keys()] };
}

function* _quickSort(arr, low, high) {
    if (low < high) {
        const partitionIndex = yield* partition(arr, low, high);
        
        yield* _quickSort(arr, low, partitionIndex - 1);
        
        yield* _quickSort(arr, partitionIndex + 1, high);
    }
}

function* partition(arr, low, high) {
    const pivot = arr[high];
    let i = (low - 1);
    
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