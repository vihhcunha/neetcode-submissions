class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    twoSumLessThanK(nums: number[], k: number): number {
        let result = -1;

        for (let i = 0; i <= nums.length - 1; i++) {
            for (let j = 0; j <= nums.length - 1; j++) {
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
