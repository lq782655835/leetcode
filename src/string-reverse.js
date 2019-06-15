/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 反转
 */
var reverseString = function(s) {
    // let middleIndex = Math.floor(s.length / 2)
    // for (let i = 0; i < s.length; i++) {
    //     if (i < middleIndex) {
    //         swap(i, s.length - i - 1, s)
    //     }
    // }
    // return s
    for (let i = 0, j = s.length - 1; i < j;i++,j--) {
        swap(i, j, s)
    }
    return s
};

function swap(x, y, s) {
    let temp = s[x]
    s[x] = s[y]
    s[y] = temp
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))