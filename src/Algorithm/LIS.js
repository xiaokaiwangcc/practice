// 最长递增子序列

// 输入：[10, 9, 2, 5, 3, 7, 101, 18]
// 输出：4
// 最长递增上升子序列[2, 3, 7, 101] ,长度4

function lengthOfLIS(arr){
    const dp = new Array(arr.length).fill(1)
    let res = 0
    // 计算dp
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[j] < arr[i]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }
    return res

}

// 优化
const lengthOfLIS2 = function(nums) {
    const pillars = [nums[0]];
    let num = 1;
    for(let i = 1;i<nums.length;i++){
        let cur = nums[i],l = 0,r = num-1;
        // 如果比现有最高的柱子还要高,放在末尾
        if(cur>pillars[r]){
            pillars[num] = cur;
            num++;
        }else{
            // 二分查找合适的柱子
            while(l<r){
                const mid = (l+r) >> 1;
                if(pillars[mid]<cur) l = mid+1
                else if(pillars[mid]>cur) r = mid
                else l = r = mid;
            }
            pillars[l] = cur;
        }
    }
    // 返回柱子数量
    return num;
};

const lengthOfLIS3 = function (nums) {
    const dp = [nums[0]]
    let cur = 0
    for (let i = 0; i < nums.length; i++) {
        if (dp[cur] > nums[i]){
            dp[cur] = nums[i]
            cur++
        }else {
            let left = 0, right = cur, mid = 0, pos = 0
            while (left <= right){
                mid = left+right >> 1
                if (dp[mid] < nums[i]) {
                    left = mid + 1
                    pos = left
                }else{
                    right = mid - 1
                }
            }
            dp[pos] = nums[i]
        }
    }
    console.log('dp', dp)
    console.log('cur', cur)
    return dp.length
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18]
console.time('a')
console.log(lengthOfLIS(arr));
console.timeEnd('a')




console.time('b')
console.log(lengthOfLIS2(arr));
console.timeEnd('b')
console.log(lengthOfLIS3(arr));