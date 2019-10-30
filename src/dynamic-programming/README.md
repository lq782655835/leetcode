# 动态规划

01背包问题，是用来介绍动态规划算法最经典的例子

01背包的状态转换方程 f[i,j] = Max{ f[i-1,j-Wi]+Pi( j >= Wi ),  f[i-1,j] }

`f[i,j]表示在前i件物品中选择若干件放在承重为 j 的背包中，可以取得的最大价值。`
Pi表示第i件物品的价值。
决策：为了背包中物品总价值最大化，第 i件物品应该放入背包中吗 ？

题目描述：

假设山洞里共有a,b,c,d ,e这5件宝物（不是5种宝物），它们的重量分别是2,2,6,5,4，它们的价值分别是6,3,5,4,6，现在给你个承重为10的背包, 怎么装背包，可以才能带走最多的财富。

有编号分别为a,b,c,d,e的五件物品，它们的重量分别是2,2,6,5,4，它们的价值分别是6,3,5,4,6，现在给你个承重为10的背包，如何让背包里装入的物品具有最大的价值总和？

![image](https://user-images.githubusercontent.com/6310131/67824674-055d0780-fb02-11e9-9691-c08ad6a33ac0.png)

* https://blog.csdn.net/mu399/article/details/7722810
* https://www.youtube.com/watch?v=SB55XBMO4O8&list=PLljKjXpjNpgfX5tr-HY3HnwiXDM1WIzb-&index=40
* https://zhuanlan.zhihu.com/p/80682302?utm_medium=social&utm_source=wechat_session