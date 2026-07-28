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

        const bucket: number[][] = new Array(nums.length + 1)
            .fill(null)
            .map(() => []);

        for (const [value, count] of mapCount){
            bucket[count]?.push(value);
        }

        const response: number[] = [];
        for (let i = bucket.length - 1, j = 1; i >= 0 && j <= k; i--){
            if (bucket[i] == null || bucket[i].length <= 0)
                continue;
            
            const values = bucket[i];
            response.push(...values);
            j = j + values.length;
        }
        return response;
    }
}
