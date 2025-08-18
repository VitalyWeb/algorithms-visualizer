import {isMobileDevice} from "../../utils/setup-canvas"

export const drawBfs = (ctx, { width, height }, state) => {
    ctx.clearRect(0, 0, width, height);

    const isMobile = isMobileDevice();

    const textConfig = {
        pc: {
            headerPosY: 30,
            descPosY: 50,
            headerSize: 16,
            descSize: 16,
            nodeTextSize: 20
        },
        mobile: {
            headerPosY: 20,
            descPosY: 35,
            headerSize: 10,
            descSize: 10,
            nodeTextSize: 16
        }
    };

    const config = isMobile ? textConfig.mobile : textConfig.pc;

    ctx.fillStyle = "black";
    ctx.font = `${config.headerSize}px Arial`;
    ctx.textAlign = "center";
    ctx.fillText( `Обрабатываем узел ${state.current || "..."}`, width / 2, config.headerPosY );

    ctx.font = `${config.descSize}px Arial`;
    ctx.fillText( "🔴-текущий,🔵-добавляется в очередь,🟡-не обработан,🟢-обработан", width / 2, config.descPosY );

    const nodePositions = state.nodePositions;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#999";

    for (const node in state.graph) {
        for (const neighbor of state.graph[node]) {
            ctx.beginPath();
            ctx.moveTo( nodePositions[node].x * width, nodePositions[node].y * height);
            ctx.lineTo( nodePositions[neighbor].x * width, nodePositions[neighbor].y * height);
            ctx.stroke();
        }
    }

    for (const node in nodePositions) {
        const x = nodePositions[node].x * width;
        const y = nodePositions[node].y * height;
        const radius = isMobile ? 12 : 18;

        let color = "#ccc";
        if (state.current === node){
                color = "#ef4444";
            } 
        else if (state.status === "adding_neighbor" && state.neighbor === node) {
            color = "#3b82f6";
        }
        else if (state.queue.includes(node)) {
            color = "#fde047";
        } 
        else if (state.visited.has(node)) {
            color = "#4ade80";
        } 

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.font = `${config.nodeTextSize}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node, x, y);
    }
};