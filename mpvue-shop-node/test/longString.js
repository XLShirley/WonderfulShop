// 暴力枚举
var longestpalindrome = function(s){
    let len = s.length
    let ans = s[0]
    let left, right,j

    //暴力枚举，遍历每一个字符都为中心点，
    for(let i=0;i<len;i=j){
        //为什么这样做呢？奇数回文子串和偶数回文子串统一处理。
            //当s[i]==s[j]时即可以判断该回文子串是偶数回文子串
        j=i+1
        while (s[i]===s[j]) j++
        left = i-1
        right = j
        while(left>=0&&right<len&&s[left]===s[right]){
            left--
            right++
        }
        //找出回文子串比较长度，找到更长的则赋值取代之前的回文子串
        while (right-left-1>ans.length){
             ans = s.substring(left+1,right); 
        }
    }
    console.log(ans)
}
longestpalindrome("ada")