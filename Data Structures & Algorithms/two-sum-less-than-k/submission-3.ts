class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    twoSumLessThanK(nums: number[], k: number): number {
        let result = -1;
        nums.sort((a,b) => a - b);
        for (let i = 0; i <= nums.length - 1; i++) {
            if (nums[i] >= k){
                break;
            }
            for (let j = 0; j <= nums.length - 1; j++) {
                if (nums[j] >= k){
                    break;
                }
                if (i == j) {
                    continue;
                }
                let sum = nums[i] + nums[j];
                if (sum < k) {
                    result = Math.max(sum, result);
                }
            } 
        }
        return result;
    }
}
