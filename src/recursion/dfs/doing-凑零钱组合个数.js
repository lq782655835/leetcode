// 给定一个整数金额的整钱n，还有2，3，5元三种货币，要你计算出所有能凑出整钱的组合个数。

// 笨办法，纯循环
function countMoney(total) {
    if (total < 2) return 0;

    var result = 0;
    var maxAmount = total / 2; // 最小面币是2，所以除以2
    for (var i = 0; i <= maxAmount; i++) { // 5
        for (var j = 0; j <= maxAmount; j++) { // 3
            for (var k = 0; k <= maxAmount; k++) { // 2
                var sum = i * 5 + j * 3 + k * 2;
                if (sum == total) {
                    result++;
                    break;
                } else if (sum > total) {
                    break;
                }
            }
        }
    }
    return result;
}
console.log(countMoney(10));

// 找规律，递归
var inputMoneyArray = [2,3,5];
inputMoneyArray.sort().reverse(); // 从大到小排序
function countMoney(amount, moneyArr) {
    // 递归结束条件
    if (amount != 0 && moneyArr.length == 0) return 0; // 不满足
    if (amount == 0) return 1; // 满足

    let [first, ...smallerMoneyArr] = moneyArr // 取出第一个值first
    var sum = 0;
    for (var i = 0; i <= amount / first; i++) { // amount / first是最小循环次数
        var remainingAmount = amount - (first * i); // 除去第一个值first，剩余金额
        sum += countMoney(remainingAmount, smallerMoneyArr); // 递归调用
    }
    return sum;
}
var result = countMoney(10, inputMoneyArray);