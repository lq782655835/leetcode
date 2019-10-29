// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法.

function step(n) {
    // // 递归
    // if (n <= 2) return n // 递归结束条件
    // return step(n - 1) + step(n - 2) // 要么跳1级，要么跳两级，对应fn(n-1)种跳法

    // 动态规划
    if (n <=2 ) return n
    let l1 = 1
    let l2 = 2
    for (let i = 3; i <= n; i++) {
        result = l1 + l2
        // 状态改变
        l1 = l2
        l2 = result
    }
    return result
}

console.log(step(3))
console.log(step(4))
console.log(step(5))
