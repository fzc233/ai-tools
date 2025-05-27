//给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
function test(nums,k){
    const set = new Set();
    for (let i = 0;i<nums.length;i++){
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
        if (set.size>k){
            set.delete(nums[i-k]);
        }
    }
    return false;
}

console.log(test( [1,2,3,1,2,3],2))