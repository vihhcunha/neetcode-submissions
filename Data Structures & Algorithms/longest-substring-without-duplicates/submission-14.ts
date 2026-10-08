class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s == "") {
            return 0;
        }

        const set = new Set<string>();
        let max = 1;
        let i = 0;
        let j = 1;
        set.add(s[i]);

        while (j < s.length) {
            if (set.has(s[j]) == false) {
                set.add(s[j]);
                j++;
                max = Math.max(max, j - i);
                continue;
            }
            set.delete(s[i]);
            i++;
        }
        return max;
    }
}
