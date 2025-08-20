import * as Generate from "../../utils/generate-binary-tree";

export function* bstSearchGenerator() {
    const numNodes = 9;
    const randomNodes = Generate.getRandomNumbers(numNodes, 1, 99);
    const tree = Generate.createBST(randomNodes);

     if (!tree) {
        return;
    }

    const allValues = [];
    const collectValues = (node) => {
        if (!node) return;
        allValues.push(node.value);
        collectValues(node.left);
        collectValues(node.right);
    };
    collectValues(tree);
    const target = allValues[Math.floor(Math.random() * allValues.length)];

    let current = tree;
    const visited = [];
    let found = false;

    yield {
        tree: tree,
        target: target,
        status: 'initial'
    };

    while (current) {
        visited.push(current.value);
        
        if (current.value === target) {
            found = true;
            yield {
                tree: tree,
                target: target,
                current: current.value,
                visited: [...visited],
                status: 'found'
            };
            break;
        }

        yield {
            tree: tree,
            target: target,
            current: current.value,
            visited: [...visited],
            status: 'iterating'
        };

        if (target < current.value) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    if (!found) {
        yield {
            tree: tree,
            target: target,
            visited: [...visited],
            status: 'not_found'
        };
    }

    yield {
        tree: tree,
        visited: [...visited],
        status: 'finished'
    };
}