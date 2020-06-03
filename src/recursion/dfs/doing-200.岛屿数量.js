// 200. 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

 

// 示例 1:

// 输入:
// 11110
// 11010
// 11000
// 00000
// 输出: 1
// 示例 2:

// 输入:
// 11000
// 11000
// 00100
// 00011
// 输出: 3
// 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // 思路：如果当前等于1，则改为0.同时递归连接的上下左右，都改为0，
    let count = 0
    function dfs(i, j) {
        if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === '0') return

        grid[i][j] = '0'
        // 上下左右递归，消除连在一起的1
        dfs(i, j-1)
        dfs(i, j + 1)
        dfs(i - 1, j)
        dfs(i + 1, j)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(i, j)
            }
        }
    }

    return count
};