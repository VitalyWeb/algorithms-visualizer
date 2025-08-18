import { generateRandomGraph } from "../../utils/generate-random-graph";
import { generateNodePositions } from "../../utils/generate-node-positions";
import { isMobileDevice } from "../../utils/setup-canvas";

export function* dfsGenerator() {
    const isMobile = isMobileDevice();

    const graph = generateRandomGraph(4, 11);
    const nodes = Object.keys(graph);
    const startNode = nodes[0];
    const stack = [startNode];
    const visited = new Set();
    
    const nodePositions = generateNodePositions(nodes, isMobile);

    yield {
        graph,
        nodePositions,
        stack: [...stack],
        visited: new Set(visited),
        current: null,
        status: 'initial'
    };

    while (stack.length > 0) {
    const currentNode = stack.pop();

    yield {
        graph,
        nodePositions,
        stack: [...stack],
        visited: new Set(visited),
        current: currentNode,
        status: 'visiting'
    };

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    const neighbors = graph[currentNode] || [];
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            stack.push(neighbor);

            yield {
                graph,
                nodePositions,
                stack: [...stack],
                visited: new Set(visited),
                current: currentNode,
                status: 'adding_neighbor',
                neighbor: neighbor
            };
        }
    }
}

    yield {
        graph,
        nodePositions,
        stack: [],
        visited: new Set(visited),
        current: null,
        status: 'finished'
    };
}