class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mapCount = new Map<number, number>();

        for (let i = 0; i <= nums.length - 1; i++){
            const count = (mapCount.get(nums[i]) ?? 0) + 1;
            mapCount.set(nums[i], count);
        }

        const countArray = [...mapCount.entries()].sort((a, b) => a[1] < b[1] ? 1 : -1);
        return countArray.map(x => x[0]).slice(0, k);
    }
}
