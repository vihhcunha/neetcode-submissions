class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a,b) => a[0] - b[0]);
        let i = 1;
        let result = [intervals[0]];
        while (i <= intervals.length - 1) {
            if (intervals[i][0] <= result[result.length - 1][1]) {
                result[result.length - 1][1] = Math.max(intervals[i][1], result[result.length - 1][1]);
            }
            else {
                result.push(intervals[i]);
            }
            i++;
        }
        return result;
    }
}
