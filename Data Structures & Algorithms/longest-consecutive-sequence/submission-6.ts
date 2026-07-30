class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let result = 0;
        let set = new Set<number>(nums);
        
        for (let num of set){
            if (set.has(num - 1))
                continue;

            var lastValue = num;
            var length = 1;
            while (set.has(lastValue + 1)){
                lastValue++;
                length++;
                continue;
            }
            result = Math.max(length, result);
            
        }
        return result;
    }
}
