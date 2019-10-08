// 求最大公约数。公约数特征：能被值整除，且是最大的值。
// 如20， 15，最大公约数是5（都能被5整除）
// 如：40，20，最大公约数是20

// 思路：如果能整除，说明kn = m；
// 如果不能整除，m换为n（`n能被余数整除，m一定可以整除，因为上一条kn=m`），剩下再比较m能否在取余的条件下被整除。
function gcd_mod(m, n) {
    if (n === 0) {
        return m
    } else {
        return gcd_mod(n, m%n) // m%n,如果能整除（===0），则返回整除数n
    }
}

console.log(gcd_mod(40, 20))
console.log(gcd_mod(15, 20))
console.log(gcd_mod(13, 3))