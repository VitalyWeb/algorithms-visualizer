export function* ternarySearchGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }
    arr.sort((a, b) => a - b);
    const target = arr[Math.floor(Math.random() * arr.length)];
    const n = arr.length;

    let low = 0;
    let high = n - 1;

    yield { array: [...arr], target, low, high, searchIndex1: -1, searchIndex2: -1, foundIndex: -1 };

    while (low <= high) {
        if (high - low < 2) {
            if (arr[low] === target) {
                yield { array: [...arr], target, low: -1, high: -1, searchIndex1: -1, searchIndex2: -1, foundIndex: low };
            } else if (arr[high] === target) {
                yield { array: [...arr], target, low: -1, high: -1, searchIndex1: -1, searchIndex2: -1, foundIndex: high };
            }
            break;
        }

        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);

        yield { array: [...arr], target, low, high, searchIndex1: mid1, searchIndex2: mid2, foundIndex: -1 };

        if (arr[mid1] === target) {
            yield { array: [...arr], target, low: -1, high: -1, searchIndex1: -1, searchIndex2: -1, foundIndex: mid1 };
            return;
        }

        if (arr[mid2] === target) {
            yield { array: [...arr], target, low: -1, high: -1, searchIndex1: -1, searchIndex2: -1, foundIndex: mid2 };
            return;
        }

        if (target < arr[mid1]) {
            high = mid1 - 1;
        } else if (target > arr[mid2]) {
            low = mid2 + 1;
        } else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    yield { array: [...arr], target, low: -1, high: -1, searchIndex1: -1, searchIndex2: -1, foundIndex: -1 };
}