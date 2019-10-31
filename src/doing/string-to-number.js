// 5. 把字符串转换成整数
// 题目来源于剑指 offer 。

// 题目描述
// 将一个字符串转换成一个整数，字符串不是一个合法的数值则返回 0，要求不能使用字符串转换整数的库函数。

// 题目解析
// 这道题要考虑全面，对异常值要做出处理。

// 对于这个题目，需要注意的要点有：

// 指针是否为空指针以及字符串是否为空字符串；

// 字符串对于正负号的处理；

// 输入值是否为合法值，即小于等于'9'，大于等于'0'；

// int为32位，需要判断是否溢出；

// 使用错误标志，区分合法值0和非法值0。

public class Solution {
    public int StrToInt(String str) {
    if (str == null || str.length() == 0)
        return 0;
    boolean isNegative = str.charAt(0) == '-';
    int ret = 0;
    for (int i = 0; i < str.length(); i++) {
        char c = str.charAt(i);
        if (i == 0 && (c == '+' || c == '-'))  /* 符号判定 */
            continue;
        if (c < '0' || c > '9')                /* 非法输入 */
            return 0;
        ret = ret * 10 + (c - '0');
    }
    return isNegative ? -ret : ret;
  }
}

// https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247485091&idx=1&sn=1503058d7c1313552f84073b495c5e76&chksm=fa0e6922cd79e034471194c636e89aa124941a13dabdf4d6197669f51d146f27098b124e5dd8&token=763920087&lang=zh_CN#rd