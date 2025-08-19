export const descriptionInOrder = "Обход In-order — это алгоритм обхода дерева, при котором сначала посещается левое поддерево, затем корневой узел, а после — правое поддерево. Этот метод используется для получения отсортированного списка элементов в бинарном дереве поиска (BST).";

export const usingInOrder = [
    "Для получения отсортированного списка элементов из бинарного дерева поиска (BST).",
    "Для копирования дерева, если структура важна."
];

export const ideaInOrder = [
    "Рекурсивно обойти левое поддерево.",
    "Посетить корневой узел.",
    "Рекурсивно обойти правое поддерево."
];

export const codeInOrder = {
    javascript: `function inorderTraversal(node) {
    if (node === null) {
        return;
    }
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
}`,
    python: `def inorder_traversal(node):
    if node is None:
        return
    inorder_traversal(node.left)
    print(node.value)
    inorder_traversal(node.right)`,
    cpp: `#include <iostream>

using namespace std;

struct Node {
    int value;
    Node* left;
    Node* right;
};

void inorderTraversal(Node* node) {
    if (node == nullptr) {
        return;
    }
    inorderTraversal(node->left);
    cout << node->value << " ";
    inorderTraversal(node->right);
}`
};

export const descriptionPreOrder = "Обход Pre-order — это алгоритм обхода дерева, при котором сначала посещается корневой узел, затем левое поддерево, а после — правое поддерево. Этот метод часто используется для создания копии дерева или для построения префиксного выражения.";

export const usingPreOrder = [
    "Для создания копии дерева.",
    "Для преобразования дерева в префиксное выражение.",
    "Для обхода дерева, когда важна обработка родительского узла перед его дочерними."
];

export const ideaPreOrder = [
    "Посетить корневой узел.",
    "Рекурсивно обойти левое поддерево.",
    "Рекурсивно обойти правое поддерево."
];

export const codePreOrder = {
    javascript: `function preorderTraversal(node) {
    if (node === null) {
        return;
    }
    console.log(node.value);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
}`,
    python: `def preorder_traversal(node):
    if node is None:
        return
    print(node.value)
    preorder_traversal(node.left)
    preorder_traversal(node.right)`,
    cpp: `#include <iostream>

using namespace std;

struct Node {
    int value;
    Node* left;
    Node* right;
};

void preorderTraversal(Node* node) {
    if (node == nullptr) {
        return;
    }
    cout << node->value << " ";
    preorderTraversal(node->left);
    preorderTraversal(node->right);
}`
};

export const descriptionPostOrder = "Обход Post-order — это алгоритм обхода дерева, при котором сначала посещается левое поддерево, затем правое поддерево, а после — корневой узел. Этот метод используется для удаления дерева, так как сначала удаляются дочерние узлы, а затем родительские.";

export const usingPostOrder = [
    "Для удаления дерева.",
    "Для преобразования дерева в постфиксное выражение.",
    "Для обхода дерева, когда обработка дочерних узлов должна предшествовать родительскому."
];

export const ideaPostOrder = [
    "Рекурсивно обойти левое поддерево.",
    "Рекурсивно обойти правое поддерево.",
    "Посетить корневой узел."
];

export const codePostOrder = {
    javascript: `function postorderTraversal(node) {
    if (node === null) {
        return;
    }
    postorderTraversal(node.left);
    postorderTraversal(node.right);
    console.log(node.value);
}`,
    python: `def postorder_traversal(node):
    if node is None:
        return
    postorder_traversal(node.left)
    postorder_traversal(node.right)
    print(node.value)`,
    cpp: `#include <iostream>

using namespace std;

struct Node {
    int value;
    Node* left;
    Node* right;
};

void postorderTraversal(Node* node) {
    if (node == nullptr) {
        return;
    }
    postorderTraversal(node->left);
    postorderTraversal(node->right);
    cout << node->value << " ";
}`
};

export const descriptionBinarySearchTree = "Поиск в бинарном дереве поиска (BST) — это эффективный алгоритм для нахождения элемента, основанный на свойстве BST: все узлы в левом поддереве имеют значения меньше, чем у родительского узла, а в правом — больше. Это позволяет отсекать половину дерева на каждом шаге, подобно бинарному поиску.";

export const usingBinarySearchTree = [
    "Для быстрого поиска элементов в бинарном дереве поиска.",
    "Для проверки существования узла с определенным значением."
];

export const ideaBinarySearchTree = [
    "Начинаем с корневого узла.",
    "Если искомое значение меньше значения текущего узла, переходим в левое поддерево.",
    "Если искомое значение больше значения текущего узла, переходим в правое поддерево.",
    "Повторяем процесс, пока не найдем узел с искомым значением или не достигнем пустого узла (null), что означает, что элемент не найден."
];

export const codeBinarySearchTree = {
    javascript: `function searchBST(node, target) {
    if (node === null || node.value === target) {
        return node;
    }
    if (target < node.value) {
        return searchBST(node.left, target);
    } else {
        return searchBST(node.right, target);
    }
}`,
    python: `def search_bst(node, target):
    if node is None or node.value == target:
        return node
    if target < node.value:
        return search_bst(node.left, target)
    else:
        return search_bst(node.right, target)`,
    cpp: `#include <iostream>

using namespace std;

struct Node {
    int value;
    Node* left;
    Node* right;
};

Node* searchBST(Node* node, int target) {
    if (node == nullptr || node->value == target) {
        return node;
    }
    if (target < node->value) {
        return searchBST(node->left, target);
    } else {
        return searchBST(node->right, target);
    }
}`
};