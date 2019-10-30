// // 重建二叉树

// 根据二叉树的前序遍历和中序遍历的结果，重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// preorder = [3,9,20,15,7]
// inorder =  [9,3,15,20,7]

// 题目解析
// 前序遍历的第一个值为根节点的值，使用这个值将中序遍历结果分成两部分，左部分为树的左子树中序遍历结果，右部分为树的右子树中序遍历的结果。

// 缓存中序遍历数组每个值对应的索引
private Map<Integer, Integer> indexForInOrders = new HashMap<>();

public TreeNode reConstructBinaryTree(int[] pre, int[] in) {
    for (int i = 0; i < in.length; i++)
        indexForInOrders.put(in[i], i);
    return reConstructBinaryTree(pre, 0, pre.length - 1, 0);
}

private TreeNode reConstructBinaryTree(int[] pre, int preL, int preR, int inL) {
    if (preL > preR)
        return null;
    TreeNode root = new TreeNode(pre[preL]);
    int inIndex = indexForInOrders.get(root.val);
    int leftTreeSize = inIndex - inL;
    root.left = reConstructBinaryTree(pre, preL + 1, preL + leftTreeSize, inL);
    root.right = reConstructBinaryTree(pre, preL + leftTreeSize + 1, preR, inL + leftTreeSize + 1);
    return root;
}

出自：https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247484985&idx=1&sn=93343d355abf36c77a361c9931cbe2d1&chksm=fa0e69b8cd79e0ae1e6b57665a456da5f421cc92fe6934337f1eb1e18c3fd6a3c1adc8ca88c2&scene=21#wechat_redirect