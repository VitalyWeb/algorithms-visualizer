export const createBinaryTree = (nodes) => {
    if (nodes.length === 0) return null;
    const tree = { value: nodes[0], left: null, right: null };
    const queue = [tree];
    let i = 1;
    while (queue.length > 0 && i < nodes.length) {
        const currentNode = queue.shift();
        if (nodes[i] !== null) {
            currentNode.left = { value: nodes[i], left: null, right: null };
            queue.push(currentNode.left);
        }
        i++;
        if (i < nodes.length && nodes[i] !== null) {
            currentNode.right = { value: nodes[i], left: null, right: null };
            queue.push(currentNode.right);
        }
        i++;
    }
    return tree;
};

export const createBST = (nodes) => {
    if (nodes.length === 0) return null;

    const insert = (root, value) => {
        if (!root) {
            return { value, left: null, right: null };
        }
        if (value < root.value) {
            root.left = insert(root.left, value);
        } else {
            root.right = insert(root.right, value);
        }
        return root;
    };

    let root = null;
    for (const val of nodes) {
        root = insert(root, val);
    }
    return root;
};

export function getRandomNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers);
}