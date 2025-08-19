import { isMobileDevice } from "../../utils/setup-canvas";

const drawDistanceMatrix = (ctx, { width, height }, state) => {
    const nodes = Object.keys(state.distances);
    const nodeSize = 30;

    const matrixWidth = nodes.length * nodeSize;
    const matrixHeight = (nodes.length + 1) * nodeSize;
    const startX = (width - matrixWidth) / 2;
    const startY = (height - matrixHeight) / 2;

    ctx.font = `12px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < nodes.length; i++) {
        ctx.fillStyle = "#333";
        ctx.fillText(nodes[i], startX + i * nodeSize + nodeSize / 2, startY + nodeSize / 2);
    }

    for (let i = 0; i < nodes.length; i++) {
        const rowNode = nodes[i];
        ctx.fillStyle = "#333";
        ctx.fillText(rowNode, startX - nodeSize / 2, startY + (i + 1) * nodeSize + nodeSize / 2);

        for (let j = 0; j < nodes.length; j++) {
            const colNode = nodes[j];
            const dist = state.distances[rowNode][colNode];
            const displayDist = dist === Infinity ? "∞" : dist;

            ctx.fillStyle = "#000";
            ctx.fillText(displayDist, startX + j * nodeSize + nodeSize / 2, startY + (i + 1) * nodeSize + nodeSize / 2);
        }
    }
};


function drawHeader(ctx, width, config, state) {
    ctx.fillStyle = "black";
    ctx.font = `${config.headerSize}px Arial`;
    ctx.textAlign = "center";
    
    let headerText = `Обрабатываем узел ${state.current || "..."}`;
    if (state.status === 'initial') headerText = 'Инициализация';
    if (state.status === 'iterating' && state.iterationK) headerText = `Текущий промежуточный узел: ${state.iterationK}`;
    if (state.status === 'finished') headerText = 'Готово!';
    if (state.status === 'negative_cycle') headerText = 'Найден отрицательный цикл!';
    if (state.status === 'adding_edge') headerText = `Добавляем ребро ${state.edgeAdded.from}-${state.edgeAdded.to} с весом ${state.edgeAdded.weight}`;

    ctx.fillText(headerText, width / 2, config.headerPosY);

    ctx.font = `${config.descSize}px Arial`;
    if (state.mst) {
        ctx.fillText("🔴-текущий, 🟡-в очереди, 🟢-посещен", width / 2, config.descPosY);
    } 
    else if (state.iterationK) {
        ctx.fillText("🔴-k (промежуточный),🔵-i (источник),🟡-j (назначение)", width / 2, config.descPosY);
    } 
    else {
        ctx.fillText("🔴-текущий,🔵-обновляется,🟡-необработан,🟢-обработан", width / 2, config.descPosY);
    }
}

function drawEdges(ctx, width, height, state, nodePositions, config) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#999";

    for (const node in state.graph) {
        const neighbors = state.graph[node] || [];
        
        for (const neighbor of neighbors) {
            const neighborNode = typeof neighbor === 'object' ? neighbor.node : neighbor; 
            const weight = typeof neighbor === 'object' ? neighbor.weight : null; 
            
            if (!nodePositions[node] || !nodePositions[neighborNode]) continue;
            
            const startX = nodePositions[node].x * width;
            const startY = nodePositions[node].y * height;
            const endX = nodePositions[neighborNode].x * width;
            const endY = nodePositions[neighborNode].y * height;

            const isMstEdge = state.mst && state.mst.some(e => 
                (e.from === node && e.to === neighborNode) || (e.from === neighborNode && e.to === node)
            );
            
            ctx.beginPath();
            if (isMstEdge) {
                ctx.strokeStyle = "#4ade80";
                ctx.lineWidth = 4;
            } 
            else {
                ctx.strokeStyle = "#999";
                ctx.lineWidth = 2;
            }

            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            if (weight !== null) {
                const midX = (startX + endX) / 2;
                const midY = (startY + endY) / 2;
                const angle = Math.atan2(endY - startY, endX - startX);
                const offset = 7;
                const offsetX = offset * Math.sin(angle);
                const offsetY = offset * -Math.cos(angle);
                
                ctx.fillStyle = isMstEdge ? "#4ade80" : "black";
                ctx.font = `${config.weightTextSize}px Arial`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(weight, midX + offsetX, midY + offsetY);
            }
        }
    }
}

function drawNodes(ctx, width, height, state, nodePositions, config, isMobile) {
    const visited = state.visited instanceof Set ? state.visited : new Set();
    const nodeRadius = isMobile ? 10 : 15;

    for (const node in nodePositions) {
        const x = nodePositions[node].x * width;
        const y = nodePositions[node].y * height;

        let color = "#ccc";

        if (state.status === 'iterating') {
            if (node === state.iterationK) {
                color = "#ef4444";
            } 
            else if (node === state.currentI) {
                color = "#2563eb";
            } 
            else if (node === state.currentJ) {
                color = "#fde047";
            } 
            else {
                color = "#4ade80";
            }
        } 
        else if (state.status === 'finished') {
            color = "#4ade80";
        }

        else if (state.current === node){
            color = "#ef4444"; 
        } 
        else if ((state.queue && state.queue.includes(node)) || (state.stack && state.stack.includes(node)) || (state.mst && !visited.has(node))) {
            color = "#fde047";
        }
        else if (visited.has(node) || (state.status === 'finished' && state.distances && state.distances[node] !== Infinity) || (state.mst && visited.has(node))) {
            color = "#4ade80";
        }


        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.font = `${config.nodeTextSize}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node, x, y);

        if (state.distances && typeof state.distances[node] !== 'object' && !state.mst) {
            const dist = state.distances[node] === Infinity ? "∞" : state.distances[node];
            const textY = y + nodeRadius + 10;
            ctx.font = "10px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(dist, x, textY);
        }
    }
}

export const drawGraph = (ctx, { width, height }, state) => {
    ctx.clearRect(0, 0, width, height);

    const isMobile = isMobileDevice();
    const textConfig = {
        pc: { headerPosY: 30, descPosY: 50, headerSize: 16, descSize: 16, nodeTextSize: 20, weightTextSize: 10 },
        mobile: { headerPosY: 20, descPosY: 35, headerSize: 10, descSize: 10, nodeTextSize: 16, weightTextSize: 6 }
    };
    const config = isMobile ? textConfig.mobile : textConfig.pc;

    const nodePositions = state.nodePositions;

    if (state.status === 'finished' && state.iterationK) {
        drawDistanceMatrix(ctx, { width, height }, state);
    } 
    else {
        drawHeader(ctx, width, config, state);
        drawEdges(ctx, width, height, state, nodePositions, config);
        drawNodes(ctx, width, height, state, nodePositions, config, isMobile);
    }
};