import { generateNodePositions } from "../../utils/generate-node-positions";
import {generateWeightedGraph} from "../../utils/generate-weighted-graph"
import { isMobileDevice } from "../../utils/setup-canvas";

export function* dijkstraGenerator() {
    const isMobile = isMobileDevice();

    const graph = generateWeightedGraph(4, 11);
    const nodes = Object.keys(graph);
    const startNode = nodes[0];

    const distances = {};
    const visited = new Set();
    const queue = [startNode];

    nodes.forEach(node => distances[node] = Infinity);
    distances[startNode] = 0;

    const nodePositions = generateNodePositions(nodes, isMobile);

    yield {
        graph,
        nodePositions,
        queue: [...queue],
        visited: new Set(visited),
        current: null,
        status: 'initial',
        distances: { ...distances }
    };

    while (queue.length > 0) {
        queue.sort((a, b) => distances[a] - distances[b]);
        const currentNode = queue.shift();

        yield {
            graph,
            nodePositions,
            queue: [...queue],
            visited: new Set(visited),
            current: currentNode,
            status: 'visiting',
            distances: { ...distances }
        };

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        const neighbors = graph[currentNode] || [];
        for (const { node: neighbor, weight } of neighbors) {
            if (!visited.has(neighbor)) {
                const newDist = distances[currentNode] + weight;
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                }

                queue.push(neighbor);

                yield {
                    graph,
                    nodePositions,
                    queue: [...queue],
                    visited: new Set(visited),
                    current: currentNode,
                    status: 'adding_neighbor',
                    neighbor: neighbor,
                    distances: { ...distances }
                };
            }
        }
    }

    yield {
        graph,
        nodePositions,
        queue: [],
        visited: new Set(visited),
        current: null,
        status: 'finished',
        distances: { ...distances }
    };
}