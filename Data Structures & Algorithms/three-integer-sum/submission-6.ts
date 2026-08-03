class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res: number[][] = [];
        nums = nums.sort((x,y) => x - y);
        
        for (let i = 0; i <= nums.length - 2; i++){
            let left = i + 1;
            let right = nums.length - 1;
            if (i > 0 && nums[i] === nums[i - 1])
                continue;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum == 0){
                    let triplet = [nums[i], nums[left], nums[right]];
                    res.push(triplet);

                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) 
                        left++;
                    
                    while (left < right && nums[right] === nums[right + 1])
                        right--;

                    continue;
                }
                if (sum > 0)
                    right--;
                else 
                    left++;
                
            }
        }
        return res;
    }
}
