export const generateRandomArray = (N = 20) => {
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 90) + 10);
    }
    return arr;
};