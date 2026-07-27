class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (let i = 0; i <= nums.length - 1; i++){
            for (let j = 0; j <= nums.length - 1; j++){
                if (i == j)
                    continue;
                
                if (nums[i] == nums[j])
                    return true;
            }
        }
        return false;
    }
}
