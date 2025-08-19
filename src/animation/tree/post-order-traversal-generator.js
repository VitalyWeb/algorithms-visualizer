import * as Generate from "../../utils/generate-binary-tree";

export function* postOrderTraversalGenerator() {
    const numNodes = 15;
    const randomNodes = Generate.getRandomNumbers(numNodes, 1, 99);
    const tree = Generate.createBinaryTree(randomNodes);

    if (!tree) {
        return;
    }

    const s1 = [tree];
    const s2 = [];
    const visited = [];

    yield {
        tree: tree,
        status: 'initial'
    };

    while (s1.length > 0) {
        const current = s1.pop();
        s2.push(current);

        if (current.left) {
            s1.push(current.left);
        }
        if (current.right) {
            s1.push(current.right);
        }
    }

    while (s2.length > 0) {
        const node = s2.pop();
        visited.push(node.value);

        yield {
            tree: tree,
            current: node.value,
            visited: [...visited],
            status: 'iterating'
        };
    }

    yield {
        tree: tree,
        visited: [...visited],
        status: 'finished'
    };
}