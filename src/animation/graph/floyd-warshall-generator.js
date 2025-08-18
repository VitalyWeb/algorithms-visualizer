import { generateNodePositions } from "../../utils/generate-node-positions";
import { generateWeightedGraph } from "../../utils/generate-weighted-graph";
import { isMobileDevice } from "../../utils/setup-canvas";

export function* floydWarshallGenerator() {
    const isMobile = isMobileDevice();

    const graph = generateWeightedGraph(4, 6);
    const nodes = Object.keys(graph);
    const distances = {};
    const numNodes = nodes.length;

    nodes.forEach(nodeI => {
        distances[nodeI] = {};
        nodes.forEach(nodeJ => {
            if (nodeI === nodeJ) {
                distances[nodeI][nodeJ] = 0;
            } else {
                distances[nodeI][nodeJ] = Infinity;
            }
        });
    });

    for (const node in graph) {
        for (const { node: neighbor, weight } of graph[node]) {
            distances[node][neighbor] = weight;
        }
    }

    const nodePositions = generateNodePositions(nodes, isMobile);

    yield {
        graph,
        nodePositions,
        distances: JSON.parse(JSON.stringify(distances)),
        status: 'initial'
    };

    for (let kIndex = 0; kIndex < numNodes; kIndex++) {
        const k = nodes[kIndex];
        for (let iIndex = 0; iIndex < numNodes; iIndex++) {
            const i = nodes[iIndex];
            for (let jIndex = 0; jIndex < numNodes; jIndex++) {
                const j = nodes[jIndex];

                const oldDist = distances[i][j];
                const newDist = distances[i][k] + distances[k][j];

                if (newDist < oldDist) {
                    distances[i][j] = newDist;
                }

                yield {
                    graph,
                    nodePositions,
                    distances: JSON.parse(JSON.stringify(distances)),
                    status: 'iterating',
                    iterationK: k,
                    currentI: i,
                    currentJ: j
                };
            }
        }
    }

    yield {
        graph,
        nodePositions,
        distances: JSON.parse(JSON.stringify(distances)),
        status: 'finished'
    };
}