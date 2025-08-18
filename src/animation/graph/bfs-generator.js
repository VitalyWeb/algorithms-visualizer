import {generateRandomGraph} from "../../utils/generate-random-graph";
import {generateNodePositions} from "../../utils/generate-node-positions";

export function* bfsGenerator() {
    const graph = generateRandomGraph(4, 11);
    const nodes = Object.keys(graph);
    const startNode = nodes[0];
    const queue = [startNode];
    const visited = new Set([startNode]);
    const nodePositions = generateNodePositions(nodes);

    yield {
        graph,
        nodePositions,
        queue: [...queue],
        visited,
        current: null,
        status: 'initial'
    };

    while (queue.length > 0) {
        const currentNode = queue.shift();

        yield {
            graph,
            nodePositions,
            queue: [...queue],
            visited,
            current: currentNode,
            status: 'visiting'
        };

        const neighbors = graph[currentNode] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);

                yield {
                    graph,
                    nodePositions,
                    queue: [...queue],
                    visited,
                    current: currentNode,
                    status: 'adding_neighbor',
                    neighbor
                };
            }
        }
    }

    yield {
        graph,
        nodePositions,
        queue: [],
        visited,
        current: null,
        status: 'finished'
    };
}