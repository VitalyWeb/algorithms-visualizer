import { generateNodePositions } from "../../utils/generate-node-positions";
import { generateWeightedGraph } from "../../utils/generate-weighted-graph";
import { isMobileDevice } from "../../utils/setup-canvas";

export function* bellmanFordGenerator() {
    const isMobile = isMobileDevice();
    const graph = generateWeightedGraph(4, 7);
    const nodes = Object.keys(graph);
    const startNode = nodes[0];

    const distances = {};
    const predecessors = {};

    nodes.forEach(node => {
        distances[node] = Infinity;
        predecessors[node] = null;
    });
    distances[startNode] = 0;

    const nodePositions = generateNodePositions(nodes, isMobile);

    yield {
        graph,
        nodePositions,
        current: null,
        status: 'initial',
        distances: { ...distances },
        predecessors: { ...predecessors }
    };

    for (let i = 0; i < nodes.length - 1; i++) {
        let updated = false;
        yield {
            graph,
            nodePositions,
            current: null,
            status: 'iterating',
            iteration: i + 1,
            distances: { ...distances },
            predecessors: { ...predecessors }
        };

        for (const node in graph) {
            const neighbors = graph[node];
            for (const { node: neighbor, weight } of neighbors) {
                if (distances[node] !== Infinity && distances[node] + weight < distances[neighbor]) {
                    distances[neighbor] = distances[node] + weight;
                    predecessors[neighbor] = node;
                    updated = true;

                    yield {
                        graph,
                        nodePositions,
                        current: node,
                        status: 'relaxing',
                        neighbor: neighbor,
                        weight: weight,
                        distances: { ...distances },
                        predecessors: { ...predecessors }
                    };
                }
            }
        }
        if (!updated) {
            break;
        }
    }

    for (const node in graph) {
        const neighbors = graph[node];
        for (const { node: neighbor, weight } of neighbors) {
            if (distances[node] !== Infinity && distances[node] + weight < distances[neighbor]) {
                yield {
                    graph,
                    nodePositions,
                    current: node,
                    status: 'negative_cycle',
                    distances: { ...distances },
                    predecessors: { ...predecessors }
                };
                return;
            }
        }
    }

    yield {
        graph,
        nodePositions,
        current: null,
        status: 'finished',
        distances: { ...distances },
        predecessors: { ...predecessors }
    };
}