export function generateRandomGraph(minNodes = 4, maxNodes = 11) {
    const numNodes = Math.floor(Math.random() * (maxNodes - minNodes + 1)) + minNodes;
    const nodes = Array.from({ length: numNodes }, (_, i) => String.fromCharCode(65 + i));
    const graph = {};

    nodes.forEach(node => {
        graph[node] = [];
    });

    for (let i = 1; i < numNodes; i++) {
        const node = nodes[i];
        const neighbor = nodes[Math.floor(Math.random() * i)];
        graph[node].push(neighbor);
        graph[neighbor].push(node);
    }

    const additionalEdges = Math.floor(numNodes * 1.5);
    for (let i = 0; i < additionalEdges; i++) {
        const node1 = nodes[Math.floor(Math.random() * numNodes)];
        const node2 = nodes[Math.floor(Math.random() * numNodes)];
        if (node1 !== node2 && !graph[node1].includes(node2)) {
            graph[node1].push(node2);
            graph[node2].push(node1);
        }
    }

    return graph;
}