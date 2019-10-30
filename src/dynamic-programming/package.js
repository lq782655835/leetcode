// 有编号分别为a,b,c,d,e的五件物品，它们的重量分别是2,2,6,5,4，它们的价值分别是6,3,5,4,6，现在给你个承重为10的背包，如何让背包里装入的物品具有最大的价值总和？

// 思路：
// 重点是寻找状态转移方程
// int r1 = bagProblem(i-1,j-weights[i]) + values[i]; //放第i件
// int r2 = bagProblem(i-1,j);//不放第i件
// r = Math.max(r1,r2);
function package(capacity, weights, values) {
    let n = values.length // 多少件物品,也等于weight.length

    //方法一：递归实现
    // (重点：理解函数参数的意义，对于递归及其关键)
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

    // 方法二：动态规划
    // 初始化二维数组
    let value_table = []
    for(let i = 0; i <= n; i++) {
        value_table[i] = [] // 存储的是value
    }

    for (let i = 0; i<= n; i++) { // 第i件是否可取
        let w = weights[i] // i件的重量
        let v = values[i] // i件的价值
        for (let c = 0; c <= capacity; c++) {// 当前容量
            // c表示当前容量，根据限定背包量c，算出每件物品的最大价值
            if (i == 0 || c ==0) {
                value_table[i][c] = 0
            } else if (w <= c) {
                let hasValue = value_table[i - 1][c - w] + v
                let noneValue = value_table[i - 1][c]
                value_table[i][c] = Math.max(hasValue, noneValue)
            } else {
                value_table[i][c] = value_table[i - 1][c]
            }
            console.log(value_table)
        }
    }
    return value_table[n][capacity]
}

// 重量2，3，4
// 价值3，4，5
// 不超过背包总重量5
console.log(package(5, [2,3,4], [3,4,5])) // 7


// https://www.cnblogs.com/pilihaotian/p/8822927.html
// https://blog.csdn.net/qq_32688731/article/details/54025607