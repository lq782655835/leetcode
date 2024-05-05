
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

function backtrack(list, temp, nums) {
  // 终止条件
  if (temp.length === nums.length) {
      return list.push([...temp]); // 存放结果
  }

  for (let i = 0; i < nums.length; i++) {
      // 找到一个不在 temp 里的数字（这里用数组的 api 可以判断是否重复，重复节点不放入 tmp）
      if (temp.includes(nums[i])) continue;

      temp.push(nums[i]); // 放进去一个元素
      backtrack(list, temp, nums); // 执行递归公式
      temp.pop(); // 撤回这个元素
  }
}

var permute = function (nums) {
  let list = [];
  backtrack(list, [], nums);
  return list;
};

// 作者：卡乐咪粽子
// 链接：https://leetcode.cn/problems/permutations/solutions/2668319/leetcode-46-quan-pai-lie-1-hui-su-by-110-972f/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。