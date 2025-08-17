export const drawBfs = (ctx, canvas, state) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nodePositions = state.nodePositions;
    ctx.lineWidth = 2;
    for (const node in state.graph) {
        for (const neighbor of state.graph[node]) {
            ctx.strokeStyle = '#999';
            ctx.beginPath();
            ctx.moveTo(nodePositions[node].x, nodePositions[node].y);
            ctx.lineTo(nodePositions[neighbor].x, nodePositions[neighbor].y);
            ctx.stroke();
        }
    }

    for (const node in nodePositions) {
        let color = '#ccc';
        if (state.visited.has(node)) {
            color = 'skyblue';
        }
        if (state.current === node) {
            color = 'orange';
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(nodePositions[node].x, nodePositions[node].y, 20, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node, nodePositions[node].x, nodePositions[node].y);
    }
};