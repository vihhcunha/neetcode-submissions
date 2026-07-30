class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let result = 0;

        for (let i = 0; i <= nums.length - 1; i++){
            let lastNumber = nums[i];
            let length = 1;
            let j = 0;
            while (j <= nums.length - 1){
                if (lastNumber + 1 == nums[j]){
                    lastNumber = nums[j];
                    length++;
                    j = 0;
                    continue;
                }
                j++;
            }
            if (length >= result)
                result = length;
        }
        return result;
    }
}
