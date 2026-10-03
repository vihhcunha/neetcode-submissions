class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    twoSumLessThanK(nums: number[], k: number): number {
        let result = -1;
        const count = new Array(1001).fill(0);
        for (let num of nums) {
            count[num]++;
        }
        let j = 1000;
        let i = 0;

        while (i <= j) {
            let sum = i + j;
            if (sum >= k || count[j] == 0) {
                j--;
            }
            else {
                if (count[i] > (i < j ? 0 : 1)) {
                    result = Math.max(result, sum);
                }
                i++;
            }
        }
        return result;
    }
}
