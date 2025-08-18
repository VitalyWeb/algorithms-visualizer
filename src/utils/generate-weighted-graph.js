import { generateRandomGraph } from "./generate-random-graph";

export function generateWeightedGraph(minNodes, maxNodes) {
    const graph = generateRandomGraph(minNodes, maxNodes);
    const weightedGraph = {};
    for (const node in graph) {
        weightedGraph[node] = graph[node].map(neighbor => ({
            node: neighbor,
            weight: Math.floor(Math.random() * 10) + 1
        }));
    }
    return weightedGraph;
}