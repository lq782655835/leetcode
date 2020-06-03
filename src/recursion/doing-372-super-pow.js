// 372. 超级次方
// 你的任务是计算 ab 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。

// 示例 1:

// 输入: a = 2, b = [3]
// 输出: 8
// 示例 2:

// 输入: a = 2, b = [1,0]
// 输出: 1024


/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {

};

https://labuladong.gitbook.io/algo/gao-pin-mian-shi-xi-lie/superpower

![](https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2F-M5mNKb1DvzLOmKFp0Tr%2F-M5mNMdRgVnz7WGrDdPe%2Fformula1.png?alt=media)

``` c
/ 计算 a 的 k 次方的结果
// 后文我们会手动实现
int mypow(int a, int k);

int superPow(int a, vector<int>& b) {
    // 递归的 base case
    if (b.empty()) return 1;
    // 取出最后一个数
    int last = b.back();
    b.pop_back();
    // 将原问题化简，缩小规模递归求解
    int part1 = mypow(a, last);
    int part2 = mypow(superPow(a, b), 10);
    // 合并出结果
    return part1 * part2;
}
```
