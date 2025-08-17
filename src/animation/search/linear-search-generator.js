export function* linearSearchGenerator(initialArray) {
    const arr = [...initialArray];
    
    const target = arr[Math.floor(Math.random() * arr.length)];
    
    yield { array: [...arr], target, visited: [], searchIndex: -1, foundIndex: -1 };

    for (let i = 0; i < arr.length; i++) {
        yield { array: [...arr], target, visited: [...Array(i + 1).keys()], searchIndex: i, foundIndex: -1 };
        
        if (arr[i] === target) {
            yield { array: [...arr], target, visited: [...Array(i + 1).keys()], searchIndex: -1, foundIndex: i };
            return;
        }
    }

    yield { array: [...arr], target, visited: [...Array(arr.length).keys()], searchIndex: -1, foundIndex: -1 };
}