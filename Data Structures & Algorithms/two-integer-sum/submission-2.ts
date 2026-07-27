class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsSet = new Map<number, number>();
        for (let i = 0; i <= nums.length - 1; i++) {
            var difference = target - nums[i];

            if (numsSet.has(difference)) 
                return [numsSet.get(difference), i];

            numsSet.set(nums[i], i);
        }
        return [];
    }
}