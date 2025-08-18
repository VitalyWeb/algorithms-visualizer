export const drawSort = (ctx, width, height, state) => {
    ctx.clearRect(0, 0, width, height);

    const barWidth = width / state.array.length;
    const maxVal = Math.max(...state.array);

    for (let i = 0; i < state.array.length; i++) {
        const barHeight = (state.array[i] / maxVal) * height * 0.9;
        const x = i * barWidth;
        const y = height - barHeight;

        let color = '#ccc';
        if (state.sorted.includes(i))  {
            color = 'green';
        } 
        else if (i === state.pivot) {
            color = 'orange';
        } 
        else if (state.swapping.includes(i)) {
            color = 'red';
        } 
        else if (i >= state.low && i <= state.high) {
            color = 'skyblue';
        } 

        ctx.fillStyle = color;
        ctx.fillRect(x, y, barWidth - 2, barHeight);

        ctx.fillStyle = 'black';
        ctx.fillText(state.array[i], x + barWidth / 2 - 10, y - 5);
    }
};