// Sort import
import { quickSortGenerator } from "./sort/quick-sort-generator";
import { timSortGenerator } from "./sort/tim-sort-generator";
import { introSortGenerator } from "./sort/intro-sort-generator";
import { radixSortGenerator } from "./sort/radix-sort-generator";
import { countingSortGenerator } from "./sort/counting-sort-generator";
import { mergeSortGenerator } from "./sort/merge-sort-generator";
import { bucketSortGenerator } from "./sort/bucket-sort-generator";

// Search import
import { linearSearchGenerator } from "./search/linear-search-generator";
import { binarySearchGenerator } from "./search/binary-search-generator";
import { interpolationSearchGenerator } from "./search/interpolation-search-generator";
import { exponentialSearchGenerator } from "./search/exponential-search-generator";
import { ternarySearchGenerator } from "./search/ternary-search-generator";
import { jumpSearchGenerator } from "./search/jump-search-generator";
import { fibonacciSearchGenerator } from "./search/fibonacci-search-generator";

// Graph import
import { bfsGenerator } from "./graph/bfs-generator";
import { dfsGenerator } from "./graph/dfs-generator";
import { dijkstraGenerator } from "./graph/dijkstra-generator";
import { bellmanFordGenerator } from "./graph/bellman-ford-generator";
import { floydWarshallGenerator } from "./graph/floyd-warshall-generator";
import { kruskalGenerator } from "./graph/kruskal-generator";
import { primGenerator } from "./graph/prim-generator";

// // Tree import
// import { inOrderTraversalGenerator } from "./tree/in-order-traversal-generator";
// import { preOrderTraversalGenerator } from "./tree/pre-order-traversal-generator";
// import { postOrderTraversalGenerator } from "./tree/post-order-traversal-generator";
// import { bstSearchGenerator } from "./tree/bst-search-generator";

// // Numeric import
// import { gcdGenerator } from "./numeric/gcd-generator";
// import { lcmGenerator } from "./numeric/lcm-generator";
// import { fastPowerGenerator } from "./numeric/fast-power-generator";
// import { primeCheckGenerator } from "./numeric/prime-check-generator";
// import { factorialGenerator } from "./numeric/factorial-generator";

export const animationGenerators = {
  // sort
  "quick-sort": quickSortGenerator,
  "tim-sort": timSortGenerator,
  "intro-sort": introSortGenerator,
  "radix-sort": radixSortGenerator,
  "counting-sort": countingSortGenerator,
  "merge-sort": mergeSortGenerator,
  "bucket-sort": bucketSortGenerator,

  // search
  "linear-search": linearSearchGenerator,
  "binary-search": binarySearchGenerator,
  "interpolation-search": interpolationSearchGenerator,
  "exponential-search": exponentialSearchGenerator,
  "ternary-search": ternarySearchGenerator,
  "jump-search": jumpSearchGenerator,
  "fibonacci-search": fibonacciSearchGenerator,

  // graph
  "bfs": bfsGenerator,
  "dfs": dfsGenerator,
  "dijkstra": dijkstraGenerator,
  "bellman-ford": bellmanFordGenerator,
  "floyd-warshall": floydWarshallGenerator,
  "kruskal": kruskalGenerator,
  "prim": primGenerator,

  // // tree
  // "in-order": inOrderTraversalGenerator,
  // "pre-order": preOrderTraversalGenerator,
  // "post-order": postOrderTraversalGenerator,
  // "bst-search": bstSearchGenerator,

  // // numeric
  // "gcd": gcdGenerator,
  // "lcm": lcmGenerator,
  // "fast-power": fastPowerGenerator,
  // "prime-check": primeCheckGenerator,
  // "factorial": factorialGenerator,
};