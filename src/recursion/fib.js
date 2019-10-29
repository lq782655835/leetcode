// 斐波那契数列的是这样一个数列：1、1、2、3、5、8、13、21、34….，即第一项 f(1) = 1,第二项 f(2) = 1…..,第 n 项目为 f(n) = f(n-1) + f(n-2)。求第 n 项的值是多少。

function fib(n) {
    // 方法一：递归
    // if (n === 0) return 0
    // if (n <= 2) return 1
    // return fib(n - 1) + fib(n - 2)

    if (n === 0) return 0
    if (n <= 2) return 1
    // 动态规划，自底向上
    let l1 = 1
    let l2 = 1
    let result = 0
    for(let i = 3; i <= n; i++) {
        result = l1 + l2
        // 状态转移公式
        l1 = l2
        l2 = result
    }
    return result
}

console.log(fib(9))