export function* binarySearchGenerator(initialArray) {
    const arr = [...initialArray];
    
    arr.sort((a, b) => a - b);
    const target = arr[Math.floor(Math.random() * arr.length)];

    let low = 0;
    let high = arr.length - 1;

    yield { array: [...arr], target, low, high, searchIndex: -1, foundIndex: -1 };

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        yield { array: [...arr], target, low, high, searchIndex: mid, foundIndex: -1 };

        if (arr[mid] === target) {
            yield { array: [...arr], target, low, high, searchIndex: -1, foundIndex: mid };
            return;
        } 
        else if (arr[mid] < target) {
            low = mid + 1;
        } 
        else {
            high = mid - 1;
        }
    }

    yield { array: [...arr], target, low: -1, high: -1, searchIndex: -1, foundIndex: -1 };
}