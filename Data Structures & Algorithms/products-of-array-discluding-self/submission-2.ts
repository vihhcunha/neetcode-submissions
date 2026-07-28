class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = Array(nums.length).fill(0);

        for (let i = 0; i <= nums.length - 1; i++) {
            result[i] = (nums[i - 1] ?? 1) * (result[i - 1] ?? 1);
        }

        let nextRightValue = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            nextRightValue = (nums[i + 1] ?? 1) * (nextRightValue ?? 1);
            result[i] = nextRightValue * result[i];
        }

        return result;
    }
}
