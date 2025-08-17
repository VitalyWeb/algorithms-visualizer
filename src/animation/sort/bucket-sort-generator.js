export function* bucketSortGenerator() {
    const N = 20;
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }

    yield { array: [...arr], buckets: [], swapping: [], sorted: [], currentBucket: -1 };

    const bucketCount = Math.ceil(Math.sqrt(N));
    const buckets = Array.from({ length: bucketCount }, () => []);

    const maxVal = Math.max(...arr);

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        const bucketIndex = Math.floor((val / (maxVal + 1)) * bucketCount);
        buckets[bucketIndex].push(val);

        yield { array: [...arr], buckets: buckets.map(b => [...b]), swapping: [i], currentBucket: bucketIndex, sorted: [] };
    }

    for (let b = 0; b < buckets.length; b++) {
        const bucket = buckets[b];
        for (let i = 1; i < bucket.length; i++) {
            let j = i - 1;
            const key = bucket[i];
            while (j >= 0 && bucket[j] > key) {
                bucket[j + 1] = bucket[j];
                j--;

                yield { array: [...arr], buckets: buckets.map(b => [...b]), swapping: [i, j + 1], currentBucket: b, sorted: [] };
            }
            bucket[j + 1] = key;

            yield { array: [...arr], buckets: buckets.map(b => [...b]), swapping: [j + 1], currentBucket: b, sorted: [] };
        }
    }

    let idx = 0;
    for (let b = 0; b < buckets.length; b++) {
        const bucket = buckets[b];
        for (let i = 0; i < bucket.length; i++) {
            arr[idx] = bucket[i];
            yield { array: [...arr], buckets: buckets.map(b => [...b]), swapping: [idx], currentBucket: b, sorted: [] };
            idx++;
        }
    }

    yield { array: [...arr], buckets: buckets.map(b => [...b]), swapping: [], currentBucket: -1, sorted: [...Array(arr.length).keys()] };
}