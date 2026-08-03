class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxResult = 0;
        let i = 0;
        let j = heights.length - 1;

        while (i < j){
            let indexDifference = j - i;
            let minHeight = Math.min(heights[i], heights[j]);
            let res = indexDifference * minHeight;
            if (res > maxResult){
                maxResult = res;
            }

            if (heights[i] > heights[j]){
                j--;
            }
            else {
                i++;
            }
        }
        return maxResult;
    }
}
