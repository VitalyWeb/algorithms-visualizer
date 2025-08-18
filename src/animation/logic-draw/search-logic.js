export const drawSearch = (ctx, width, height, state) => {
    ctx.clearRect(0, 0, width, height);

    const barWidth = width / state.array.length;
    const maxVal = Math.max(...state.array);

    for (let i = 0; i < state.array.length; i++) {
        const barHeight = (state.array[i] / maxVal) * height * 0.9;
        const x = i * barWidth;
        const y = height - barHeight;

        let color = '#ccc';
        if (i === state.foundIndex) {
            color = 'green';
        } 
        else if (i === state.searchIndex) {
            color = 'red';
        } 
        else if (state.step === "exponential" && i < state.searchIndex) {
            color = 'orange';
        } 
        else if (state.low !== -1 && i >= state.low && i <= state.high) {
            color = 'skyblue';
        } 

        ctx.fillStyle = color;
        ctx.fillRect(x, y, barWidth - 2, barHeight);

        ctx.fillStyle = 'black';
        ctx.fillText(state.array[i], x + barWidth / 2 - 10, y - 5);
    }

    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Искомый элемент: ${state.target}`, 10, 20);
};