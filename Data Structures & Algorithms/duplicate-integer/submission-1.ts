class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        var map: Map<number, number> = new Map();
        for (let i = 0; i <= nums.length - 1; i++){
            if (map.has(nums[i]))
                return true;
                
            map.set(nums[i], i);
        }
        return false;
    }
}
