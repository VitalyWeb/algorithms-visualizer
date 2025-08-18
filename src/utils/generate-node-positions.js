export function generateNodePositions(nodes, isMobile = false) {
    const nodePositions = {};
    const marginX = isMobile ? 0.15 : 0.1;
    const marginY = isMobile ? 0.25 : 0.2;

    const numNodes = nodes.length;
    const gridSize = Math.ceil(Math.sqrt(numNodes));
    const cellWidth = (1 - 2 * marginX) / gridSize;
    const cellHeight = (1 - 2 * marginY) / gridSize;

    let xIndex = 0;
    let yIndex = 0;

    nodes.forEach(node => {
        nodePositions[node] = {
            x: marginX + xIndex * cellWidth + cellWidth / 2,
            y: marginY + yIndex * cellHeight + cellHeight / 2
        };

        xIndex++;
        if (xIndex >= gridSize) {
            xIndex = 0;
            yIndex++;
        }
    });

    return nodePositions;
}