// 国王和金矿问题
// 有一个国家发现了 5 座金矿，每座金矿的黄金储量不同，需要参与挖掘的工人数也不同。参与挖矿工人的总数是 10 人。每座金矿要么全挖，要么不挖，不能派出一半人挖取一半金矿。要求用程序求解出，要想得到尽可能多的黄金，应该选择挖取哪几座金矿？

// 代码来源：https://www.cnblogs.com/SDJL/archive/2008/08/22/1274312.html

//maxGold[i][j] 保存了i个人挖前j个金矿能够得到的最大金子数，等于 -1 时表示未知
int maxGold[max_people][max_n];

int GetMaxGold(int people, int mineNum){
    int retMaxGold;                            //声明返回的最大金矿数量
    //如果这个问题曾经计算过
    if(maxGold[people][mineNum] != -1){
        retMaxGold = maxGold[people][mineNum]; //获得保存起来的值
    }else if(mineNum == 0) {                   //如果仅有一个金矿时 [ 对应动态规划中的"边界"]
        if(people >= peopleNeed[mineNum])      //当给出的人数足够开采这座金矿
            retMaxGold = gold[mineNum];        //得到的最大值就是这座金矿的金子数
        else                                   //否则这唯一的一座金矿也不能开采
            retMaxGold = 0;                    //得到的最大值为 0 个金子
    }else if(people >= peopleNeed[mineNum])    // 如果人够开采这座金矿[对应动态规划中的"最优子结构"]
    {
        //考虑开采与不开采两种情况，取最大值
        retMaxGold = max(
                         GetMaxGold(people - peopleNeed[mineNum],mineNum - 1) + gold[mineNum],
                         GetMaxGold(people,mineNum - 1)
                         );
    }else//否则给出的人不够开采这座金矿 [ 对应动态规划中的"最优子结构"]
    {
        retMaxGold = GetMaxGold(people,mineNum - 1);     //仅考虑不开采的情况
        maxGold[people][mineNum] = retMaxGold;
    }
    return retMaxGold;
}

出自：https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247484350&idx=1&sn=fc88aa125f5a5269575b4c4d83774f41&chksm=fa0e6c3fcd79e5297257a05b8c75898b4059b1193956c702ff5ef3f2d8d46432bb7484bf6428&scene=21#wechat_redirect
