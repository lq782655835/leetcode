// 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

// 例如，

// 给定二叉搜索树:

//         4
//        / \
//       2   7
//      / \
//     1   3

// 和值: 2
// 你应该返回如下子树:

//       2     
//      / \   
//     1   3
// 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-in-a-binary-search-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // 方法一：递归
//     if (root === null) return null
    
//     let search = node => {
//         if (node === null) return null
        
//         let {left, right, val: v} = node
//         if (val === v) return node
        
//         if (v > val) {
//             return search(left)
//         } else {
//             return search(right)
//         }
        
//     }
//     return search(root)

    // 版本2: 简易写法
    // if (root == null || root.val == val) return root
    // return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val)
    
    // 方法二：迭代
    while(true) {
        if (root == null || root.val == val) return root
        root = root.val > val ? root.left : root.right // 不等，则每次改变root对象
    }
};