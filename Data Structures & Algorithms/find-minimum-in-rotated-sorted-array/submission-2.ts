class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        let result = Number.MAX_VALUE;

        while (left <= right) {
            if (nums[left] < nums[right]) {
                return Math.min(nums[left], result);
            }
            let middle = Math.floor(right - left);
            result = Math.min(nums[middle], result);

            if (nums[middle] >= nums[left]) {
                left = middle + 1;
            }
            else {
                right = middle - 1;
            }
        }
        return result;
    }
}
