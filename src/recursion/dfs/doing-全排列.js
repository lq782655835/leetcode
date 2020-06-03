function permutation(arr) {
    let result = []
    let len = arr.length

    run(0)

    function run(index) {
        if (index === len - 1) { // index在末尾时，结束递归，存入结果
            result.push([...arr])
            return
        }

        for (let i = index; i < len; i++) {
            swap(arr, i, index) // 固定第index位
            run(index + 1) // 递归开始，index + 1后全排列
            swap(arr, i, index) // 数组复原
        }
    }
    return result
}

console.log(permutation(['a', 'b', 'c']))

// https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/hui-su-suan-fa-xiang-jie-xiu-ding-ban