class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];

        for (let i = 0; i <= nums.length - 1; i++){
            var partialResult = 1;
            for (let j = 0; j <= nums.length - 1; j++){
                if (i == j)
                    continue;

                partialResult = partialResult * nums[j];
            }
            result.push(partialResult);
        }

        return result;
    }
}
