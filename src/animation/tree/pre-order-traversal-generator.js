import * as Generate from "../../utils/generate-binary-tree";

export function* preOrderTraversalGenerator() {
    const numNodes = 15;
    const randomNodes = Generate.getRandomNumbers(numNodes, 1, 99);
    const tree = Generate.createBinaryTree(randomNodes);

    if (!tree) {
        return;
    }

    const stack = [tree];
    const visited = [];

    yield {
        tree: tree,
        status: 'initial'
    };

    while (stack.length > 0) {
        const current = stack.pop();

        visited.push(current.value);

        yield {
            tree: tree,
            current: current.value,
            visited: [...visited],
            status: 'iterating'
        };

        if (current.right) {
            stack.push(current.right);
        }
        if (current.left) {
            stack.push(current.left);
        }
    }

    yield {
        tree: tree,
        visited: [...visited],
        status: 'finished'
    };
}