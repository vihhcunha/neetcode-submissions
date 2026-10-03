class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a,b) => a[0] - b[0]);
        let result = [intervals[0]];
        for (let interval of intervals) {
            if (interval[0] <= result[result.length - 1][1]) {
                result[result.length - 1][1] = Math.max(interval[1], result[result.length - 1][1]);
            }
            else {
                result.push(interval);
            }
        }
        return result;
    }
}