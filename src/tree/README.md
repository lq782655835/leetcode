# 二叉树

## 基于队列的广度优先

``` js
function BFS_By_Queue(root) {
    if (root === null) return

    let queue = [root]
    while(queue.length) {
        let { left, right, val } = queue.shift() // 队列，先进先出。先遍历顶层节点
        console.log(val, 'serach by bfs')
        left && queue.push(left)
        right && queue.push(right)
    }
}
```

变通：计算二叉树的最大深度？ [答案](./maximum-depth-of-binary-tree.js)
