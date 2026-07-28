class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = Array(nums.length).fill(0);
        const right: number[] = Array(nums.length).fill(0);
        const left: number[] = Array(nums.length).fill(0);

        for (let i = 0; i <= nums.length - 1; i++) {
            left[i] = (nums[i - 1] ?? 1) * (left[i - 1] ?? 1);
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            right[i] = (nums[i + 1] ?? 1) * (right[i + 1] ?? 1);
            result[i] = right[i] * left[i];
        }

        return result;
    }
}
