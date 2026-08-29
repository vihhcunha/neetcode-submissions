class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i <= nums.length - 1; i++) {
            let missingNumber = target - nums[i];
            let j = map.get(missingNumber);
            if (j != null) {
                return [j, i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}