// 881. 救生艇

// 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。

// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

// 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

//  

// 示例 1：

// 输入：people = [1,2], limit = 3
// 输出：1
// 解释：1 艘船载 (1, 2)
// 示例 2：

// 输入：people = [3,2,2,1], limit = 3
// 输出：3
// 解释：3 艘船分别载 (1, 2), (2) 和 (3)
// 示例 3：

// 输入：people = [3,5,3,4], limit = 5
// 输出：4
// 解释：4 艘船分别载 (3), (3), (4), (5)
// 提示：

// 1 <= people.length <= 50000
// 1 <= people[i] <= limit <= 30000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/boats-to-save-people
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    // 解题思路
    // 1. 对给定数组进行升序排序
    // 2. 初始化左右指针
    // 3. 每次都用一个”最重的“和一个”最轻的“进行配对(重点)，如果二人重量小于Limit，则此时的”最轻的“上船，即（left++）。
    // 不管”最轻的“是否上船，”最重的“都要上船，即（right--）并且所需船数量加一，即（num++）
    people.sort((a, b) => (a - b));
    var num = 0
    let left = 0
    let right = people.length - 1
    while (left <= right) {
        if ((people[left] + people[right]) <= limit) {
        left++
        }
        right--
        num++
    }
    return num
};


https://zhuanlan.zhihu.com/p/71643340