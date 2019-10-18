//定义类
function BinarySearchTree() {

    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }

    var root = null

    this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
}

function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left) {
            insertNode(node.left, newNode)
        } else {
            node.left = newNode
        }
    } else {
        if (node.right) {
            insertNode(node.right, newNode)
        } else {
            node.right = newNode
        }
    }
}

// 调用
var tree = BinarySearchTree()
[11, 2, 3, 6, 8, 11].forEach(val => tree.insert(val))