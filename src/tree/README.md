# 树的深度优先遍历与广度优先遍历

![https://miro.medium.com/max/640/0*miG6xdyYzdvrB67S.gif]()

## 基于栈的深度优先

栈：后进先出，适合先深度left,中间的right都保存到栈中

``` js
// 假设节点：Node { left, right, val}
function DFS_By_Stack(root) {
    if (root === null) return

    let stack = []
    let currentNode = root
    while(currentNode) {
        let { left, right, val } = currentNode
        console.log(val, 'serach by dfs')
        right && stack.push(right) // 先把right存入栈中
        if (left) {
            currentNode = left // 关键，left一条道走到黑
        } else {
            currentNode = stack.pop()
        }
    }

    // or 变种的栈实现DFS
    // let queue = [root]
    // while(queue.length) {
    //     let { left, right, val } = queue.shift()
    //     console.log(val, 'serach by dfs')
    //     right && queue.unshift(right)
    //     left && queue.unshift(left)
    // }
}
```

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

## 思考题

思考题： Node节点变为{ val, children} （更符合现实案例）

// 基于变种队列的深度优先搜索：（得益于js语言 array数组同时集成了队列和栈）
``` js
// 使用变种的queue实现，非常简单
function DFS_Search_By_Variety_Queue(searchVal) {
    let queue = [root]

    while(queue.length) {
        let { val, children } = queue.shift()

        if(val === searchVal) return true
        else queue.unshift(...children) // children插入到队列前头
    }

    return false
}
```

基于队列的广度优先搜索：
``` js
// 使用纯正queue实现，也非常简单
function BFS_Search_By_Pure_Queue(searchVal) {
    let queue = [root]

    while(queue.length) {
        let { val, children } = queue.shift()

        if(val === searchVal) return true
        else queue.push(...children) // children插入到队列后头
    }

    return false
}
```

## 参考资料

* https://medium.com/@kenny.hom27/breadth-first-vs-depth-first-tree-traversal-in-javascript-48df2ebfc6d1
