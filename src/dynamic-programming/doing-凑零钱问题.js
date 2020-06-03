// 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，
// 问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 。(最少硬币凑出目标金额)

// https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/dong-tai-gui-hua-xiang-jie-jin-jie

// # 伪码框架
// def coinChange(coins: List[int], amount: int):
//     # 定义：要凑出金额 n，至少要 dp(n) 个硬币(重要！！！)
//     def dp(n):
//         # 做选择，选择需要硬币最少的那个结果
//         for coin in coins:
//             res = min(res, 1 + dp(n - coin))
//         return res
//     # 我们要求的问题是 dp(amount)
//     return dp(amount)

def coinChange(coins: List[int], amount: int):

    def dp(n):
        # base case
        if n == 0: return 0
        if n < 0: return -1
        # 求最小值，所以初始化为正无穷
        res = float('INF')
        for coin in coins:
            subproblem = dp(n - coin)
            # 子问题无解，跳过
            if subproblem == -1: continue
            res = min(res, 1 + subproblem)

        return res if res != float('INF') else -1

    return dp(amount)