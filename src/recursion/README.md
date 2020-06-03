# 递归

分治算法思想的常用方法(经常用在DFS中)。

递归的三大要素:
* 第一要素：明确你这个函数想要干什么
* 第二要素：寻找递归结束条件
* 第三要素：找出函数的等价关系式(不断缩小参数的范围)

有关递归的一些优化思路:
1. 考虑是否重复计算
2. 考虑是否可以自底向上

## 参考
* https://mp.weixin.qq.com/s/mJ_jZZoak7uhItNgnfmZvQ

## DFS

## 回溯算法

https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/hui-su-suan-fa-xiang-jie-xiu-ding-ban

回溯算法就是个多叉树的遍历问题，关键就是在前序遍历和后序遍历的位置做一些操作，算法框架如下：

``` python
def backtrack(...):
    for 选择 in 选择列表:
        做选择
        backtrack(...)
        撤销选择
```


## BFS

常用队列处理（路径最短，空间复杂度高）

https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/bfs-kuang-jia

