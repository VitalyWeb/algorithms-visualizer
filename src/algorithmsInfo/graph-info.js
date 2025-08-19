export const descriptionBFS = "Поиск в ширину (BFS) — это алгоритм для обхода или поиска узлов в графе или дереве. Он исследует все узлы на одном уровне перед переходом к узлам следующего уровня. Этот алгоритм всегда находит кратчайший путь в невзвешенном графе.";

export const usingBFS = [
    "Для нахождения кратчайшего пути в невзвешенном графе.",
    "В алгоритмах, таких как обход графа, поиск компонентов связности и т. д.",
    "Для сериализации/десериализации деревьев."
];

export const ideaBFS = [
    "Использует очередь (Queue) для хранения узлов, которые нужно посетить.",
    "Начинаем с начального узла, помечаем его как посещенный и добавляем в очередь.",
    "Пока очередь не пуста, извлекаем узел, обрабатываем его и добавляем всех его непосещенных соседей в очередь."
];

export const codeBFS = {
    javascript: `function bfs(graph, startNode) {
    const queue = [startNode];
    const visited = new Set();
    visited.add(startNode);
    const result = [];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        result.push(currentNode);

        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}`,
    python: `from collections import deque

def bfs(graph, start_node):
    queue = deque([start_node])
    visited = {start_node}
    result = []

    while queue:
        current_node = queue.popleft()
        result.append(current_node)

        for neighbor in graph[current_node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return result`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>

using namespace std;

vector<int> bfs(const vector<vector<int>>& graph, int startNode) {
    queue<int> q;
    q.push(startNode);
    
    unordered_set<int> visited;
    visited.insert(startNode);
    
    vector<int> result;

    while (!q.empty()) {
        int currentNode = q.front();
        q.pop();
        result.push_back(currentNode);

        for (int neighbor : graph[currentNode]) {
            if (visited.find(neighbor) == visited.end()) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
    return result;
}`
};


export const descriptionDFS = "Поиск в глубину (DFS) — это алгоритм для обхода или поиска узлов в графе или дереве. Он исследует как можно дальше по каждой ветви перед возвратом. DFS часто используется для обнаружения циклов и топологической сортировки.";

export const usingDFS = [
    "Для поиска в графах и деревьях, когда не требуется нахождение кратчайшего пути.",
    "Для обнаружения циклов в графе.",
    "Для топологической сортировки.",
    "В алгоритмах, таких как поиск входа в лабиринт."
];

export const ideaDFS = [
    "Использует стек (Stack) или рекурсию для хранения узлов, которые нужно посетить.",
    "Начинаем с начального узла, помечаем его как посещенный и добавляем в стек.",
    "Пока стек не пуст, извлекаем узел. Если он еще не был посещен, обрабатываем его, помечаем как посещенный и добавляем всех его непосещенных соседей в стек."
];


export const codeDFS = {
    javascript: `function dfs(graph, startNode) {
    const stack = [startNode];
    const visited = new Set();
    const result = [];

    while (stack.length > 0) {
        const currentNode = stack.pop();

        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            result.push(currentNode);

            for (const neighbor of graph[currentNode]) {
                stack.push(neighbor);
            }
        }
    }
    return result;
}`,
    python: `def dfs(graph, start_node):
    stack = [start_node]
    visited = set()
    result = []

    while stack:
        current_node = stack.pop()
        
        if current_node not in visited:
            visited.add(current_node)
            result.append(current_node)

            for neighbor in graph[current_node]:
                stack.append(neighbor)
    return result`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <unordered_set>

using namespace std;

vector<int> dfs(const vector<vector<int>>& graph, int startNode) {
    stack<int> s;
    s.push(startNode);
    
    unordered_set<int> visited;
    vector<int> result;

    while (!s.empty()) {
        int currentNode = s.top();
        s.pop();

        if (visited.find(currentNode) == visited.end()) {
            visited.insert(currentNode);
            result.push_back(currentNode);

            for (int neighbor : graph[currentNode]) {
                s.push(neighbor);
            }
        }
    }
    return result;
}`
};


export const descriptionDijkstra = "Алгоритм Дейкстры — это жадный алгоритм для нахождения кратчайших путей от одной вершины до всех остальных вершин в графе с неотрицательными весами рёбер. Он работает путём итеративного выбора ближайшей непосещенной вершины и обновления расстояний до её соседей.";

export const usingDijkstra = [
    "Для нахождения кратчайшего пути от одной вершины до всех остальных в графах с неотрицательными весами рёбер.",
    "В маршрутизации сетей, например, для нахождения оптимального маршрута.",
    "Для планирования путешествий, где нужно найти самый короткий маршрут между городами."
];

export const ideaDijkstra = [
    "Использует приоритетную очередь (Min-Heap) для эффективного извлечения вершины с минимальным расстоянием.",
    "Инициализирует расстояние до начальной вершины как 0, а до всех остальных — как бесконечность.",
    "Пока приоритетная очередь не пуста, извлекает вершину с наименьшим расстоянием и обновляет расстояния до её соседей, если найден более короткий путь."
];

export const codeDijkstra = {
    javascript: `class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(element, priority) {
        this.heap.push({ element, priority });
        this.heap.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.heap.shift();
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(graph, startNode) {
    const distances = {};
    const pq = new PriorityQueue();

    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;
    pq.enqueue(startNode, 0);

    while (!pq.isEmpty()) {
        const { element: currentNode, priority: currentDistance } = pq.dequeue();

        if (currentDistance > distances[currentNode]) {
            continue;
        }

        for (const neighbor in graph[currentNode]) {
            const weight = graph[currentNode][neighbor];
            const distance = currentDistance + weight;

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        }
    }
    return distances;
}`,
    python: `import heapq

def dijkstra(graph, start_node):
    distances = {node: float('infinity') for node in graph}
    distances[start_node] = 0
    pq = [(0, start_node)]

    while pq:
        current_distance, current_node = heapq.heappop(pq)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>

using namespace std;

const int INF = 1e9;

vector<int> dijkstra(const vector<vector<pair<int, int>>>& graph, int startNode) {
    int n = graph.size();
    vector<int> distances(n, INF);
    distances[startNode] = 0;

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, startNode});

    while (!pq.empty()) {
        int currentDistance = pq.top().first;
        int currentNode = pq.top().second;
        pq.pop();

        if (currentDistance > distances[currentNode]) {
            continue;
        }

        for (const auto& edge : graph[currentNode]) {
            int neighbor = edge.first;
            int weight = edge.second;

            if (distances[currentNode] + weight < distances[neighbor]) {
                distances[neighbor] = distances[currentNode] + weight;
                pq.push({distances[neighbor], neighbor});
            }
        }
    }
    return distances;
}`
};


export const descriptionBellmanFord = "Алгоритм Беллмана-Форда — это алгоритм для нахождения кратчайших путей от одной вершины до всех остальных в графе. В отличие от Дейкстры, он может работать с графами, содержащими рёбра с отрицательными весами. Он также способен обнаруживать циклы с отрицательным весом.";

export const usingBellmanFord = [
    "Для нахождения кратчайшего пути от одной вершины в графах с отрицательными весами рёбер.",
    "Для обнаружения циклов с отрицательным весом.",
    "В распределенных алгоритмах, таких как протоколы маршрутизации."
];

export const ideaBellmanFord = [
    "Использует релаксацию рёбер, повторяя процесс V-1 раз, где V — количество вершин.",
    "Инициализирует расстояние до начальной вершины как 0, а до всех остальных — как бесконечность.",
    "На каждой итерации проходит по всем рёбрам графа и обновляет расстояния, если найден более короткий путь.",
    "После V-1 итерации, выполняет дополнительную итерацию для проверки наличия цикла с отрицательным весом. Если расстояние до какой-либо вершины может быть уменьшено, значит, такой цикл существует."
];


export const codeBellmanFord = {
    javascript: `function bellmanFord(graph, startNode) {
    const distances = {};
    const nodes = Object.keys(graph);

    for (const node of nodes) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    for (let i = 0; i < nodes.length - 1; i++) {
        for (const node in graph) {
            for (const neighbor in graph[node]) {
                const weight = graph[node][neighbor];
                if (distances[node] !== Infinity && distances[node] + weight < distances[neighbor]) {
                    distances[neighbor] = distances[node] + weight;
                }
            }
        }
    }

    // Проверка на отрицательные циклы
    for (const node in graph) {
        for (const neighbor in graph[node]) {
            const weight = graph[node][neighbor];
            if (distances[node] !== Infinity && distances[node] + weight < distances[neighbor]) {
                return "Graph contains a negative weight cycle";
            }
        }
    }

    return distances;
}`,
    python: `def bellman_ford(graph, start_node):
    distances = {node: float('infinity') for node in graph}
    distances[start_node] = 0

    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbor, weight in graph[node].items():
                if distances[node] != float('infinity') and distances[node] + weight < distances[neighbor]:
                    distances[neighbor] = distances[node] + weight

    for node in graph:
        for neighbor, weight in graph[node].items():
            if distances[node] != float('infinity') and distances[node] + weight < distances[neighbor]:
                return "Graph contains a negative weight cycle"
    
    return distances`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

const int INF = 1e9;

struct Edge {
    int from, to, weight;
};

pair<vector<int>, bool> bellmanFord(int n, const vector<Edge>& edges, int startNode) {
    vector<int> distances(n, INF);
    distances[startNode] = 0;

    for (int i = 0; i < n - 1; ++i) {
        for (const auto& edge : edges) {
            if (distances[edge.from] != INF && distances[edge.from] + edge.weight < distances[edge.to]) {
                distances[edge.to] = distances[edge.from] + edge.weight;
            }
        }
    }

    for (const auto& edge : edges) {
        if (distances[edge.from] != INF && distances[edge.from] + edge.weight < distances[edge.to]) {
            return {distances, false};
        }
    }

    return {distances, true};
}`
};


export const descriptionFloydWarshall = "Алгоритм Флойда-Уоршелла — это алгоритм для нахождения кратчайших путей между всеми парами вершин в взвешенном графе. Он может работать как с положительными, так и с отрицательными весами рёбер, но не с циклами отрицательного веса.";

export const usingFloydWarshall = [
    "Для нахождения кратчайших путей между всеми парами вершин в графе.",
    "Когда в графе есть рёбра с отрицательными весами, но нет циклов с отрицательным весом."
];

export const ideaFloydWarshall = [
    "Использует динамическое программирование.",
    "Создает матрицу смежности, где `dist[i][j]` изначально равно весу ребра от `i` до `j`.",
    "Использует три вложенных цикла, чтобы последовательно обновлять кратчайшие пути, проходя через каждую промежуточную вершину `k`. Формула обновления: `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`."
];

export const codeFloydWarshall = {
    javascript: `function floydWarshall(graph) {
    const nodes = Object.keys(graph);
    const V = nodes.length;
    const dist = [];

    for (let i = 0; i < V; i++) {
        dist[i] = [];
        for (let j = 0; j < V; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (graph[nodes[i]][nodes[j]] !== undefined) {
                dist[i][j] = graph[nodes[i]][nodes[j]];
            } else {
                dist[i][j] = Infinity;
            }
        }
    }

    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}`,
    python: `def floyd_warshall(graph):
    nodes = list(graph.keys())
    V = len(nodes)
    node_to_index = {node: i for i, node in enumerate(nodes)}

    dist = [[float('inf')] * V for _ in range(V)]

    for i in range(V):
        dist[i][i] = 0

    for u in graph:
        for v, weight in graph[u].items():
            i = node_to_index[u]
            j = node_to_index[v]
            dist[i][j] = weight

    for k in range(V):
        for i in range(V):
            for j in range(V):
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

const int INF = 1e9;

vector<vector<int>> floydWarshall(const vector<vector<int>>& graph) {
    int n = graph.size();
    vector<vector<int>> dist = graph;

    for (int k = 0; k < n; ++k) {
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (dist[i][k] != INF && dist[k][j] != INF) {
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
    return dist;
}`
};


export const descriptionPrim = "Алгоритм Прима — это жадный алгоритм для нахождения минимального остовного дерева (MST) в взвешенном неориентированном графе. MST — это подграф, который соединяет все вершины вместе, не содержит циклов и имеет минимальную общую сумму весов рёбер.";

export const usingPrim = [
    "Для нахождения минимального остовного дерева в взвешенном неориентированном графе.",
    "В приложениях, таких как проектирование сетей связи, где нужно соединить все узлы с минимальной общей стоимостью."
];

export const ideaPrim = [
    "Начинает с произвольной вершины и постепенно добавляет рёбра с наименьшим весом, которые соединяют дерево с непосещенной вершиной, не образуя циклов.",
    "Использует приоритетную очередь для эффективного выбора следующего ребра с минимальным весом.",
    "Алгоритм останавливается, когда все вершины графа включены в остовное дерево."
];

export const codePrim = {
    javascript: `class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    enqueue(element, priority) {
        this.heap.push({ element, priority });
        this.heap.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.heap.shift();
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

function prim(graph) {
    const startNode = Object.keys(graph)[0];
    const visited = new Set();
    const minSpanningTree = [];
    const pq = new PriorityQueue();

    visited.add(startNode);
    for (const neighbor in graph[startNode]) {
        pq.enqueue({ from: startNode, to: neighbor, weight: graph[startNode][neighbor] }, graph[startNode][neighbor]);
    }

    while (!pq.isEmpty()) {
        const { element: edge } = pq.dequeue();
        const { to, weight } = edge;

        if (!visited.has(to)) {
            visited.add(to);
            minSpanningTree.push(edge);
            for (const neighbor in graph[to]) {
                if (!visited.has(neighbor)) {
                    pq.enqueue({ from: to, to: neighbor, weight: graph[to][neighbor] }, graph[to][neighbor]);
                }
            }
        }
    }
    return minSpanningTree;
}`,
    python: `import heapq

def prim(graph):
    start_node = list(graph.keys())[0]
    visited = {start_node}
    min_spanning_tree = []
    pq = []

    for neighbor, weight in graph[start_node].items():
        heapq.heappush(pq, (weight, start_node, neighbor))

    while pq:
        weight, u, v = heapq.heappop(pq)
        
        if v not in visited:
            visited.add(v)
            min_spanning_tree.append((u, v, weight))
            
            for neighbor, neighbor_weight in graph[v].items():
                if neighbor not in visited:
                    heapq.heappush(pq, (neighbor_weight, v, neighbor))

    return min_spanning_tree`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>

using namespace std;

struct Edge {
    int from, to, weight;
};

struct CompareEdge {
    bool operator()(const Edge& a, const Edge& b) {
        return a.weight > b.weight;
    }
};

vector<Edge> prim(int n, const vector<vector<pair<int, int>>>& graph) {
    priority_queue<Edge, vector<Edge>, CompareEdge> pq;
    unordered_set<int> visited;
    vector<Edge> minSpanningTree;

    int startNode = 0;
    visited.insert(startNode);
    for (const auto& edge : graph[startNode]) {
        pq.push({startNode, edge.first, edge.second});
    }

    while (!pq.empty()) {
        Edge currentEdge = pq.top();
        pq.pop();

        int toNode = currentEdge.to;
        if (visited.find(toNode) == visited.end()) {
            visited.insert(toNode);
            minSpanningTree.push_back(currentEdge);

            for (const auto& edge : graph[toNode]) {
                int neighbor = edge.first;
                int weight = edge.second;
                if (visited.find(neighbor) == visited.end()) {
                    pq.push({toNode, neighbor, weight});
                }
            }
        }
    }
    return minSpanningTree;
}`
};