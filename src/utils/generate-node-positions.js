import {isMobileDevice} from "./setup-canvas";

export function generateNodePositions(nodes) {
    const isMobile = isMobileDevice();
    const nodePositions = {};
    const marginX = isMobile ? 0.15 : 0.1;
    const marginY = isMobile ? 0.25 : 0.2;

    const gridSize = Math.ceil(Math.sqrt(nodes.length));
    const cellWidth = (1 - 2 * marginX) / gridSize;
    const cellHeight = (1 - 2 * marginY) / gridSize;
    const occupiedCells = new Set();

    nodes.forEach(node => {
        let xIndex, yIndex, key;
        let attempts = 0;

        do {
            xIndex = Math.floor(Math.random() * gridSize);
            yIndex = Math.floor(Math.random() * gridSize);
            key = `${xIndex}-${yIndex}`;
            attempts++;
        } while (occupiedCells.has(key) && attempts < 1000);

        occupiedCells.add(key);

        nodePositions[node] = {
            x: marginX + xIndex * cellWidth + cellWidth / 2,
            y: marginY + yIndex * cellHeight + cellHeight / 2
        };
    });

    return nodePositions;
}