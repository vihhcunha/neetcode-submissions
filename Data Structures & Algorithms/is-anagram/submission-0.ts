class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // brute force O(nlogn + mlogm)
        s = [...s].sort().join();
        t = [...t].sort().join();

        return s == t;
    }
}
