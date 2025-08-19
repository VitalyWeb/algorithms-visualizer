import { isMobileDevice } from "../../utils/setup-canvas";

const drawNode = (ctx, x, y, value, color, radius, textColor) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(value, x, y);
};

const drawEdge = (ctx, x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 2;
    ctx.stroke();
};

const getTreeDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(getTreeDepth(node.left), getTreeDepth(node.right));
};

const getNodePositions = (tree, nodePositions, x, y, hSpacing, vSpacing, isMobile) => {
    if (!tree) return;

    if (!nodePositions[tree.value]) {
        nodePositions[tree.value] = { x, y };
    }

    if (tree.left) {
        const childX = x - hSpacing;
        const childY = y + vSpacing;
        nodePositions[tree.left.value] = { x: childX, y: childY };
        getNodePositions(tree.left, nodePositions, childX, childY, hSpacing / 2, vSpacing, isMobile);
    }
    if (tree.right) {
        const childX = x + hSpacing;
        const childY = y + vSpacing;
        nodePositions[tree.right.value] = { x: childX, y: childY };
        getNodePositions(tree.right, nodePositions, childX, childY, hSpacing / 2, vSpacing, isMobile);
    }
};

const drawHeader = (ctx, { width, height }, state, isMobile) => {
    const textConfig = {
        pc: { headerPosY: 30, descPosY: 50, headerSize: 16, descSize: 16 },
        mobile: { headerPosY: 20, descPosY: 35, headerSize: 10, descSize: 10 }
    };
    const config = isMobile ? textConfig.mobile : textConfig.pc;

    ctx.fillStyle = "black";
    ctx.font = `${config.headerSize}px Arial`;
    ctx.textAlign = "center";
    
    let headerText = "Инициализация...";
    if (state.tree && state.target) {
        if (state.status === 'initial') headerText = `Ищем значение: ${state.target}`;
        if (state.status === 'iterating') headerText = `Текущий узел: ${state.current}, ищем: ${state.target}`;
        if (state.status === 'found') headerText = `Значение ${state.target} найдено!`;
        if (state.status === 'not_found') headerText = `Значение ${state.target} не найдено.`;
    } else {
         if (state.status === 'initial') headerText = 'Обход дерева...';
         if (state.status === 'iterating') headerText = `Текущий узел: ${state.current}`;
         if (state.status === 'finished') headerText = 'Обход завершен!';
    }

    ctx.fillText(headerText, width / 2, config.headerPosY);

    ctx.font = `${config.descSize}px Arial`;
    if (state.tree && state.target) {
        ctx.fillText("🔴-текущий, 🟡-посещен, 🟢-найден", width / 2, config.descPosY);
    } else if (state.tree) {
         ctx.fillText("🔴-текущий, 🟢-посещенный", width / 2, config.descPosY);
    }
};

export const drawTree = (ctx, { width, height }, state) => {
    ctx.clearRect(0, 0, width, height);
    const isMobile = isMobileDevice();
    const nodeRadius = isMobile ? 13 : 17;
    const horizontalSpacing = isMobile ? 70 : 160;

    const tree = state.tree;
    const nodePositions = {};
    if (tree) {
        const depth = getTreeDepth(tree);
        const verticalSpacing = Math.max(40, Math.floor((height - 100) / depth));
        getNodePositions(tree, nodePositions, width / 2, 100, horizontalSpacing, verticalSpacing, isMobile);
    }

    drawHeader(ctx, { width, height }, state, isMobile);

    const drawEdgesRecursive = (node) => {
        if (!node || !nodePositions[node.value]) return;
        if (node.left && nodePositions[node.left.value]) {
            drawEdge(
                ctx,
                nodePositions[node.value].x,
                nodePositions[node.value].y,
                nodePositions[node.left.value].x,
                nodePositions[node.left.value].y
            );
            drawEdgesRecursive(node.left);
        }
        if (node.right && nodePositions[node.right.value]) {
            drawEdge(
                ctx,
                nodePositions[node.value].x,
                nodePositions[node.value].y,
                nodePositions[node.right.value].x,
                nodePositions[node.right.value].y
            );
            drawEdgesRecursive(node.right);
        }
    };
    drawEdgesRecursive(tree);

    const drawNodesRecursive = (node) => {
        if (!node || !nodePositions[node.value]) return;

        const { x, y } = nodePositions[node.value];
        let color = "#ccc";
        let textColor = "#000";

        if (state.current === node.value) {
            color = "#ef4444";
            textColor = "#fff";
        } else if (state.visited && state.visited.includes(node.value)) {
            if (state.status === 'found' && node.value === state.target) {
                color = "#4ade80";
                textColor = "#fff";
            } else if (state.status === 'iterating' && state.target) {
                color = "#fde047";
                textColor = "#000";
            } else {
                color = "#4ade80";
                textColor = "#fff";
            }
        }
        
        drawNode(ctx, x, y, node.value, color, nodeRadius, textColor);

        drawNodesRecursive(node.left);
        drawNodesRecursive(node.right);
    };
    drawNodesRecursive(tree);
};
