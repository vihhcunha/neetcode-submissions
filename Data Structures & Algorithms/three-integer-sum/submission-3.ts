class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res: number[][] = [];
        nums = nums.sort((x,y) => x - y);
        
        for (let i = 0; i <= nums.length - 1; i++){
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum == 0){
                    let triplet = [nums[i], nums[left], nums[right]];
                    const exists = res.some(row => 
                        row.every((num, index) => num === triplet[index])
                    );
                    if (!exists)
                        res.push(triplet);
                }
                if (sum > 0){
                    right--;
                }
                else {
                    left++;
                }
            }
        }
        return res;
    }
}
