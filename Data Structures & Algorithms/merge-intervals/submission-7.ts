class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if (intervals.length <= 0)
            return [];
            
        intervals.sort((a, b) => a[0] - b[0]);
        let res = [];
        res.push(intervals[0]);
        
        for (let interval of intervals) {
            if (interval[0] <= res[res.length - 1][1]) {
                res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
            }
            else {
                res.push(interval);
            }
        }
        return res;
    }
}