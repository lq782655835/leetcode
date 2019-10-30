# LeetCode算法题解

个人算法实践，详细注释，提供多种解体方案和思路。

## 二分查找

二分法一般针对已经`排好序的数组`。

``` js
// 二分法套路
function dichotomy() {
    // 左边界
    var left ...
    // 右边界
    var right ...
    // 记录答案
    var ans
    while(left <= right) {
        // 中间值
        var middle = Math.floor((left + right) / 2)
        // 猜测是否满足条件
        if (guess(middle, ...)) {
            // 如果满足条件，记录答案
            ans = middle
            // 缩小搜索范围，在更小的值中搜索
            right = middle - 1
        } else  {
            // 在更大的值中搜索
            left = middle + 1
        }
    }
    return ans
}
```

* [二分查找](./src/dichotomy/binary-search.js)<sup>折半搜索</sup>
* [搜索插入位置](./src/dichotomy/search-insert-position.js)
* [x 的平方根](./src/dichotomy/sqrtx.js)
* [第一个错误的版本](./src/dichotomy/first-bad-version.js)
* [寻找比目标字母大的最小字母](./src/dichotomy/find-smallest-letter-greater-than-target.js)

## 二叉树

总结：[二叉树的深度优先遍历与广度优先遍历](./tree/README.md)

* [定义二叉搜索树](./src/tree/BinarySearchTree.js)<sup>递归</sup>
* [相同的树](./src/tree/same-tree.js)<sup>递归</sup>
* [对称二叉树](./src/tree/symmetric-tree.js)<sup>递归、</sup><sup>技巧</sup>
* [二叉搜索树中的搜索](./src/tree/search-in-a-binary-search-tree.js)<sup>递归</sup>
* [判断二叉树是否是高度平衡的二叉树](./src/tree/balanced-binary-tree.js)<sup>递归</sup>
* base-traverse 遍历
    * [二叉树的前序遍历](./src/tree/base-traverse/binary-tree-preorder-traversal.js)<sup>递归、</sup><sup>栈</sup>
    * [二叉树的中序遍历](./src/tree/base-traverse/binary-tree-inorder-traversal.js)<sup>递归</sup>
    * [二叉树的后序遍历](./src/tree/base-traverse/binary-tree-postorder-traversal.js)<sup>递归、</sup><sup>栈</sup>
    * [ 将有序数组转换为二叉搜索树](./src/tree/base-traverse/convert-sorted-array-to-binary-search-tree.js)<sup>递归（分治）、</sup><sup>中序遍历的逆操作</sup>
* depth-first-search 深度优先
    * [给定一个二叉树，返回所有从根节点到叶子节点的路径](./src/tree/depth-first-search/binary-tree-paths.js)<sup>DFS-递归</sup>
    * [路径总和](./src/tree/depth-first-search/path-sum.js)<sup>DFS-递归</sup>
    * [路径总和2](./src/tree/depth-first-search/path-sum-ii.js)<sup>DFS-递归</sup>
* breadth-first-search 广度优先
    * [二叉树的层次遍历 II](./src/tree/breadth-first-search/binary-tree-level-order-traversal-ii.js)<sup>队列BFS</sup>
* [二叉树的最大深度](./src/tree/maximum-depth-of-binary-tree.js)<sup>递归BFS、</sup><sup>队列BFS</sup>
* [二叉树的最小深度](./src/tree/minimum-depth-of-binary-tree.js)<sup>递归BFS、</sup><sup>队列BFS</sup>

## String

* [回文数](./src/string/palindrome-number.js)<sup>技巧、</sup><sup>双指针法</sup>
* [125.验证回文串](./src/string/valid-palindrome.js)<sup>技巧、</sup><sup>双指针法</sup>
* [反转字符串中的元音字母](./src/string/reverse-vowels-of-a-string.js)<sup>双指针法</sup>
* [字符串解码](./src/string/decode-string.js)<sup>栈</sup>
* [实现strStr()](./src/string/implement-strstr.js) 即实现js中indexOf
* [字符串相加](./src/string/add-strings.js)
* [3.无重复字符的最长子串](./src/string/longest-substring-without-repeating-characters.js)
* [383. 赎金信](./src/string/ransom-note.js)<sup>hashmap</sup>

## 技巧题

许多算法题，除了数据结构外，还有许多是解题思路。换个思维方式或许有更多解法。

* [两数之和](./src/skill/two-sum.js)<sup>技巧、</sup><sup>hashmap</sup>
* [两数之和 II - 输入有序数组](./src/skill/two-sum-ii-input-array-is-sorted.js)
* [反转字符串](./src/skill/reverse-string.js)<sup>双指针法</sup>
* [排列硬币]('./src/skill/arranging-coins.js)

## 分治（递归）

递归是分治算法思想最常用方法。

递归的三大要素:
* 第一要素：明确你这个函数想要干什么
* 第二要素：寻找递归结束条件
* 第三要素：找出函数的等价关系式(不断缩小参数的范围)

有关递归的一些优化思路:
1. 考虑是否重复计算
2. 考虑是否可以自底向上

* 简单案例理解
    * [fibonacci](./src/recursion/fib.js)
    * [小青蛙跳台阶](./src/recursion/step.js)
* [翻转链表](./src/recursion/reverse-node-link.js)
* [两数的最大公约数](./src/recursion/max-common-divisor.js)<sup>递归</sup>

## 动态规划

* [经典01背包问题](./src/dynamic-programming/package.js)<sup>递归、</sup><sup>动态规划</sup>
* [1143. 最长公共子序列](./src/dynamic-programming/longest-common-subsequence.js)<sup>递归、</sup><sup>动态规划</sup>
* [字符串最小编辑距离](./src/dynamic-programming/string-min-operation.js)<sup>动态规划</sup>
