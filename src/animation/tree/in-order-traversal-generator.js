import * as Generate from "../../utils/generate-binary-tree";

export function* inOrderTraversalGenerator() {
    const numNodes = 15;
    const randomNodes = Generate.getRandomNumbers(numNodes, 1, 99);
    const tree = Generate.createBinaryTree(randomNodes);

    const stack = [];
    let current = tree;
    const visited = [];

    yield {
        tree: tree,
        status: 'initial'
    };

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        visited.push(current.value);
        
        yield {
            tree: tree,
            current: current.value,
            visited: [...visited],
            status: 'iterating'
        };

        current = current.right;
    }

    yield {
        tree: tree,
        visited: [...visited],
        status: 'finished'
    };
}