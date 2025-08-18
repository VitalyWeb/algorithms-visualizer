export function* interpolationSearchGenerator(initialArray) {
    const arr = [...initialArray];
    
    arr.sort((a, b) => a - b);
    const target = arr[Math.floor(Math.random() * arr.length)];

    let low = 0;
    let high = arr.length - 1;

    yield { array: [...arr], target, low, high, searchIndex: -1, foundIndex: -1 };

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) {
                yield { array: [...arr], target, low, high, searchIndex: low, foundIndex: low };
            }
            break;
        }

        const pos = Math.floor(low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        yield { array: [...arr], target, low, high, searchIndex: pos, foundIndex: -1 };

        if (arr[pos] === target) {
            yield { array: [...arr], target, low, high, searchIndex: -1, foundIndex: pos };
            return;
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } 
        else {
            high = pos - 1;
        }
    }

    yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: -1 };
}