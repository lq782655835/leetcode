// 有编号分别为a,b,c,d,e的五件物品，它们的重量分别是2,2,6,5,4，它们的价值分别是6,3,5,4,6，现在给你个承重为10的背包，如何让背包里装入的物品具有最大的价值总和？

// 思路：
// 重点是寻找状态转移方程
// int r1 = bagProblem(i-1,j-weights[i]) + values[i]; //放第i件
// int r2 = bagProblem(i-1,j);//不放第i件
// r = Math.max(r1,r2);
function beibao(capacity, weights, values) {
    let n = values.length // 多少件物品

    //方法一：递归实现
    // i {处理到第i件物品} , rest{剩余的空间为rest}
    // let recursion = (i, rest) => {
    //     // 1. 退出循环
    //     if (i < 0 || rest < 0) return 0
    //     // 2. 条件：比对重量，符合条件则价值有效
    //     if (rest >= weights[i]) {
    //         let value = values[i]
    //         // 3. 递归：要与不要的价值，取最大值
    //         let hasValue = recursion(i - 1, rest - weights[i]) + value // 要
    //         let noneValue = recursion(i - 1, rest) // 不要
    //         return Math.max(hasValue, noneValue)
    //     }
    //     return 0
    // }
    // return recursion(n - 1, capacity)

    // // 初始化二维数组
    let value_table = []
    for(let i = 0; i <= n; i++) {
        value_table[i] = []
    }

    for (let i = 0; i<= n; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (i == 0 || j ==0) {
                value_table[i][j] = 0
            } else if (weights[i - 1] < w) {
                let hasValue = value_table[]
                let noneValue = recursion(i - 1, rest) // 不要
                value_table[i][j] = Math.max()
            }
        }
    }
}

// 重量2，3，4
// 价值3，4，5
// 不超过背包总重量5
console.log(beibao(5, [2,3,4], [3,4,5]))


https://www.cnblogs.com/pilihaotian/p/8822927.html
https://blog.csdn.net/qq_32688731/article/details/54025607