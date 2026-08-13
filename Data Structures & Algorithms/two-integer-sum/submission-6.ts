class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map<number, number>();

        for (let i = 0; i <= nums.length - 1; i++) {
            let needed = target - nums[i];
            let mapIndex = map.get(needed)
            if (mapIndex != null) {
                return [mapIndex, i];
            }
            map.set(nums[i], i);
        }

        return [];
    }
}