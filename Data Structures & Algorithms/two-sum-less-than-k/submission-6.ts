class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    twoSumLessThanK(nums: number[], k: number): number {
        let result = -1;
        nums.sort((a,b) => a - b);
        let j = nums.length - 1;
        let i = 0;

        while (j > i) {
            let sum = nums[i] + nums[j];
            if (sum < k) {
                result = Math.max(result, sum);
                i++;
                continue;
            }
            j--;
        }
        return result;
    }
}
