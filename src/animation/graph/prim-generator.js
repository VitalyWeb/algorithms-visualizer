import { generateNodePositions } from "../../utils/generate-node-positions";
import { generateWeightedGraph } from "../../utils/generate-weighted-graph";
import { isMobileDevice } from "../../utils/setup-canvas";

export function* primGenerator() {
    const isMobile = isMobileDevice();
    const graph = generateWeightedGraph(4, 11);
    const nodes = Object.keys(graph);
    
    if (nodes.length === 0) {
        return;
    }

    const startNode = nodes[0];
    const visited = new Set();
    const mst = [];
    const pq = [];

    visited.add(startNode);
    for (const { node: neighbor, weight } of graph[startNode]) {
        pq.push({ from: startNode, to: neighbor, weight });
    }
    pq.sort((a, b) => a.weight - b.weight);

    const nodePositions = generateNodePositions(nodes, isMobile);

    yield {
        graph,
        nodePositions,
        mst: [...mst],
        visited: new Set(visited),
        current: startNode,
        status: 'initial'
    };

    while (pq.length > 0 && visited.size < nodes.length) {
        const { from, to, weight } = pq.shift();

        if (visited.has(to)) {
            continue;
        }

        visited.add(to);
        mst.push({ from, to, weight });

        yield {
            graph,
            nodePositions,
            mst: [...mst],
            visited: new Set(visited),
            current: to,
            edgeAdded: { from, to, weight },
            status: 'adding_edge'
        };

        for (const { node: neighbor, weight: neighborWeight } of graph[to]) {
            if (!visited.has(neighbor)) {
                pq.push({ from: to, to: neighbor, weight: neighborWeight });
            }
        }
        pq.sort((a, b) => a.weight - b.weight);
    }

    yield {
        graph,
        nodePositions,
        mst: [...mst],
        visited: new Set(visited),
        current: null,
        status: 'finished'
    };
}
