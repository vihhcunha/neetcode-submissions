class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let result = 0;
        let set = new Set<number>();

        for (let i = 0; i <= nums.length - 1; i++){
            set.add(nums[i]);
        }
        
        for (let num of set){
            if (set.has(num - 1) == true)
                continue;

            var lastValue = num;
            var length = 1;
            while (true){
                if (set.has(lastValue + 1) == true){
                    lastValue++;
                    length++;
                    continue;
                }
                break;
            }
            result = length >= result ? length : result;
            
        }
        return result;
    }
}
